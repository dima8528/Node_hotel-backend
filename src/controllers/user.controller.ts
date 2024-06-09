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

// export const getOneUser = async (req: Request, res: Response) => {
//   const refreshToken = req.cookies.refreshToken;
  
//   if (!refreshToken) {
//     return res.status(401).json({ message: 'Refresh token not found' });
//   }

//   try {
//     const user = await userService.getOneUser(refreshToken);
//     res.send(user);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// }

const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await userService.getUserByEmail(email);
  res.send(user);
}

const doDeposit = async (req: Request, res: Response) => {
  const { email, amount } = req.body;
  const newBalance = await userService.doDeposit(email, amount);
  res.send(newBalance);
}

export const userController = {
  getAllActivated,
  getUserByEmail,
  remove,
  doDeposit
};