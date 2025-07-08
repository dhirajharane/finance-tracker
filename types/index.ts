export interface ITransaction {
  amount: number;
  description?: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
}

export interface IBudget {
  category: string;
  month: string;
  budgetAmount: number;
}
