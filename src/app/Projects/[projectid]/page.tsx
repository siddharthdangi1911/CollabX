export default function Project({ params }: { params: { projectid: string } }) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <p className="text-6xl font-semibold text-white">Project ${params.projectid}</p>
        </div>
    );
}