import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Routes that require authentication.
 * Any pathname starting with these prefixes will be protected.
 */
const protectedPrefixes = ["/step-one", "/step-two"];

const authRoutes = ["/auth/login", "/auth/signup"];
const publicRoutes = ["/"];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionToken = request.cookies.get("better-auth.session_token")?.value;
  const isAuthenticated = !!sessionToken;

  const isAuthRoute = authRoutes.some((r) => pathname.startsWith(r));
  const isPublicRoute = publicRoutes.some(
    (r) => pathname === r || pathname.startsWith(r),
  );
  const isProtected = protectedPrefixes.some((p) => pathname.startsWith(p));

  // ─── Public routes — always allow ────────────────────────────────────────
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // ─── Protected route + no session → redirect to login ────────────────────
  if (isProtected && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname); // so we can send them back after login
    return NextResponse.redirect(loginUrl);
  }

  // ─── Has session + on auth page → send to dashboard ──────────────────────
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
