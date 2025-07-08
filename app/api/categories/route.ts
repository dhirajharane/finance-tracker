import { successResponse } from "@/utils/apiResponse";

const predefinedCategories = [
  "food", "travel", "utilities", "health", "entertainment", "education", "shopping", "others"
];

export async function GET() {
  return successResponse(predefinedCategories);
}
