import SideNavBar from "@/components/side_nav_bar";
import TopNavigationBar from "@/components/top_navigation_bar";
import { NavigaitonProvider } from "@/context/NavigationContext";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NavigaitonProvider>
            <section className="flex h-screen w-full overflow-hidden">
                <SideNavBar />
                <div className="flex flex-col flex-1 text-white">
                    <TopNavigationBar />
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </section>
        </NavigaitonProvider>
    );
}