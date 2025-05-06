import express from 'express';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();
const prisma = new PrismaClient();

// Create card
router.post('/', async (req, res, next) => {
  try {
    const { name, balance, interestRate, dueDate, minimumPayment, userId } = req.body;
    
    if (!name || balance === undefined || interestRate === undefined || !dueDate || !userId) {
      throw new AppError('Missing required fields for credit card', 400);
    }
    
    const card = await prisma.creditCard.create({
      data: {
        name,
        balance,
        interestRate,
        dueDate,
        minimumPayment,
        userId
      }
    });
    res.json(card);
  } catch (error) {
    next(error);
  }
});

// Get all cards
router.get('/', async (req, res, next) => {
  try {
    const cards = await prisma.creditCard.findMany();
    res.json(cards);
  } catch (error) {
    next(error);
  }
});

// Get card by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const card = await prisma.creditCard.findUnique({
      where: { id },
      include: { transactions: true }
    });
    
    if (!card) {
      throw new AppError('Card not found', 404);
    }
    
    res.json(card);
  } catch (error) {
    next(error);
  }
});

// Update card
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, balance, interestRate, dueDate, minimumPayment } = req.body;
    
    const updatedCard = await prisma.creditCard.update({
      where: { id },
      data: {
        name,
        balance,
        interestRate,
        dueDate,
        minimumPayment
      }
    });
    
    res.json(updatedCard);
  } catch (error) {
    next(error);
  }
});

// Delete card
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await prisma.transaction.deleteMany({
      where: { cardId: id }
    });
    
    await prisma.creditCard.delete({
      where: { id }
    });
    
    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router; 