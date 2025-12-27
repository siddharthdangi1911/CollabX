import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/FirebaseAdmin";

export async function proxy(req: any) {
  const token = req.cookies.get("auth_token")?.value;

  const isAuthPage = req.nextUrl.pathname === "/";

  if (!token) {
    if (isAuthPage) return NextResponse.next();
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    await adminAuth.verifyIdToken(token);

    if (isAuthPage) {
      return NextResponse.redirect(new URL("/user-dashboard", req.url));
    }

    return NextResponse.next(); 
  } catch {
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set("auth_token", "", { maxAge: 0 });
    return res;
  }
}

export const config = {
  matcher: [
    "/",
    "/user-dashboard/:path*",
  ],
};
