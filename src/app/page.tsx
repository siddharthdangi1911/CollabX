"use client";

import { useState } from "react";
import SignUp from "@/app/auth/signup";
import LogIn from "@/app/auth/login";
import Hyperlinks from "./components/auth_hyperlinks";
import BounceButton from "./components/BounceButton";

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
      <div className="w-3/5 bg-black relative rounded-r-2xl">
        <nav className="absolute top-6 left-6">
          <span className="text-white text-3xl font-bold">CollabX</span>
        </nav>
      </div>
      {renderPage()}
    </div>
  );
}
