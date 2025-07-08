# 💸 Personal Finance Visualizer

**Personal Finance Visualizer** is a modern, full-stack web application that helps you seamlessly track your expenses, set category-wise budgets, and visualize your spending trends—all in one beautiful dashboard.

Built with [Next.js](https://nextjs.org/), [MongoDB Atlas](https://www.mongodb.com/atlas), and [TypeScript](https://www.typescriptlang.org/), this app is designed for speed, reliability, and a delightful user experience.

---

## ✨ Features

- **Dashboard Overview:**  
  Instantly see your total spending, top categories, and recent transactions.

- **Add & Manage Transactions:**  
  Quickly log income or expenses with category, date, and description.

- **Category-wise Budgets:**  
  Set monthly budgets for each category and track your progress visually.

- **Interactive Visualizations:**  
  Pie charts and bar charts for category breakdowns and budget vs. actuals.

- **Real-Time Updates:**  
  All widgets update instantly when you add, edit, or delete transactions or budgets.

- **Responsive Design:**  
  Works beautifully on desktop, tablet, and mobile.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### 2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=your-mongodb-atlas-uri
```

> **Note:** Never commit your `.env` file to version control.

### 4. **Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🏗️ Project Structure

```
app/                # Next.js app directory (pages, layouts, API routes)
components/         # Reusable UI and dashboard components
controllers/        # API controllers for business logic
models/             # Mongoose models for MongoDB collections
services/           # Service layer for database operations
types/              # TypeScript interfaces and types
lib/                # Utility functions and DB connection
utils/              # API response helpers
public/             # Static assets
```

---

## 🛡️ Production Deployment

### **Deploy on Vercel (Recommended)**

1. Push your code to GitHub.
2. Go to [vercel.com/import](https://vercel.com/import) and import your repo.
3. Set the `MONGODB_URI` environment variable in the Vercel dashboard.
4. Click **Deploy**.

### **Manual Deployment**

1. Build the app:
   ```bash
   npm run build
   ```
2. Start the server:
   ```bash
   npm start
   ```

---

## ⚙️ Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API routes, TypeScript
- **Database:** MongoDB Atlas, Mongoose
- **State Management:** React Context (for dashboard refresh)
- **Charts:** [Recharts](https://recharts.org/)

---

## 📝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Personal Finance Visualizer** — Track smarter. Spend