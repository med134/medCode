import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware excuter");
  const authToken = request.cookies.get("authToken")?.value;
  if (request.nextUrl.pathname === "/api/login") {
    return;
  }
  const logInUserNotAccessPaths =
    request.pathname === "/dashboard/login" ||
    request.pathname === "/dashboard/register";
  if (logInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/dashboard/login", request.url));
    }
  }
  console.log(authToken);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/about",
    "/project",
    "/blogs/:path*",
    "/templates/:path*",
    "/dashboard",
    "/login",
    "/register",
    "/books",
    "/api/:path*",
  ],
};
