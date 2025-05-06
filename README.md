# Credit Card Debt Tracking Application

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript)
![Express](https://img.shields.io/badge/Express-4.x-000000.svg?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-4.x-2D3748.svg?logo=prisma)

A modern, responsive web application to track and manage credit card debts with advanced visualization and analytics.

[Features](#features) •
[Screenshots](#screenshots) •
[Tech Stack](#tech-stack) •
[Installation](#installation) •
[Usage](#usage) •
[API Documentation](#api-documentation) •
[Contributing](#contributing) •
[License](#license)

</div>

## 📋 Features

<details open>
<summary><strong>Core Features</strong></summary>

- **Multi-Card Management** - Track unlimited number of credit cards
- **Comprehensive Debt Tracking** - Monitor balance, due date, interest rate, and minimum payments
- **Dashboard & Analytics** - Visualize your debt journey with interactive charts
- **Transaction History** - Record and categorize all payments and purchases
- **Payment Alerts** - Get notified before due dates to avoid late fees
- **Debt Reduction Strategies** - Compare different payment approaches (snowball, avalanche)
- **Multi-Currency Support** - Handle cards in different currencies
- **Secure Authentication** - Protect your financial data
- **Responsive Design** - Access from any device (desktop, tablet, mobile)

</details>

## 📸 Screenshots

<div align="center">
    <p><i>Dashboard View</i></p>
    <img src="https://via.placeholder.com/800x450?text=Dashboard+Screenshot" alt="Dashboard Screenshot" width="800"/>
    
    <p><i>Card Management</i></p>
    <img src="https://via.placeholder.com/800x450?text=Card+Management+Screenshot" alt="Card Management Screenshot" width="800"/>
    
    <p><i>Transaction History</i></p>
    <img src="https://via.placeholder.com/800x450?text=Transaction+History+Screenshot" alt="Transaction History Screenshot" width="800"/>
</div>

## 🛠️ Tech Stack

<details>
<summary><strong>Frontend Architecture</strong></summary>

- **Framework**: React.js with TypeScript
- **State Management**: React Query for server state, Context API for app state
- **Styling**: Tailwind CSS with custom theming
- **Routing**: React Router v6 with protected routes
- **Data Visualization**: Chart.js with React wrappers
- **Form Handling**: React Hook Form with Yup validation
- **HTTP Client**: Axios with interceptors for authentication
- **Optimization**: Code splitting, lazy loading, memoization

</details>

<details>
<summary><strong>Backend Architecture</strong></summary>

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **API Design**: RESTful architecture with middleware pattern
- **Validation**: Schema validation for requests
- **Error Handling**: Centralized error management
- **Logging**: Structured logging with request tracing
- **Security**: Input sanitization, rate limiting

</details>

<details>
<summary><strong>DevOps & Tools</strong></summary>

- **Version Control**: Git with GitHub
- **Development**: Hot reloading, ESLint, Prettier
- **Testing**: Jest, React Testing Library, Supertest
- **Documentation**: OpenAPI/Swagger
- **Deployment**: Docker containers (optional)

</details>

## 🚀 Installation

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL (v13.x or higher)
- npm or yarn

### Automated Installation (Windows 11)

We provide a PowerShell script for easy setup on Windows systems:

```powershell
# Clone the repository
git clone https://github.com/yourusername/credit-card-tracker.git
cd credit-card-tracker

# Run the installation script
.\install.ps1
```

### Manual Installation

<details>
<summary><strong>Step-by-Step Guide</strong></summary>

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/credit-card-tracker.git
cd credit-card-tracker
```

2. **Set up the backend**

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit the .env file with your database details:
# DATABASE_URL="postgresql://username:password@localhost:5432/credit_card_db"
# PORT=3001
# NODE_ENV=development

# Set up the database
npx prisma migrate dev
```

3. **Set up the frontend**

```bash
cd ../frontend

# Install dependencies
npm install
```

4. **Start the application**

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

</details>

## 📘 Usage

### Quick Start Guide

1. **Register/Login**: Start by creating an account or logging in
2. **Add Your Cards**: Enter your credit card details (name, balance, interest rate, etc.)
3. **Track Transactions**: Record your payments and purchases
4. **Monitor Dashboard**: View your overall debt status and trends
5. **Set Reminders**: Configure alerts for upcoming due dates

### Advanced Features

<details>
<summary><strong>Debt Reduction Planning</strong></summary>

The application provides tools to help you plan your debt reduction strategy:

1. Navigate to the "Strategies" section
2. Choose between different approaches:
   - **Snowball Method**: Pay off smallest balances first
   - **Avalanche Method**: Pay off highest interest rates first
3. View projected payoff timeline and total interest saved

</details>

<details>
<summary><strong>Data Export</strong></summary>

Export your data for record-keeping or external analysis:

1. Go to "Account Settings" > "Data Export"
2. Choose your preferred format (CSV, PDF)
3. Select date range and data types to include
4. Download the generated file

</details>

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/users` | Create a new user account |
| GET    | `/api/users/:id` | Get user profile data |

### Card Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/cards` | Get all cards |
| GET    | `/api/cards/:id` | Get card details by ID |
| POST   | `/api/cards` | Create a new card |
| PUT    | `/api/cards/:id` | Update card details |
| DELETE | `/api/cards/:id` | Delete a card |

### Transaction Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/transactions` | Get all transactions |
| GET    | `/api/transactions/card/:cardId` | Get transactions for a specific card |
| POST   | `/api/transactions` | Create a new transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

## ✨ Improvements Implemented

1. **Enhanced Error Handling**
   - Centralized error handler middleware
   - Custom AppError class for consistent error responses
   - Detailed validation with informative feedback messages
   - Global error capture for unhandled exceptions

2. **Restructured API Architecture**
   - Modular route organization (users, cards, transactions)
   - Middleware-based request processing pipeline
   - Health check and monitoring endpoints
   - Request logging and performance tracking

3. **Authentication System**
   - Context-based auth state management
   - Local storage persistence with security measures
   - Protected routes with redirect handling
   - Session expiration management

4. **Advanced API Service Layer**
   - Centralized API client with request/response interceptors
   - Typed API functions with proper error handling
   - Request caching and deduplication
   - Offline support and request queueing

5. **Responsive UI Components**
   - Mobile-first design approach
   - Adaptive layouts for all screen sizes
   - Accessible interface (WCAG compliant)
   - Dark/light mode support

6. **Data Integrity & Performance**
   - Transaction-based balance updates
   - Optimistic UI updates
   - Database transaction support
   - Proper cascade operations and referential integrity

## 🔧 Troubleshooting

<details>
<summary><strong>Common Issues</strong></summary>

### Database Connection Errors

```
Error: Failed to set up the database. Please check your PostgreSQL connection.
```

**Solution**: 
1. Verify PostgreSQL is running: `pg_ctl status`
2. Check your .env file for correct credentials
3. Ensure the database exists: `createdb credit_card_db`
4. Check network access if using remote database

### Frontend Build Issues

**Solution**:
1. Clear node_modules and reinstall: 
   ```
   rm -rf node_modules
   npm install
   ```
2. Check for TypeScript errors: `npm run tsc`
3. Update dependencies: `npm update`

### Login Problems

**Solution**:
1. Clear browser cookies and local storage
2. Check backend logs for authentication errors
3. Verify database has users table properly migrated

</details>

## 🤝 Contributing

We welcome contributions to improve the Credit Card Debt Tracker! Here's how you can help:

<details>
<summary><strong>Contribution Guidelines</strong></summary>

### Development Process

1. Fork the repository
2. Create a feature branch:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Maintain 90%+ test coverage for new code
- Follow existing patterns and architectural decisions
- Document all public functions and components

### Feature Requests and Bug Reports

Please use the GitHub Issues section to report bugs or request features.

</details>

## 📊 Future Roadmap

- **Mobile App** - Native mobile applications for iOS and Android
- **Budgeting Tools** - Integration with income and expense tracking
- **AI Insights** - Machine learning for spending pattern analysis
- **Financial Goal Setting** - Define and track progress toward financial goals
- **Integration with Banking APIs** - Automatic transaction import

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - Frontend framework
- [Express](https://expressjs.com/) - Backend framework
- [Prisma](https://www.prisma.io/) - ORM
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Chart.js](https://www.chartjs.org/) - Data visualization

---

<div align="center">
  <p>Made with ❤️ by Your Name</p>
  <p>© 2023 Credit Card Debt Tracker</p>
</div> 