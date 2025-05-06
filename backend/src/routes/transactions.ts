import express from 'express';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();
const prisma = new PrismaClient();

// Create transaction
router.post('/', async (req, res, next) => {
  try {
    const { amount, type, date, description, cardId } = req.body;
    
    if (!amount || !type || !date || !cardId) {
      throw new AppError('Missing required fields for transaction', 400);
    }
    
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        type,
        date,
        description,
        cardId
      }
    });
    
    // Update card balance based on transaction type
    const card = await prisma.creditCard.findUnique({
      where: { id: cardId }
    });
    
    if (!card) {
      throw new AppError('Card not found', 404);
    }
    
    let newBalance = card.balance;
    if (type === 'payment') {
      newBalance -= amount;
    } else if (type === 'purchase') {
      newBalance += amount;
    }
    
    await prisma.creditCard.update({
      where: { id: cardId },
      data: { balance: newBalance }
    });
    
    res.json(transaction);
  } catch (error) {
    next(error);
  }
});

// Get all transactions
router.get('/', async (req, res, next) => {
  try {
    const transactions = await prisma.transaction.findMany();
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});

// Get transactions by card ID
router.get('/card/:cardId', async (req, res, next) => {
  try {
    const { cardId } = req.params;
    
    const transactions = await prisma.transaction.findMany({
      where: { cardId },
      orderBy: { date: 'desc' }
    });
    
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});

// Get transaction by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const transaction = await prisma.transaction.findUnique({
      where: { id }
    });
    
    if (!transaction) {
      throw new AppError('Transaction not found', 404);
    }
    
    res.json(transaction);
  } catch (error) {
    next(error);
  }
});

// Delete transaction
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Get transaction details to adjust card balance
    const transaction = await prisma.transaction.findUnique({
      where: { id },
      include: { card: true }
    });
    
    if (!transaction) {
      throw new AppError('Transaction not found', 404);
    }
    
    // Adjust card balance back
    let newBalance = transaction.card.balance;
    if (transaction.type === 'payment') {
      newBalance += transaction.amount; // Add back the payment
    } else if (transaction.type === 'purchase') {
      newBalance -= transaction.amount; // Subtract back the purchase
    }
    
    await prisma.creditCard.update({
      where: { id: transaction.cardId },
      data: { balance: newBalance }
    });
    
    // Delete the transaction
    await prisma.transaction.delete({
      where: { id }
    });
    
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router; 