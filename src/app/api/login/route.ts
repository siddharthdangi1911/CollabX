import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/FirebaseAdmin";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  await adminAuth.verifyIdToken(idToken);
  const res = NextResponse.json({ success: true });

  res.cookies.set("auth_token", idToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, 
  });

  return res;
}
