import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/FirebaseClient";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    const token = await userCred.user.getIdToken();

    const responce =  NextResponse.json({ success: true});

    responce.cookies.set("token", token, {
        httpOnly:true,
        maxAge: 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
        path: "/"
    })

    return responce
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
