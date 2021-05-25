import { PrismaClient } from '@prisma/client';
import * as express from 'express';
interface RequestWithUser extends express.Request {
  user?: any;
}

const prisma = new PrismaClient();

export const getUsers = async (
  req: express.Request,
  res: express.Response,
): Promise<undefined> => {
  const users = await prisma.user.findMany();

  res.status(200).send({
    users,
  });
  return;
};

export const getUser = async (
  req: RequestWithUser,
  res: express.Response,
): Promise<undefined> => {
  // const { userId } = req.params;  // deprecated by introducing jwt web token
  const userId = req.user?.id;
  if (!userId) {
    res.status(400).send({
      error: 'notLoggedIn',
      message: 'This user is not logged in!',
    });
    return;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  res.status(200).send({
    user,
  });
  return;
};

export const updateUser = async (
  req: RequestWithUser,
  res: express.Response,
): Promise<undefined> => {
  // const { userId } = req.params;  // deprecated by introducing jwt web token
  const userId = req.user?.id;
  if (!userId) {
    res.status(400).send({
      error: 'notLoggedIn',
      message: 'This user is not logged in!',
    });
    return;
  }

  const { email, name } = req.body.data;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      email,
      name,
    },
  });

  res.status(200).send({
    user,
  });
  return;
};

export const deleteUser = async (
  req: RequestWithUser,
  res: express.Response,
): Promise<undefined> => {
  // const { userId } = req.params;  // deprecated by introducing jwt web token
  const userId = req.user?.id;
  if (!userId) {
    res.status(400).send({
      error: 'notLoggedIn',
      message: 'This user is not logged in!',
    });
    return;
  }

  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  res.status(200).send({
    user,
  });
  return;
};
