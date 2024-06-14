import { Request, Response, NextFunction } from 'express';
import { jwtService } from '../services/jwt.service';
import { ApiError } from '../exception/ApiError';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    console.error('Authorization header is missing');
    throw ApiError.Unauthorized();
  }

  const [type, accessToken] = authHeader.split(' ');

  if (type !== 'Bearer' || !accessToken) {
    console.error('Access token is missing or type is not Bearer');
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken);

  if (!userData) {
    console.error('Invalid access token');
    throw ApiError.Unauthorized();
  }

  // console.log('User authorized:', userData);

  next();
}
