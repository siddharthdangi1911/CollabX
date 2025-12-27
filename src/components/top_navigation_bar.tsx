"use client";

import { Search, UserRound, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function TopNavigationBar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const { active, setActive } = useNavigation();

    const redirectToHost = async () => {
        try {
            const res = await fetch("/api/me", {
                method: "GET",
                credentials: "include",
            });

            const response = await res.json();
            if (!res.ok) {
                alert(response.error || "Authentication failed");
                return;
            }
            const user = response.data;
            if (!user.host) {
                alert(`${user.name} is not eligible`);
                return;
            }
            router.push(`/Host/${user._id}`);

        } catch (err: any) {
            alert(err || "Something went wrong. Please try again.");
        }
    };

    return (
        <nav className="h-14 flex items-center justify-between px-4 bg-[#181818]">
            <div className="flex items-center">
                <Image
                    src="/CollabXlogo.svg"
                    alt="logo"
                    width={40}
                    height={40} />
                <h1 className="text-xl font-semibold italic text-white cursor-default">
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
            <div className="flex items-center gap-3">
                <div className="w-23 h-10 rounded-full border-2 border-black p-2 hover:bg-[#212121] hover:border-0">
                    <div className="flex w-full h-full justify-start items-center cursor-default"
                        onClick={redirectToHost}>
                        <Plus className="w-7 h-7" />
                        <span className="cursor-default">Host</span>
                    </div>
                </div>
                <div className="flex w-12 h-12 rounded-full hover:bg-[#353535] items-center justify-center cursor-pointer">
                    <div
                        onClick={() => {
                            if (active === "Profile") return;
                            setActive("Profile");
                        }}
                        className="flex w-10 h-10 border-2 rounded-full" >
                        <UserRound className="w-full h-max" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
