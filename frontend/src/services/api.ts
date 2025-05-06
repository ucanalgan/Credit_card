import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || 'Something went wrong';
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

// User API calls
export const userAPI = {
  createUser: async (userData: { name: string; email: string }) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  
  getUser: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
};

// Card API calls
export const cardAPI = {
  getCards: async () => {
    const response = await api.get('/cards');
    return response.data;
  },
  
  getUserCards: async (userId: string) => {
    const response = await api.get(`/users/${userId}/cards`);
    return response.data;
  },
  
  getCard: async (cardId: string) => {
    const response = await api.get(`/cards/${cardId}`);
    return response.data;
  },
  
  createCard: async (cardData: {
    name: string;
    balance: number;
    interestRate: number;
    dueDate: string;
    minimumPayment: number;
    userId: string;
  }) => {
    const response = await api.post('/cards', cardData);
    return response.data;
  },
  
  updateCard: async (cardId: string, cardData: {
    name?: string;
    balance?: number;
    interestRate?: number;
    dueDate?: string;
    minimumPayment?: number;
  }) => {
    const response = await api.put(`/cards/${cardId}`, cardData);
    return response.data;
  },
  
  deleteCard: async (cardId: string) => {
    const response = await api.delete(`/cards/${cardId}`);
    return response.data;
  },
};

// Transaction API calls
export const transactionAPI = {
  getCardTransactions: async (cardId: string) => {
    const response = await api.get(`/transactions/card/${cardId}`);
    return response.data;
  },
  
  createTransaction: async (transactionData: {
    amount: number;
    type: 'payment' | 'purchase';
    date: string;
    description?: string;
    cardId: string;
  }) => {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  },
  
  deleteTransaction: async (transactionId: string) => {
    const response = await api.delete(`/transactions/${transactionId}`);
    return response.data;
  },
};

export default api; 