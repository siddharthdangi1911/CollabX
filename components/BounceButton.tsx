"use client";
import { motion } from "framer-motion";

interface Props {
    text: string;
    onClick?: ((text: string) => void) | (() => void);
}

export default function BounceButton({ text, onClick }: Props) {
    const handleClick = () => {
        if (!onClick) return;

        if (onClick.length === 1) {
            (onClick as (text: string) => void)(text);
        } else {
            (onClick as () => void)();
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-shadow hover:shadow-lg"
        >
            {text}
        </motion.button>
    );
}
