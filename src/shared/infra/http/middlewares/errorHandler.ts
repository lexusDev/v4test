import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, request: Request, response: Response, next: NextFunction): Response|any => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
            status: 'error'
        });
    }

    return response.status(500).json({
        message: `Internal server error - ${err.message}`,
        status: 'error'
    });
}