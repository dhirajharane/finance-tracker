import { successResponse, errorResponse } from "@/utils/apiResponse";
import { getDashboardInsights } from "@/services/insightService";

export const handleGetInsights = async (month: string) => {
  try {
    const data = await getDashboardInsights(month);
    return successResponse(data);
  } catch (error) {
    return errorResponse(error);
  }
};