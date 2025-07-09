"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

type BudgetVsActual = {
  category: string;
  budgetAmount: number;
  spent: number;
};

export default function BudgetChart() {
  const [data, setData] = useState<BudgetVsActual[]>([]);
  const refreshContext = useDashboardRefresh();
  const refreshKey = refreshContext?.refreshKey;

  useEffect(() => {
    const month = new Date().toISOString().slice(0, 7);
    fetch(`/api/insights?month=${month}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data?.budgetVsActual || []);
      });
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budgetAmount" fill="#8884d8" name="Budget" />
          <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
