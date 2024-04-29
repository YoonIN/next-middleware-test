import { NextResponse } from "next/server";

import * as Sentry from "@sentry/nextjs";

export default async function middleware() {
  const res = NextResponse.next();
  console.log("middleware work");
  Sentry.captureException(
    new Error("Access Token not found in main project middleware")
  );
  Sentry.captureMessage("Access Token not found in main project middleware", {
    level: "error",
  });

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)"],
};
