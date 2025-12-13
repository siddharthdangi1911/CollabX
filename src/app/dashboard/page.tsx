"use client";
import SideNavBar from "@/components/side_nav_bar";
import { useState } from "react";
import TopNavigationBar from "@/components/top_navigation_bar";
import ChatsScreen from "./Chats";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="flex h-screen bg-[--background]">
            <SideNavBar open={open} onCloseAction={() => setOpen(false)} />
            <div className="flex-1 h-full relative bg-[--background] text-black">
                <TopNavigationBar Query={query} setOpen={setOpen} setQuery={setQuery} />
                <ChatsScreen />
            </div>
        </div>
    );
}
