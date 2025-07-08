import { createTransaction, deleteTransaction, getAllTransactions } from "@/services/transactionService";
import { successResponse, errorResponse } from "@/utils/apiResponse";

export const handleGetTransactions = async () => {
  try {
    const txns = await getAllTransactions();
    return successResponse(txns);
  } catch (error) {
    return errorResponse(error);
  }
};

export const handleCreateTransaction = async (req: Request) => {
  try {
    const body = await req.json();
    const txn = await createTransaction(body);
    return successResponse(txn, "Transaction added", 201);
  } catch (error) {
    return errorResponse(error);
  }
};

export const handleDeleteTransaction = async (id: string) => {
  try {
    await deleteTransaction(id);
    return successResponse({}, "Transaction deleted");
  } catch (error) {
    return errorResponse(error);
  }
};