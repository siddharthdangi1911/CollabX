"use client";

import { PanelTopOpen, BookOpen } from "lucide-react";
import navItems from "@/app/dashboard/NavItems";
import { useState } from "react";
import clsx from "clsx";
import { useNavigation } from "@/context/NavigationContext";

export default function SideNavBar() {
    const [open, setOpen] = useState(false);
    const { active, setActive } = useNavigation();

    return (
        <div className="relative h-full">
            <div
                className={`flex flex-col h-full text-white transition-all not-visited:duration-300 z-20 ${open ? "w-64 p-2 bg-[#111111]" : "w-14 p-1 bg-[#181818]"}`}>
                <div className="w-full h-14 flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#212121]">
                        <PanelTopOpen
                            className={`w-6 h-6 ${!open ? "-rotate-90" : "rotate-90"
                                } transition-all duration-300`}
                        />
                    </button>
                </div>

                <hr className="my-3 border-[#2a2a2a]" />

                <nav className="flex flex-col gap-1 flex-1">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            onClick={() => {
                                if (active === item.label) return;
                                setActive(item.label);
                            }}
                            className={`flex items-center gap-4 px-3 py-2 rounded-xl ${active === item.label ? "bg-[#505050]" : ""} hover:bg-[#212121] cursor-pointer`}>
                            <item.icon className="w-6 h-6 shrink-0" />
                            <span
                                className={clsx(
                                    "transition-opacity whitespace-nowrap",
                                    open ? "opacity-100" : "opacity-0"
                                )}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                    <div
                        onClick={() => {
                            if (active === "AboutUs") return;
                            setActive("AboutUs");
                        }}
                        className={`mt-auto flex items-center gap-4 px-3 py-2 rounded-xl ${active === "AboutUs" ? "bg-[#353535]" : ""} hover:bg-[#212121] cursor-pointer`}>
                        <BookOpen className="w-6 h-6 shrink-0" />
                        <span
                            className={`transition-opacity whitespace-nowrap ${open ? "opacity-100" : "opacity-0"}`}>
                            About Us
                        </span>
                    </div>
                </nav>
            </div >

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="absolute top-0 left-full h-full w-screen bg-black/30 z-10"
                />
            )
            }
        </div >
    );
}
