import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase/FirebaseAdmin";

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const idToken = (await cookieStore).get("auth_token")?.value

    if (!idToken) {
      return NextResponse.json(
        { error: "No ID token found in cookies" },
        { status: 401 }
      );
    }

    const decoded = await adminAuth.verifyIdToken(idToken);

    return NextResponse.json({ success: true , token : decoded});
  } catch (err: any) {
    return NextResponse.json(
      { error: "Invalid or expired token", details: err.message },
      { status: 401 }
    );
  }
}
