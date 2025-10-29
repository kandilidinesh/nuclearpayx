import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './routes/health.router';
import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);

app.use(errorHandler);

export default app;
