
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MonthlyBarChart() {
  const data = [
    { month: "Apr", expenses: 2200 },
    { month: "May", expenses: 3100 },
    { month: "Jun", expenses: 2800 },
    
  ]; 

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="expenses" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
