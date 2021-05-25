import express from 'express';

import { login, signUp } from './apis/auth';
import { deleteUser, getUser, updateUser } from './apis/user';

const router = express.Router();

router.post('/user', signUp);
router.post('/login', login);
router.get('/logout', function (req, res) {
  res.clearCookie('accessToken');
  res.status(200).send({
    auth: false,
    message: 'user logged out',
  });
});
router.get('/user', getUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);
router.get('/hello', (req, res) =>
  res.status(200).send({
    message: 'hello world :)',
  }),
);

export default router;
