import { successResponse, errorResponse } from "@/utils/apiResponse";
import { createBudget, getBudgetsForMonth } from "@/services/budgetService";

export const handleCreateBudget = async (req: Request) => {
  try {
    const body = await req.json();
    const budget = await createBudget(body);
    return successResponse(budget, "Budget set", 201);
  } catch (error) {
    return errorResponse(error);
  }
};

export const handleGetBudgets = async (month: string) => {
  try {
    const budgets = await getBudgetsForMonth(month);
    return successResponse(budgets);
  } catch (error) {
    return errorResponse(error);
  }
};