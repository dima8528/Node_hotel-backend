import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exception/ApiError';

export function errorMiddleware(error: ApiError, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
    return;
  }

  res.status(500).send({
    message: 'Unexpected error',
  });
}