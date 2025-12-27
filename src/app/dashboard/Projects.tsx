import AnimatedSection from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectCardSlot from "@/components/ProjectCardSlot";

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

type Project = {
    _id: string,
    title: string,
    description: string
};

async function getids(page: number) {
    const ids: string[] = [];
    for (let i = 0; i < 20; i++) {
        ids.push(`id${i}`);
    }
    // const res = await fetch(`/api/projects/ids?page=${page}`);
    // const data = await res.json();
    // if (data.success) {
    //     return data.ids;
    // }
    // return data.error;
    return ids;
}

export default function ProjectsScreen() {
    const [index, setIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);
    const [projectIds, setProjectIds] = useState<string[]>([]);
    const [projects, setProjects] = useState<Record<string, Project>>({});
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        async function loadIds() {
            try {
                const ids = await getids(page);
                setProjectIds(prev => [...prev, ...ids]);
            } catch (err) {
                console.error(err);
            }
        }

        loadIds();
    }, [page]);

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
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
                    {/* {projectIds.map(id => (
                        <ProjectCardSlot
                            key={id}
                            id={id}
                            project={projects[id]}
                            onLoad={project =>
                                setProjects(prev => ({ ...prev, [id]: project }))
                            } />
                    ))} */}
                </div>
            </section>

        </div>
    );
}
