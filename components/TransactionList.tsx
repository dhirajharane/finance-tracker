"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDashboardRefresh } from "@/app/dashboard/DashboardRefreshContext";

type Transaction = {
  _id: string;
  amount: number;
  description: string;
  date: string;
  type: string;
  category: string;
};

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const refreshContext = useDashboardRefresh();
  const refreshKey = refreshContext?.refreshKey;
  const triggerRefresh = refreshContext?.triggerRefresh;

  const fetchData = async () => {
    const res = await fetch("/api/transactions");
    const data = await res.json();
    setTransactions(Array.isArray(data.data) ? data.data : []);
  };

  const deleteTxn = async (id: string) => {
    await fetch(`/api/transactions/${id}`, { method: "DELETE" });
    triggerRefresh?.();
  };

  useEffect(() => {
    fetchData();
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-3 max-h-[300px] overflow-auto">
        {transactions.map((txn) => (
          <li key={txn._id} className="flex justify-between items-center border rounded p-3 text-sm">
            <div>
              <p className="font-medium">{txn.description || "(No Description)"}</p>
              <p className="text-xs text-muted-foreground">
                {txn.date.slice(0, 10)} • {txn.category}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`font-bold ${
                  txn.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                ₹{txn.amount}
              </span>
              <Button variant="ghost" size="icon" onClick={() => deleteTxn(txn._id)}>
                <Trash2 className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
