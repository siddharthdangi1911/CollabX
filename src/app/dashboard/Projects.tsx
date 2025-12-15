import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" },
];

export default function ProjectsScreen() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => Math.max(i - 1, 0));
    const next = () => setIndex((i) => Math.min(i + 1, cards.length - 1));

    return (
        <div className="flex items-center w-full max-w-4xl mx-auto mt-10 gap-3">
            <button
                onClick={prev}
                disabled={index === 0}
                className="shrink-0 bg-[#212121] shadow-lg rounded-full p-2 disabled:opacity-40"
            >
                <ChevronLeft />
            </button>

            <div className="flex-1 overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="min-w-full flex justify-center items-center"
                        >
                            <div className="h-36 w-60 bg-gray-200 rounded-lg flex items-center justify-center text-3xl font-semibold">
                                {card.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={next}
                disabled={index === cards.length - 1}
                className="shrink-0 bg-[#212121] shadow-lg rounded-full p-2 disabled:opacity-40"
            >
                <ChevronRight />
            </button>
        </div>
    );
}
