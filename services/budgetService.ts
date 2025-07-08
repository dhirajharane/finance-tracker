import Budget from "@/models/Budget";
import { IBudget } from "@/types";

export const createBudget = async (data: IBudget) => {
  return await Budget.findOneAndUpdate(
    { category: data.category, month: data.month },
    { $set: { budgetAmount: data.budgetAmount } },
    { upsert: true, new: true }
  );
};

export const getBudgetsForMonth = async (month: string) => {
  return await Budget.find({ month });
};
