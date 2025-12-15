"use client";

import { Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";

export default function TopNavigationBar() {
    const [query, setQuery] = useState("");
    const { setActive } = useNavigation();

    return (
        <nav className="h-14 flex items-center justify-between px-4 bg-[#181818]">

            <h1 className="text-xl font-semibold italic text-white">
                CollabX
            </h1>

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

            <div className="w-10 h-10 bg-gray-300 rounded-full" >
                <UserRound />
            </div>
        </nav>
    );
}
