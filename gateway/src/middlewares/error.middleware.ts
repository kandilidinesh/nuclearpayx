import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export interface AppError extends Error {
    statusCode?: number;
    details?: unknown;
}

export function errorHandler(err: AppError, req: Request, res: Response, _next: NextFunction): void {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    logger.error(`[${req.method}] ${req.originalUrl} → ${status} :: ${message}`);

    if (process.env.NODE_ENV === 'development' && err.stack) {
        logger.debug(err.stack);
    }

    res.status(status).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
}
