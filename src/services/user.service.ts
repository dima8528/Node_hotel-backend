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

const doDeposit = async (email: string, amount: number) => {
   await prisma.user.update({ where: { email }, data: { balance: { increment: amount } } });

   const newBalance = await prisma.user.findUnique({ where: { email }, select: { balance: true } });

   return newBalance;
};

async function addBooked(id: number, rooms: any) {
  await prisma.user.update({
    where: { id },
    data: {
      bookings: {
        connect: rooms.map((room: any) => ({ id: room.id }))
      }
    }
  });

  await prisma.room.updateMany({
    where: { id: { in: rooms.map((room: any) => room.id) } },
    data: { available: false }
  });

  const newRooms = await prisma.user.findUnique({ where: { id }, select: { bookings: true } });

  return newRooms;
}

async function getBooked(id: number) {
  const bookedRooms = await prisma.user.findUnique({ where: { id }, select: { bookings: true } });

  return bookedRooms;
}

export const userService = {
  getAllActivated,
  getUserByEmail,
  getBooked,
  addBooked,
  normalize,
  findByEmail,
  register,
  doDeposit,
  remove,
};
