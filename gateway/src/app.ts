import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './routes/health.router';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);

export default app;
