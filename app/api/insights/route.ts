import { handleGetInsights } from "@/controllers/insightController";
import { connectDB } from "@/lib/db";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const month = searchParams.get("month") || "";
    return await handleGetInsights(month);
  } catch (error) {
    console.error("GET /api/insights error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}