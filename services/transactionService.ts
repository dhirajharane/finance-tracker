import Transaction from "@/models/Transaction";
import { ITransaction } from "@/types";

export const createTransaction = async (data: ITransaction) => {
  return await Transaction.create(data);
};

export const getAllTransactions = async () => {
  return await Transaction.find().sort({ date: -1 });
};

export const deleteTransaction = async (id: string): Promise<boolean> => {
  const result = await Transaction.findByIdAndDelete(id);
  return !!result; // Returns true if deleted, false if not found
};
