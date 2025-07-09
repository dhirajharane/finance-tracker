import { createTransaction, deleteTransaction, getAllTransactions } from "@/services/transactionService";
import { successResponse, errorResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

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

export const handleDeleteTransaction = async (id: string): Promise<NextResponse> => {
  try {
    await deleteTransaction(id);
    return NextResponse.json({ success: true, message: "Transaction deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to delete transaction" },
      { status: 500 }
    );
  }
};