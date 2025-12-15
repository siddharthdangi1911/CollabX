"use client";
import ChatsScreen from "./Chats";
import HomeScreen from "./Home";
import ProjectsScreen from "./Projects";
import ProfileScreen from "./Profile";
import AboutScreen from "./AboutScreen";
import { useNavigation } from "@/context/NavigationContext";

export default function Dashboard() {
    const { active } = useNavigation();
    return (
        <>
            {active === "Home" && <HomeScreen />}
            {active === "Chats" && <ChatsScreen />}
            {active === "Projects" && <ProjectsScreen />}
            {active === "Profile" && <ProfileScreen />}
            {active === "AboutUs" && <AboutScreen />}
        </>
    );
}
