import { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";
import ProjectCardSlot from "@/components/ProjectCardSlot";

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
    const [query, setQuery] = useState("");
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

    return (
        <div className="min-h-screen bg-[#181818] flex flex-col">
            <section className="flex rounded-tl-lg h-20 bg-white shadow-lg items-center justify-between gap-5 p-2">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold italic text-white cursor-default">

                    </h1>
                </div>
                <div
                    className="flex items-center h-[70%] rounded-full border border-[#212121] bg-white transition focus-within:border-black">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                        className="flex-1 px-4 py-2 bg-transparent outline-none text-black placeholder-gray-400 rounded-l-full " />

                    <button className="w-14 h-10 flex items-center justify-center rounded-r-full focus:bg-gray-50 cursor-pointer">
                        <Search className="w-5 h-5 text-gray-400 " />
                    </button>
                </div>
                <div className="w-23 h-10 rounded-full border-2 border-black p-2 hover:bg-[#e0e0e0] hover:border-0">
                    <div className="flex w-full h-full justify-start items-center cursor-default"
                        onClick={() => { }}>
                        <Plus className="w-7 h-7" color="black" />
                        <span className="cursor-default text-black">Create</span>
                    </div>
                </div>
            </section >
            <hr className="block w-[85%] mx-auto border-[#2a2a2a]" />
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
        </div >
    );
}
