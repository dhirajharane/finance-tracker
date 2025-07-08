import Transaction from "@/models/Transaction";
import Budget from "@/models/Budget";

export const getDashboardInsights = async (month: string) => {
  const start = new Date(`${month}-01`);
  const end = new Date(start);
  end.setMonth(end.getMonth() + 1);

  const [transactions, budgets] = await Promise.all([
    Transaction.find({ date: { $gte: start, $lt: end }, type: 'expense' }),
    Budget.find({ month }),
  ]);

  const totalSpent = transactions.reduce((sum, txn) => sum + txn.amount, 0);

  const recent = transactions.slice(0, 5);

  const categoryTotals: Record<string, number> = {};
  for (const txn of transactions) {
    categoryTotals[txn.category] = (categoryTotals[txn.category] || 0) + txn.amount;
  }

  const budgetVsActual = budgets.map((b) => {
    return {
      category: b.category,
      budgetAmount: b.budgetAmount,
      spent: categoryTotals[b.category] || 0,
    };
  });

  return {
    totalSpent,
    recent,
    categoryTotals,
    budgetVsActual,
  };
};
