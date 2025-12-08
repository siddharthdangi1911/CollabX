import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/FirebaseAdmin";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userCred = await adminAuth.getUserByEmail(email);

    const responce =  NextResponse.json({ success: true});

    return responce
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
