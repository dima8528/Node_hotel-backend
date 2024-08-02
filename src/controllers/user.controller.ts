import { Request, Response } from 'express';
import { userService } from '../services/user.service';

const getAllActivated = async (req: Request, res: Response) => {
  const users = await userService.getAllActivated();
  res.send(users.map(userService.normalize));
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await userService.remove(+id);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await userService.getUserByEmail(email);
  res.send(user);
};

const addBooked = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rooms } = req.body;
  const bookedRooms = await userService.addBooked(+id, rooms);

  res.send(bookedRooms);
};

const doDeposit = async (req: Request, res: Response) => {
  const { email, amount } = req.body;
  const newBalance = await userService.doDeposit(email, amount);
  res.send(newBalance);
};

const getBooked = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bookedRooms = await userService.getBooked(+id);

  res.send(bookedRooms);
};

export const userController = {
  getAllActivated,
  getUserByEmail,
  remove,
  addBooked,
  getBooked,
  doDeposit,
};
