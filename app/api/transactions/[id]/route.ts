import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { handleDeleteTransaction } from "@/controllers/transactionController";
import { errorResponse } from "@/utils/apiResponse";


export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await connectDB();
    return await handleDeleteTransaction(params.id);
  } catch (error) {
    console.error("DELETE /api/transactions/[id] error:", error);
    return errorResponse(error);
  }
}
