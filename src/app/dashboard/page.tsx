"use client";
import SideNavBar from "@/components/side_nav_bar";
import { PanelTopClose, Search } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="flex h-screen bg-[--background]">
            <SideNavBar open={open} onCloseAction={() => setOpen(false)} />
            <div className="flex-1 h-full relative bg-[--background] text-black">
                <nav className="w-full h-15 flex items-center  justify-between gap-3 px-4 bg-white shadow-sm">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setOpen(true)}
                            className="w-10 h-10 rounded-lg flex items-center justify-center">
                            <PanelTopClose
                                className="w-6 h-6 text-black transition-transform duration-300 hover:scale-115 hover:rotate-90" />
                        </button>
                        <h1 className="text-xl font-semibold italic">CollabX</h1>
                    </div>
                    <div className="flex items-center w-[600px] h-[13px]">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search"
                            className="border-[#c0c3c7] flex-1 px-4 py-2 border rounded-l-full bg-[#f9f9f9] outline-none focus:border-[#4558b7]" />
                        <button
                            className="w-16 h-10.25 flex items-center justify-center border border-gray-300 border-l-0 rounded-r-full bg-[#f1f1f1] hover:border-[#c0c3c7] hover:cursor-pointer transition"
                            onClick={() => console.log("Searching:", query)}>
                            <Search className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </nav>
                <div className="p-4">
                    <h2 className="text-lg">Welcome!</h2>
                </div>
            </div>
        </div>
    );
}
