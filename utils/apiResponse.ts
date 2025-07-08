export const successResponse = (data: any, message = "Success", status = 200) => {
  return new Response(JSON.stringify({ success: true, message, data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
};

export const errorResponse = (error: any, status = 500) => {
  return new Response(JSON.stringify({
    success: false,
    message: error?.message || "Server Error",
  }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
};
