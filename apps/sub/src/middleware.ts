import { NextResponse } from "next/server";

import * as Sentry from "@sentry/nextjs";

export default async function middleware() {
  const res = NextResponse.next();
  console.log("middleware work");
  Sentry.captureException(new Error("Access Token not found in production2"));
  Sentry.captureMessage("Access Token not found in production2", {
    level: "error",
  });

  return res;
}
