import AnimatedSection from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
];

const extendedCards = [
    cards[cards.length - 1],
    ...cards,
    cards[0],
];

async function getProjects() {
    const res = (await fetch("/api/projects"));
    const data = await res.json();
    if (data.success) {
        return data.projects;
    }
    return data.error;
}

export default function ProjectsScreen() {
    const [index, setIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);

    const next = () => {
        setIsAnimating(true);
        setIndex((i) => i + 1);
    };

    const prev = () => {
        setIsAnimating(true);
        setIndex((i) => i - 1);
    };

    useEffect(() => {
        if (index === extendedCards.length - 1) {
            setTimeout(() => {
                setIsAnimating(false);
                setIndex(1);
            }, 500);
        }

        if (index === 0) {
            setTimeout(() => {
                setIsAnimating(false);
                setIndex(cards.length);
            }, 500);
        }
    }, [index]);

    return (
        <div className="min-h-screen bg-[#181818] flex flex-col">
            <section className="relative bg-[#212121] h-[500px] rounded-t-lg">
                <div className="w-full h-full px-50 flex items-center justify-center">
                    <AnimatedSection>
                        <div className="relative w-full flex items-center gap-2">
                            <button
                                onClick={prev}
                                className="shrink-0 p-3 rounded-full bg-[#212121] z-10 hover:bg-[#353535]">
                                <ChevronLeft className="w-10 h-10 text-white" />
                            </button>
                            <div className="flex-1 relative overflow-x-hidden overflow-y-visible py-10 gap-6">
                                <div
                                    className={`flex ${isAnimating ? "transition-transform duration-500 ease-out" : ""}`}
                                    style={{ transform: `translateX(-${index * 100}%)` }}>
                                    {extendedCards.map((card, i) => (
                                        <div
                                            key={i}
                                            className="min-w-full flex justify-center">
                                            <div
                                                className="w-full max-w-4xl h-[400px] bg-[#303030] rounded-2xl flex items-center justify-center text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[#353535] will-change-transform">
                                                {card.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={next}
                                className="shrink-0 p-3 rounded-full bg-[#212121] z-10 hover:bg-[#353535]">
                                <ChevronRight className="w-10 h-10 text-white" />
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            <section className="flex bg-white flex-1">
                <div className="h-screen w-3/5 bg-black">
                    White section content
                </div>
                <div className="h-screen w-2/5 bg-gray-700">
                </div>
            </section>

        </div>
    );
}
