import { handleDeleteTransaction } from "@/controllers/transactionController";
import { connectDB } from "@/lib/db";
import { errorResponse } from "@/utils/apiResponse";

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    return await handleDeleteTransaction(params.id);
  } catch (error) {
    console.error("DELETE /api/transactions/[id] error:", error);
    return errorResponse(error);
  }
}
