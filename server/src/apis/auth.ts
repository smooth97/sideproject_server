import { PrismaClient } from '@prisma/client';
import * as express from 'express';
import { sign } from 'jsonwebtoken';
interface RequestWithUser extends express.Request {
  user?: any;
}
import {
  encryptCredential,
  validateCredential,
  verifyAccessToken,
} from '../utils/auth';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = async (
  req: express.Request,
  res: express.Response,
): Promise<undefined> => {
  const { email, password, ...formData } = req.body;

  const userWithEmail = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userWithEmail) {
    res.status(400).send({
      error: 'takenEmail',
      message: 'Email is already taken',
    });
    return;
  }

  if (!email || !password) {
    res.status(400).send({
      error: 'missingData',
      message: 'Required parameter is missed (email||password)',
    });
    return;
  }

  let createdUser;
  const hashedPassword = await encryptCredential(password);
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (typeof ip === 'string' && ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7);
  }

  try {
    createdUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ip,
        userAgent: req.headers['user-agent'],
        lastSignedIn: new Date().toISOString(),
        ...formData,
      },
    });
  } catch (err) {
    res.status(500).send({
      error: 'InternalServerError',
      message: 'The error occurred during the sign up process',
    });
    return;
  }

  res.status(200).send({
    user: createdUser,
  });
};

export const login = async (
  req: express.Request,
  res: express.Response,
): Promise<undefined> => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email,
      deletedAt: null,
    },
  });

  if (!user) {
    res.status(400).send({
      error: 'wrongEmailOrPassword',
      message: 'Email or Password Incorrect',
    });
    return;
  }

  const isPasswordValid = await validateCredential(password, user.password);

  if (!isPasswordValid) {
    res.status(400).send({
      error: 'wrongEmailOrPassword',
      message: 'Email or Password Incorrect',
    });
    return;
  }

  // if (!user.verified) {
  //   return res.status(400).send({
  //     error: 'notVerified',
  //     message: 'User is not verified',
  //   });
  // }

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (typeof ip === 'string' && ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7);
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      lastSignedIn: new Date().toISOString(),
      ip: (ip as string) || user.ip,
      userAgent: req.headers['user-agent'] || user.userAgent,
    },
  });



  const token = sign({ id: user.id }, JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('accessToken', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    signed: true, // 'signed' option needs secret key which is given in 'cookieParser' middleware
  });
  res.status(200).send({
    auth: true,
    token: token,
    message: 'User found & Logged in',
  });
};

export const authenticateJWT = async (
  req: RequestWithUser, //express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<undefined> => {
  const validated = await verifyAccessToken(req);

  if (!validated?.id) {
    next(); // accessToken is incorrect! currently, just let him pass though.
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      id: validated.id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      ip: true,
      userAgent: true,
      verified: true,
      lastSignedIn: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
  });

  if (user) {
    req.user = user;
  }
  next();
};
