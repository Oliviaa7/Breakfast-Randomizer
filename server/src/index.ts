import express from 'express';
import { breakfastRouter } from './routes/breakfast';
import { PrismaClient } from '../generated/prisma';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

export const prisma = new PrismaClient();

app.use(express.json());

app.use('/api/breakfasts', breakfastRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});