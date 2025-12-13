import { PanelTopClose, Search } from "lucide-react";

type props = {
    Query: string,
    setOpen: (click: boolean) => void,
    setQuery: (query: string) => void,
}

export default function TopNavigationBar({ Query, setOpen, setQuery }: props) {
    return (
        <nav className="w-full h-15 flex items-center  justify-between gap-3 px-4 bg-white shadow-2xl">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setOpen(true)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <PanelTopClose
                        className="w-6 h-6 text-black transition-transform duration-300 hover:scale-115 hover:rotate-90" />
                </button>
                <h1 className="text-xl font-semibold italic">CollabX</h1>
            </div>
            <div className="flex items-center w-[600px] h-[13px]">
                <input
                    type="text"
                    value={Query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="border-[#c0c3c7] flex-1 px-4 py-2 border rounded-l-full bg-[#f9f9f9] outline-none focus:border-[#4558b7]" />
                <button
                    className="w-16 h-10.25 flex items-center justify-center border border-gray-300 border-l-0 rounded-r-full bg-[#f1f1f1] hover:border-[#c0c3c7] hover:cursor-pointer transition"
                    onClick={() => console.log("Searching:", Query)}>
                    <Search className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </nav>
    );
}