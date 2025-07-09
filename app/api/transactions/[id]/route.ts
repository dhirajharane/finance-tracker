import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { handleDeleteTransaction } from "@/controllers/transactionController";

type Context = {
  params: {
    id: string;
  };
};

export async function DELETE(
  _req: NextRequest,
  { params }: Context
): Promise<NextResponse> {
  try {
    await connectDB();

    const deleted = await handleDeleteTransaction(params.id);
    return deleted;
  } catch (error) {
    console.error("DELETE /api/transactions/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
