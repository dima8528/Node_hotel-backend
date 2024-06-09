import express from 'express';
import { userController } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/authMiddleware';
import { catchError } from '../utils/catchErrors';

export const userRouter = express.Router();

userRouter.get('/', authMiddleware, catchError(userController.getAllActivated));
userRouter.post('/', authMiddleware, catchError(userController.getUserByEmail));
userRouter.delete('/:id', authMiddleware, catchError(userController.remove));
