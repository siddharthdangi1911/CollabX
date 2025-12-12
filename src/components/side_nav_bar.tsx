"use client";
import { Home, PanelTopOpen, MessageCircle } from "lucide-react";
import Item from "./navigation_item";
type props = {
    open: boolean,
    onCloseAction: () => void
};

const navItems = [
    { label: "Home", icon: Home, onClick: () => { } },
    { label: "Chats", icon: MessageCircle, onClick: () => { } },
]
export default function SideNavBar({ open, onCloseAction }: props) {
    return (
        <>
            <div className={`fixed flex flex-col top-0 left-0 h-full ${open ? "w-1/6 p-2" : "w-0 p-0"} overflow-hidden transition-all duration-300 rounded-br-2xl rounded-tr-2xl bg-[#181818] text-white z-20`}>
                <div className="w-full h-20 flex items-center gap-3 rounded-2xl p-3">
                    <div className="w-12 h-12 rounded-full aspect-square bg-[#303030] animate-pulse"></div>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="h-2.5 w-35 rounded bg-[#303030] animate-pulse"></div>
                        <div className="h-2.5 w-30 rounded bg-[#303030] animate-pulse"></div>
                    </div>
                    <button
                        onClick={onCloseAction}
                        className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <PanelTopOpen
                            color="gray"
                            className="w-6 h-6 transition-transform duration-300 hover:scale-115 hover:rotate-90" />
                    </button>
                </div>

                <hr className="my-3 border-[#a5a4a4]" />

                <nav className="w-full justify-center items-center flex-col flex gap-2 p-1">
                    {navItems.map((item) => (
                        <Item key={item.label} {...item} />
                    ))}
                </nav>
            </div>

            <div
                onClick={onCloseAction}
                className={`fixed top-0 left-0 w-full h-full bg-black transition-all duration-300 ${open ? "opacity-30 z-10" : "opacity-0 pointer-events-none"}`}>
            </div>
        </>
    );
}


