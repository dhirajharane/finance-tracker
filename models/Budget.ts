import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  month: { type: String, required: true }, // Format: "2025-07"
  budgetAmount: { type: Number, required: true },
}, {
  timestamps: true
});

export default mongoose.models.Budget ||
  mongoose.model("Budget", BudgetSchema);
