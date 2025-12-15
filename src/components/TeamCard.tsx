import Image from "next/image";

export default function TeamCard({
    name,
    role,
    image,
}: {
    name: string;
    role: string;
    image: string;
}) {
    return (
        <div className="bg-white w-60 h-60 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
                src={image}
                alt={name}
                width={96}
                height={96}
                className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg cursor-default">{name}</h3>
            <p className="text-gray-500 text-sm cursor-default">{role}</p>
        </div>
    );
}
