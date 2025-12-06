type props = {
    setpage: (page: string) => void,
    preffixText?: string,
    hyperText: string
}

export default function Hyperlinks({ setpage, preffixText = "Already have an account?", hyperText = "Log In" }: props) {
    return (
        <p className="mt-4 text-gray-700 text-sm">
            {preffixText}
            <button
                onClick={() => setpage("login")}
                className="text-blue-500 font-medium ml-1 hover:underline hover:underline-offset-1"
            >
                {hyperText}
            </button>
        </p>
    );
}