import express from 'express';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();
const prisma = new PrismaClient();

// Create user
router.post('/', async (req, res, next) => {
  try {
    const { email, name } = req.body;
    
    if (!email || !name) {
      throw new AppError('Email and name are required', 400);
    }
    
    const user = await prisma.user.create({
      data: { email, name }
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Get user by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const user = await prisma.user.findUnique({
      where: { id },
      include: { cards: true }
    });
    
    if (!user) {
      throw new AppError('User not found', 404);
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Get user's cards
router.get('/:userId/cards', async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    if (!userId) {
      throw new AppError('User ID is required', 400);
    }
    
    const cards = await prisma.creditCard.findMany({
      where: { userId }
    });
    res.json(cards);
  } catch (error) {
    next(error);
  }
});

export default router; 