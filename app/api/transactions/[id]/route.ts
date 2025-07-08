import { handleDeleteTransaction } from "@/controllers/transactionController";
import { connectDB } from "@/lib/db";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    return await handleDeleteTransaction(params.id);
  } catch (error) {
    console.error("DELETE /api/transactions/[id] error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}