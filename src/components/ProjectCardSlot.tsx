import { useEffect } from "react";

type props = {
    id: string,
    project?: any,
    onLoad: (project: any) => void
};

export default function ProjectCardSlot({ id, project, onLoad }: props) {
    useEffect(() => {
        if (project) return;

        fetch(`/api/projects/${id}`)
            .then(res => res.json())
            .then(data => onLoad(data));
    }, [id]);

    if (!project) return <CardSkeleton />;
    return <ProjectCard project={project} />
}


function CardSkeleton() {
    return (
        <div className="animate-pulse bg-white rounded-xl p-4 space-y-3">
            <div className="h-40 bg-gray-300 rounded-lg" />
            <div className="h-4 w-3/4 bg-gray-300 rounded" />
            <div className="h-3 w-1/2 bg-gray-200 rounded" />
        </div>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="h-40 bg-gray-100 rounded-lg mb-3" />
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
        </div>
    );
}