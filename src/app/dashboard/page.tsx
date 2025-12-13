"use client";
import ChatsScreen from "./Chats";
import HomeScreen from "./Home";
import { useNavigation } from "@/context/NavigationContext";

export default function Dashboard() {
    const { active } = useNavigation();
    return (
        <>
            {active === "Home" && <HomeScreen />}
            {active === "Chats" && <ChatsScreen />}
        </>
    );
}
