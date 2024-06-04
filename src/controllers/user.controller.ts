import { Request, Response } from 'express';
import { userService } from '../services/user.service';

const getAllActivated = async (req: Request, res: Response) => {
  const users = await userService.getAllActivated();
  res.send(
    users.map(userService.normalize))
}

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await userService.remove(+id);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}

export const userController = {
  getAllActivated,
  remove
};