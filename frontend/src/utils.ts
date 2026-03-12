import { AxiosError } from "axios";
import type { ApiError, ValidationError } from "./client";

type ErrorBodyWithDetail = {
  detail?: string | ValidationError[];
};

function hasDetailField(body: unknown): body is ErrorBodyWithDetail {
  return typeof body === "object" && body !== null && "detail" in body;
}

function extractErrorMessage(err: ApiError): string {
  if (err instanceof AxiosError) {
    return err.message;
  }

  if (!hasDetailField(err.body)) {
    return "Something went wrong.";
  }

  const errDetail = err.body.detail;
  if (Array.isArray(errDetail) && errDetail.length > 0) {
    return errDetail[0].msg;
  }
  if (typeof errDetail === "string" && errDetail.length > 0) {
    return errDetail;
  }
  return "Something went wrong.";
}

export const handleError = function (
  this: (msg: string) => void,
  err: ApiError,
) {
  const errorMessage = extractErrorMessage(err);
  this(errorMessage);
};

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};
