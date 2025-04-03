export default function IntroNames({ name, description }) {
    return (
        <div className="h-screen md:h-1/2 w-full pt-28 flex items-center justify-center flex-col gap-y-8 pb-20">
            <div className=" text-6xl font-bold  tracking-widest font-enfonix">{name}</div>
            <div className="text-4xl flex gap-x-5 items-center">
                <div>Home</div>
                <div className="h-5 w-5 rounded-full bg-gray-800"></div>
                <div className="underline decoration-2 underline-offset-8 text-blue-500">{description}</div> 
            </div>
        </div>
    )
}
