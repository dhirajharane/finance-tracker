

export const successResponse = <T>(
  data: T,
  message = "Success",
  status = 200
): Response => {
  return new Response(
    JSON.stringify({ success: true, message, data }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const errorResponse = (
  error: unknown,
  status = 500
): Response => {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
      ? error
      : "Server Error";

  return new Response(
    JSON.stringify({ success: false, message }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
};
