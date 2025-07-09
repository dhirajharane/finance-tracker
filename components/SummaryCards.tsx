"use client";

import { useEffect, useState } from "react";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

type Transaction = {
  _id: string;
  amount: number;
  date: string;
  description: string;
  type: "income" | "expense";
  category: string;
};

type InsightsData = {
  totalSpent: number;
  recent: Transaction[];
  categoryTotals: Record<string, number>;
};

export default function SummaryCards() {
  const [data, setData] = useState<InsightsData | null>(null);

  const refreshContext = useDashboardRefresh();
  const refreshKey = refreshContext?.refreshKey;

  useEffect(() => {
    const fetchData = async () => {
      const month = new Date().toISOString().slice(0, 7);
      const res = await fetch(`/api/insights?month=${month}`);
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, [refreshKey]);

  if (!data) return null;

  const topCategory = Object.entries(data.categoryTotals || {}).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Spent" value={`₹${data.totalSpent}`} />
      <Card title="Top Category" value={topCategory ? topCategory[0] : "-"} />
      <Card title="Recent Transactions" value={data.recent?.length || 0} />
    </div>
  );
}

function Card({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
}
