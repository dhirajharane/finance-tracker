import { handleCreateBudget, handleGetBudgets } from "@/controllers/budgetController";

export async function POST(req: Request) {
  return await handleCreateBudget(req);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month") || "";
  return await handleGetBudgets(month);
}
