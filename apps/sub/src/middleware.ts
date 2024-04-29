import { NextResponse } from "next/server";

import * as Sentry from "@sentry/nextjs";

export default async function middleware() {
  const res = NextResponse.next();
  console.log("middleware work");
  Sentry.captureException(new Error("Cause Error in sub project middleware"));
  Sentry.captureMessage("Cause Error in sub project middleware", {
    level: "error",
  });

  return res;
}
