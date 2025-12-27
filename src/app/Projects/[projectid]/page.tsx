type Props = {
    params: Promise<{ projectid: string }>;
};

export default async function ProjectAbout({ params }: Props) {
    const { projectid } = await params;

    return (
        <div>
            <h1>Project Dashboard</h1>
            <p>Project ID: {projectid}</p>
        </div>
    );
}