"use client";

import { UserRound, Contact } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function TopNavigationBar() {
    const router = useRouter();
    const { active, setActive } = useNavigation();

    const redirectToUser = async () => {
        try {
            router.push(`/user-dashboard`);

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
            <div className="flex items-center gap-3">
                <div className="w-23 h-10 rounded-full border-2 border-black p-2 hover:bg-[#212121] hover:border-0">
                    <div className="flex w-full h-full justify-start items-center cursor-default gap-1.5"
                        onClick={redirectToUser}>
                        <Contact className="w-6 h-6" />
                        <span className="cursor-default">User</span>
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
