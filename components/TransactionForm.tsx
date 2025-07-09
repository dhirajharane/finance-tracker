"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

const categories = ["food", "travel", "utilities", "entertainment", "shopping", "education", "others"];

export default function TransactionForm() {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    date: "",
    type: "expense",
    category: "",
  });

  const refreshContext = useDashboardRefresh();
  const triggerRefresh = refreshContext?.triggerRefresh;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ amount: "", description: "", date: "", type: "expense", category: "" });
      triggerRefresh?.();
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label>Amount</Label>
          <Input type="number" name="amount" value={form.amount} onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label>Description</Label>
          <Input name="description" value={form.description} onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label>Date</Label>
          <Input type="date" name="date" value={form.date} onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label>Type</Label>
          <Select value={form.type} onValueChange={(val) => setForm({ ...form, type: val })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Category</Label>
          <Select value={form.category} onValueChange={(val) => setForm({ ...form, category: val })}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleSubmit} className="mt-2">
          Add Transaction
        </Button>
      </div>
    </div>
  );
}
