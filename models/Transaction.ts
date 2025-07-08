import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);