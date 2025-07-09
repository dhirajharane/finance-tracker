import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { handleDeleteTransaction } from "@/controllers/transactionController";
import { Response } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await connectDB();
    return await handleDeleteTransaction(params.id);
  } catch (error) {
    console.error("DELETE /api/transactions/[id] error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}