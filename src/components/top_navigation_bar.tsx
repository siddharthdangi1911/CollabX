"use client";

import { Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import Image from "next/image";

export default function TopNavigationBar() {
    const [query, setQuery] = useState("");
    const { active, setActive } = useNavigation();

    return (
        <nav className="h-14 flex items-center justify-between px-4 bg-[#181818]">
            <div className="flex items-center">
                <Image
                    src="/CollabXlogo.svg"
                    alt="logo"
                    width={40}
                    height={40} />
                <h1 className="text-xl font-semibold italic text-white">
                    CollabX
                </h1>
            </div>
            <div
                className="flex items-center w-[600px] rounded-full border border-[#212121] bg-[#212121] transition focus-within:border-[#4558b7]">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="flex-1 px-4 py-2 bg-transparent outline-none text-white placeholder-gray-400 rounded-l-full" />

                <button className="w-14 h-10 flex items-center justify-center hover:bg-[#303030] rounded-r-full">
                    <Search className="w-5 h-5 text-gray-400" />
                </button>
            </div>
            <div className="flex w-12 h-12 rounded-full hover:bg-[#353535] items-center justify-center">
                <div
                    onClick={() => {
                        if (active === "Profile") return;
                        setActive("Profile");
                    }}
                    className="flex w-10 h-10 border-2 rounded-full" >
                    <UserRound className="w-full h-max" />
                </div>
            </div>
        </nav>
    );
}
