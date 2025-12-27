// "use client";
// import { motion } from "framer-motion";

// interface Props {
//     text: string;
//     onClick?: (text: string) => void; // Always one signature
// }

// export default function BounceButton({ text, onClick }: Props) {

//     const handleClick = () => {
//         onClick?.(text); // Always pass `text`
//     };

//     return (
//         <motion.button
//             onClick={handleClick}
//             whileHover={{ scale: 1.12 }}
//             whileTap={{ scale: 0.92 }}
//             className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-shadow hover:shadow-lg"
//         >
//             {text}
//         </motion.button>
//     );
// }

"use client";
import { motion } from "framer-motion";

interface Props {
    buttonText: string;
    page?: string;
    onClick?: (page: string) => void;
}

export default function BounceButton({ page, onClick, buttonText }: Props) {

    const handleClick = () => {
        onClick?.(page!);
    };

    return (
        <motion.button
            onClick={handleClick}
            type="submit"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-shadow hover:shadow-lg"
        >
            {buttonText}
        </motion.button>
    );
}

