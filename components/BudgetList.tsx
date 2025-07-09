"use client";

import { useEffect, useState } from "react";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

type BudgetItem = {
  _id: string;
  category: string;
  budgetAmount: number;
};

export default function BudgetList() {
  const [budgets, setBudgets] = useState<BudgetItem[]>([]);

  const refreshContext = useDashboardRefresh();
  const refreshKey = refreshContext?.refreshKey;

  const fetchBudgets = async () => {
    const month = new Date().toISOString().slice(0, 7);
    const res = await fetch(`/api/budgets?month=${month}`);
    const json = await res.json();
    setBudgets(json.data || []);
  };

  useEffect(() => {
    fetchBudgets();
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Monthly Budgets</h2>

      {budgets.length === 0 ? (
        <p className="text-gray-500">No budgets set for this month.</p>
      ) : (
        <ul className="space-y-3">
          {budgets.map((item) => (
            <li key={item._id} className="flex justify-between border rounded px-4 py-3 text-sm">
              <span className="capitalize">{item.category}</span>
              <span className="font-bold text-green-600">₹{item.budgetAmount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
