import bcrypt from 'bcrypt';
import * as express from 'express';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUND = 10;

export const encryptCredential = async (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const SALT = bcrypt.genSaltSync(SALT_ROUND);

    bcrypt.hash(password, SALT, (err, hash) => {
      if (err) {
        return reject(err);
      }
      resolve(hash);
    });
  });

export const validateCredential = async (
  value: string,
  hashedValue: string,
): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    bcrypt.compare(value, hashedValue, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });

export const verifyAccessToken = async (req: express.Request): Promise<any> => {
  let accessToken: string;

  if (req.headers.authorization) {
    accessToken = req.headers.authorization.replace('Bearer ', '');
  } else if (req.signedCookies.accessToken) {
    accessToken = req.signedCookies.accessToken;
  }

  if (accessToken) {
    const validated = verify(accessToken, JWT_SECRET);
    return validated;
  }
  return;
};
