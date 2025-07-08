"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

const categories = ["food", "travel", "utilities", "entertainment", "shopping", "education", "others"];

export default function BudgetForm() {
  const [form, setForm] = useState({
    category: "",
    budgetAmount: "",
    month: new Date().toISOString().slice(0, 7),
  });
  const  {triggerRefresh}  = useDashboardRefresh();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, budgetAmount: Number(form.budgetAmount) }),
    });
    setForm({ ...form, budgetAmount: "" });
    triggerRefresh();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label>Category</Label>
          <select value={form.category} onChange={handleCategoryChange} className="border rounded p-2">
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label>Budget Amount</Label>
          <Input type="number" name="budgetAmount" value={form.budgetAmount} onChange={handleChange} />
        </div>
        <Button onClick={handleSubmit} className="mt-2">Save Budget</Button>
      </div>
    </div>
  );
}