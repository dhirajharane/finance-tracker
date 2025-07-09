"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1", "#FF6F91"];

type PieData = { name: string; value: number };

export default function CategoryPieChart() {
  const [data, setData] = useState<PieData[]>([]);

  const refreshContext = useDashboardRefresh();
  const refreshKey = refreshContext?.refreshKey;

  useEffect(() => {
    const month = new Date().toISOString().slice(0, 7);
    fetch(`/api/insights?month=${month}`)
      .then((res) => res.json())
      .then((json) => {
        const totals = json.data?.categoryTotals || {};
        const formatted: PieData[] = Object.entries(totals).map(([name, value]) => ({
          name,
          value: Number(value),
        }));
        setData(formatted);
      });
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie dataKey="value" data={data} label outerRadius={80}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
