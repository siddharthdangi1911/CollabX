type Props = {
    params: Promise<{ hostid: string }>;
};

export default async function HostDashboard({ params }: Props) {
    const { hostid } = await params;

    return (
        <div>
            <h1>Project Dashboard</h1>
            <p>Project ID: {hostid}</p>
        </div>
    );
}