"use client";
import { createContext, useState, useContext } from "react";

type NavContextType = {
    active: string,
    setActive: (screen: string) => void
}


const NavContext = createContext<NavContextType | null>(null);
export function NavigaitonProvider({ children }: { children: React.ReactNode }) {
    const [active, setActive] = useState("Home");

    return (
        <NavContext.Provider value={{ active, setActive }}>
            {children}
        </NavContext.Provider>
    );
}

export function useNavigation() {
    const ctx = useContext(NavContext);
    if (!ctx) throw new Error("useNavigation must be used inside NavigationProvider");
    return ctx;
}