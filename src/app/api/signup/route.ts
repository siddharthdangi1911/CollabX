import { NextResponse } from "next/server";
import { authAdmin, db } from "../../../../lib/FirebaseAdmin";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await authAdmin.createUser({ email, password });

    await db.collection("users").doc(user.uid).set({
      email,
      createdAt: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
