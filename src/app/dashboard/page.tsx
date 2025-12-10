import SideNavBar from "@/app/components/side_nav_bar";
import React from "react";

export default function dashboard(params: React.ReactNode) {
    return (<div className="flex h-screen bg-[--background]">
        <SideNavBar />
        <div className="w-4/5 h-full relative bg-[--background] text-black p-4">
            <p>Hello World</p>
        </div>
    </div>);
}