import { User } from '@prisma/client';
import prisma from '../utils/db';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import { ApiError } from '../exception/ApiError';
import { emailService } from './email.service';

interface RegisterParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

function getAllActivated() {
  return prisma.user.findMany({
    where: {
      activationToken: null,
    },
    orderBy: { id: 'asc' },
  });
}

function normalize({ id, email }: User) {
  return { id, email };
}

function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

async function register({
  email,
  password,
  firstName,
  lastName,
}: RegisterParams) {
  const existingUser = await userService.findByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Validation error', {
      email: 'Email is already taken',
    });
  }

  const activationToken = uuidv4();
  const hash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hash,
      role: 'user',
      activationToken,
    },
  });

  await emailService.sendActivationEmail({ email, activationToken });
}

function remove(id: number) {
  return prisma.user.delete({ where: { id } });
}

// async function getOneUser(refreshToken: string) {
//   const userId = await prisma.token.findFirst({ where: { refreshToken }, select: { userId: true } });

//   console.log('userId', userId?.userId);

//   const user = await prisma.user.findUnique({ where: { id: userId?.userId },
//     select: { 
//       id: true,
//       firstName: true,
//       lastName: true,
//       email: true,
//       role: true,
//       balance: true
//     }
//   });

//   console.log('user', user);

//   return user;
// }

async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email }, select: { 
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    role: true,
    balance: true
  }});
}

export const userService = {
  getAllActivated,
  getUserByEmail,
  normalize,
  findByEmail,
  register,
  remove,
};
