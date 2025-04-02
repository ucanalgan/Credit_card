import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Kullanıcı oluşturma
app.post('/api/users', async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.create({
      data: { email, name }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Kullanıcı oluşturulamadı' });
  }
});

// Kredi kartı ekleme
app.post('/api/cards', async (req, res) => {
  try {
    const { name, balance, interestRate, dueDate, minimumPayment, userId } = req.body;
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
    res.status(400).json({ error: 'Kredi kartı eklenemedi' });
  }
});

// Kullanıcının kartlarını getirme
app.get('/api/users/:userId/cards', async (req, res) => {
  try {
    const cards = await prisma.creditCard.findMany({
      where: { userId: req.params.userId }
    });
    res.json(cards);
  } catch (error) {
    res.status(400).json({ error: 'Kartlar getirilemedi' });
  }
});

// İşlem ekleme
app.post('/api/transactions', async (req, res) => {
  try {
    const { amount, type, date, description, cardId } = req.body;
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        type,
        date,
        description,
        cardId
      }
    });
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'İşlem eklenemedi' });
  }
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
}); 