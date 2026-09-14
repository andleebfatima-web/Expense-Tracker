# Expense Tracker

A full-stack, responsive web application designed to help users log daily transactions, categorize expenses, set monthly budgets, and visualize spending habits over time.

> **Status:** 🚧 In active development

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite, Tailwind CSS (or your CSS lib)
* **Backend:** Node.js, Express, TypeScript
* **Database:** MongoDB / Mongoose
* **Authentication:** JSON Web Tokens (JWT)

---

## ✨ Key Features

* **Transaction Logging:** Add, edit, and delete daily income and expenses.
* **Category Management:** Tag transactions (e.g., Food, Utilities, Entertainment).
* **Budget Tracking:** Set monthly limits and track visual progress bars.
* **Analytics:** Visual charts showing spending breakdown and trends over time.

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js](https://nodejs.org/) (v18 or higher)
* **npm** or **yarn**
* [MongoDB](https://www.mongodb.com/) (Running locally on `port 27017` or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)

---

## 🚀 Setup & Run Instructions

### 1. Backend Setup (`/server`)

Navigate to the server directory:
```bash
cd server
Install dependencies:

Bash
npm install
Create a .env file in the server/ directory and add your variables:

Code snippet
PORT=5000
MONGO_URI=mongodb://localhost:27017/expense_tracker
JWT_SECRET=your_secret_jwt_key_here
Start the backend server in development mode:

Bash
npm run dev
The API server will run at http://localhost:5000.

2. Frontend Setup (/client)
Open a new terminal tab/window and navigate to the client directory:

Bash
cd client
Install dependencies:

Bash
npm install
Create a .env file in the client/ directory:

Code snippet
VITE_API_BASE_URL=http://localhost:5000/api
Start the frontend development server:

Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.