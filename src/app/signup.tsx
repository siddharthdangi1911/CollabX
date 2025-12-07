import Link from "next/link";
import Image from "next/image";
import Hyperlinks from "../../components/auth_hyperlinks";
import BounceButton from "../../components/BounceButton";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function SignUp({ setpage }: { setpage: (page: string) => void }) {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Please enter email and password")
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Signup Response:", data);
      if (data.success) setpage("login");
      else alert(data.error);
    } catch (e) {
      alert("Sign Up Failed")
    }

  };

  return (
    <div className="w-2/5 flex flex-col justify-center items-center bg-white p-10 relative">

      <button type="button" onClick={() => setpage("")}
        className="absolute left-5 top-5 p-2 rounded-full cursor-pointer transition-colors hover:bg-gray-200"
      >
        <Image
          src="/back_button.svg"
          alt="Go Back"
          width={24}
          height={24}
          style={{ background: "transparent" }}
        />
      </button>

      <h1 className="text-4xl font-bold mb-6 text-black">Sign Up</h1>

      <p className="text-lg mb-8 text-center text-gray-600">
        Start your journey with us.
      </p>
      <div className="w-3/5 flex flex-col gap-4 mb-6">
        <input
          type="email"
          placeholder="Email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="relative w-full">
          <input
            type={!showPass ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 rounded-full cursor-pointer text-gray-950"
          >
            {showPass ? <EyeClosed size={20} /> : <Eye size={20} />}
          </button>
        </div>

      </div>

      <button onClick={handleSignUp} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-shadow hover:shadow-lg">Sign Up</button>

      {/* <BounceButton text="Sign Up" onClick={handleSignUp} /> */}

      <Hyperlinks setpage={setpage} hyperText="Log In" />
    </div>
  );
}
