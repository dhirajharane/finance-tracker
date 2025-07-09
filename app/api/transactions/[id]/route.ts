import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { handleDeleteTransaction } from "@/controllers/transactionController";


type RouteContext = {
  params: {
    id: string;
  };
};

export async function DELETE(
  _req: NextRequest,
  context: RouteContext
): Promise<NextResponse> {
  try {
    await connectDB();

    const id = context.params.id;
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing transaction ID" }, { status: 400 });
    }

    return await handleDeleteTransaction(id);
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
