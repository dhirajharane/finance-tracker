import Transaction from "@/models/Transaction";
import { ITransaction } from "@/types";

export const createTransaction = async (data: ITransaction) => {
  return await Transaction.create(data);
};

export const getAllTransactions = async () => {
  return await Transaction.find().sort({ date: -1 });
};

export const deleteTransaction = async (id: string) => {
  return await Transaction.findByIdAndDelete(id);
};
