"use client";

import { PanelTopOpen } from "lucide-react";
import navItems from "@/app/dashboard/NavItems";
import { useState } from "react";
import clsx from "clsx";
import { useNavigation } from "@/context/NavigationContext";

export default function SideNavBar() {
    const [open, setOpen] = useState(false);
    const { setActive } = useNavigation();

    return (
        <>
            <div
                className={clsx(
                    "flex flex-col h-full bg-[#181818] text-white transition-all duration-300",
                    open ? "w-64 p-2" : "w-14 p-1"
                )}>
                <div className="w-full h-14 flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#212121]"
                    >
                        <PanelTopOpen className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
                <hr className="my-3 border-[#2a2a2a]" />
                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            onClick={() => setActive(item.label)}
                            className="flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-[#212121] cursor-pointer">
                            <item.icon className="w-6 h-6 shrink-0" />
                            <span
                                className={clsx(
                                    "whitespace-nowrap transition-opacity",
                                    open ? "opacity-100" : "opacity-0"
                                )}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </nav>
            </div>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 z-10"
                />
            )}
        </>
    );
}
