import { useEffect, useState } from "react";

export default function ChatsScreen() {
    const fullText = "Coming Soon.....";
    const typingSpeed = 120;
    const restartDelay = 1500;

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (index < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);
        } else {
            timeout = setTimeout(() => {
                setDisplayText("");
                setIndex(0);
            }, restartDelay);
        }

        return () => clearTimeout(timeout);
    }, [index, fullText]);

    return (
        <div className="w-full h-full overflow-hidden flex items-center justify-center bg-gray-100 rounded-t-lg">
            <div className="flex items-center justify-center w-3/5 h-2/5 bg-[#353535] rounded-lg">
                <p className="text-6xl text-white font-semibold tracking-wide">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </p>
            </div>
        </div>
    );
}

