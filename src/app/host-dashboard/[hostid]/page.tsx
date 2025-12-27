"use client";

import { useNavigation } from "@/context/NavigationContext";
import HomeScreen from "../Home";
import ProjectsScreen from "../Projects";

type Props = {
    params: { hostid: string }
};

export default function HostDashboard({ params }: Props) {
    const { active } = useNavigation();
    return (
        <>
            {active === "Home" && <HomeScreen />}
            {active === "Projects" && <ProjectsScreen />}
        </>
    );
}