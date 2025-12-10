export default function SideNavBar() {
    return (
        <div className="w-1/5 h-full relative rounded-br-2xl rounded-tr-2xl bg-[#181818] text-white p-4">
            <div className="w-full h-20 flex items-center gap-3 rounded-2xl bg-[#202020] p-3">
                <div className="w-12 h-12 aspect-square rounded-full bg-[#303030] animate-pulse"></div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-2.5 w-35 rounded bg-[#303030] animate-pulse"></div>
                    <div className="h-2.5 w-30 rounded bg-[#303030] animate-pulse"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#303030] animate-pulse flex hover:bg-[#404040] hover:animate-none">
                    <button></button>
                </div>
            </div>
            <hr className="my-6 border-[#a5a4a4]" />
            <p>Side bar</p>
        </div>
    );
}
