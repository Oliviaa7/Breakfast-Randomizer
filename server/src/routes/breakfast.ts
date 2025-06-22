import express from 'express';
import { prisma } from '../index';

export const breakfastRouter = express.Router();

breakfastRouter.get('/', async (req, res) => {
  try {
    const breakfasts = await prisma.breakfast.findMany({
      include: {
        meals: {
          include: {
            combos: true,
          }
        }
      }
    });
    res.json(breakfasts);
  } catch (err) {
    console.error("Error fetching breakfasts: ", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});