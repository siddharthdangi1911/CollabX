"use client";
import { useState } from "react";
import SignUp from "@/app/auth/signup";
import LogIn from "@/app/auth/login";
import Hyperlinks from "@/components/auth_hyperlinks";
import BounceButton from "@/components/BounceButton";
import Lottie from "lottie-react";
import animationData from "@/app/CollabXlogo.json"
import Image from "next/image";

export default function Welcome() {
  const [page, setPage] = useState<string>("");

  const renderPage = () => {
    if (page === "signup") return <SignUp setpage={setPage} />;
    if (page === "login") return <LogIn setpage={setPage} />;

    return (
      <div className="flex flex-col justify-center items-center bg-white p-10 w-2/5 h-full">
        <h1 className="text-4xl font-bold mb-6 text-black">Welcome</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Start your journey with us.
        </p>

        <BounceButton page="signup" buttonText="Get Started" onClick={setPage} />

        <Hyperlinks setpage={setPage} hyperText="Log In" />
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-3/5 bg-black relative rounded-r-2xl flex items-center justify-center">
        <nav className="absolute flex top-6 left-6 items-center">
          <Image
            src="/CollabXlogo.svg"
            alt="logo"
            width={50}
            height={50}
            style={{ background: "transparent" }}
            color="white" />
          <span className="text-white text-3xl font-bold">CollabX</span>
        </nav>
        <div className="flex flex-col items-center">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-[600px] h-[600px]" />
          <div className="mt-3 flex gap-2 text-white text-5xl font-sans">
            <span>Connect</span>
            <span>.</span>
            <span>Create</span>
            <span>.</span>
            <span>Conquer</span>
          </div>
        </div>
      </div>
      {renderPage()}
    </div>
  );
}
