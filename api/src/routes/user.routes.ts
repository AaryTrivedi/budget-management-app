import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter: Router = express.Router();

// GET Routes
userRouter.get('/:id', UserController.getUserById);

// POST Routes
userRouter.post('/register', UserController.registerUser);

// PUT Routes
userRouter.put('/:id', UserController.updateUser);

// DELETE Routes
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;