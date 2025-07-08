"use client";

import { DashboardRefreshProvider } from "./DashboardRefreshContext";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import SummaryCards from "@/components/SummaryCards";
import CategoryPieChart from "@/components/CategoryPieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import BudgetChart from "@/components/BudgetChart";

export default function DashboardPage() {
  return (
    <DashboardRefreshProvider>
      <main className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Your Finance Dashboard</h1>
            <p className="text-gray-600">Track, analyze, and manage your spending</p>
          </header>

          {/* Summary Cards */}
          <SummaryCards />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart + Bar Chart */}
            <div className="space-y-6">
              <CategoryPieChart />
              <MonthlyBarChart />
            </div>

            {/* Form + Transaction List */}
            <div className="space-y-6">
              <TransactionForm />
              <TransactionList />
            </div>
          </div>

          {/* Budget Comparison */}
          <div>
            <BudgetChart />
          </div>
        </div>
      </main>
    </DashboardRefreshProvider>
  );
}