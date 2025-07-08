"use client";

import BudgetForm from "@/components/BudgetForm";
import BudgetList from "@/components/BudgetList";
import { DashboardRefreshProvider } from "../dashboard/DashboardRefreshContext";

export default function ManageBudgetPage() {
  return (
    <DashboardRefreshProvider>
      <main className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Manage Your Budgets</h1>
            <p className="text-gray-600">Set monthly category budgets to track your expenses better</p>
          </header>

          <BudgetForm />
          <BudgetList />
        </div>
      </main>
    </DashboardRefreshProvider>
  );
}