import { handleGetTransactions, handleCreateTransaction } from "@/controllers/transactionController";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    return await handleGetTransactions();
  } catch (error) {
    console.error("GET /api/transactions error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    return await handleCreateTransaction(req);
  } catch (error) {
    console.error("POST /api/transactions error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}