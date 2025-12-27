type Props = {
    params: Promise<{ hostid: string }>;
};

export default async function HostDashboard({ params }: Props) {
    const { hostid } = await params;

    return (
        <div>
            <h1>Host Dashboard</h1>
            <p>Host ID: {hostid}</p>
        </div>
    );
}