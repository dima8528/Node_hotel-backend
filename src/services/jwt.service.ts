
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { NormalizedUser } from '../types/NormalizedUser';
function generateAccessToken(user: NormalizedUser) {
  const secret = process.env.JWT_ACCESS_SECRET
  if (secret === undefined) {
    throw new Error();
  }
  return jwt.sign(user, secret, { expiresIn: '1h' });
}

function generateRefreshToken(user: NormalizedUser) {
  const secret = process.env.JWT_REFRESH_SECRET
  if (secret === undefined) {
    throw new Error();
  }
  return jwt.sign(user, secret, { expiresIn: '1h' });
}

function validateAccessToken(token: string) {
  const secret = process.env.JWT_ACCESS_SECRET
  if (secret === undefined) {
    throw new Error('There is no token to validate');
  }
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

function validateRefreshToken(token: string) {
  const secret = process.env.JWT_REFRESH_SECRET
  if (secret === undefined) {
    throw new Error('There is no token to validate');
  }

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

export const jwtService = { 
  generateAccessToken,
  generateRefreshToken,
  validateAccessToken,
  validateRefreshToken,
};