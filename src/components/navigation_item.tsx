import { LucideIcon } from "lucide-react";

type props = {
    icon: LucideIcon,
    label: string,
    onClick: (page: string) => void,
};


export default function Item({ icon: Icon, label, onClick }: props) {
    return (
        <div className="w-full h-10 p-4 flex gap-2 rounded-2xl items-center hover:bg-[#212121] hover:cursor-pointer"
            onClick={() => onClick(label)}>
            <Icon className="w-7 h-7" />
            <span className="text-lg font-large cursor-pointer">{label}</span>
        </div>
    );
}