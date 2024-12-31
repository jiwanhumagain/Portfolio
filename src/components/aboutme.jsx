import { useState, useEffect } from "react";

function Counter({ target }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const totalDuration = 2000;
        const totalSteps = target - 1;
        const intervalDuration = totalDuration / totalSteps;

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < target) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest">
            {count} +
        </h1>
    );
}

function CounterName({ text }) {
    return (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans">{text}</h1>
    );
}

export default function AboutMe() {
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full bg-white py-8 lg:py-12 px-4 lg:px-10 justify-center gap-x-10 md:gap-x-20 lg:gap-x-24 xl:gap-x-32">
            {/* Purple Experience Section */}
            <div className="w-full lg:w-[42%] xl:w-[45%] flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative bg-purple-700 w-full max-w-[500px] xl:max-w-[600px] rounded-3xl flex flex-row overflow-hidden py-8 sm:py-10 md:py-12">
                    {/* Vertical name */}
                    <div className="w-[80px] sm:w-[100px] lg:w-[150px] flex justify-center items-center">
                        <div className="-rotate-90 -translate-x-[30px] sm:-translate-x-[40px] lg:-translate-x-[60px] tracking-widest text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap">
                            JIWAN HUMAGAIN
                        </div>
                    </div>
                    
                    {/* Experience number */}
                    <div className="flex flex-col justify-between w-full relative">
                        <div className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] text-white whitespace-nowrap leading-none ml-[40px] sm:ml-[60px] md:ml-[80px] lg:ml-[100px]">5</div>
                        <div className="mt-4 ml-[40px] sm:ml-[60px] md:ml-[80px]">
                            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl -ml-5 font-semibold whitespace-nowrap">
                                Years of Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="w-full lg:w-[48%] xl:w-[45%]">
                <div className="flex flex-col gap-y-6">
                    {/* About Me header */}
                    <div className="relative">
                        <div className="text-black font-sans text-2xl md:text-3xl flex font-medium tracking-wide">
                            <span>-</span>
                            <span className="ml-2">About Me</span>
                        </div>
                        <div className="absolute top-0 left-0">
                            <span className="font-enfonix font-extrabold text-gray-600 text-4xl sm:text-6xl md:text-8xl opacity-5 tracking-widest scale-x-125">
                                ABOUT ME
                            </span>
                        </div>
                    </div>

                    {/* Name section */}
                    <div className="text-black font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex font-semibold">
                        <div className="flex flex-col">
                            <span className="tracking-widest flex flex-wrap">
                                Who is <div className="text-purple-700 pl-2">Jiwan</div>
                            </span>
                            <div className="text-purple-700">Humagain?</div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-2">
                        <p className="text-start break-words font-mono text-base sm:text-lg md:text-xl font-medium">
                            As a diligent and driven Computer Engineering student, I am deeply passionate about leveraging technology to
                            solve complex problems and drive innovation. With a relentless work ethic and a keen interest in
                            entrepreneurship, I am dedicated to developing cutting-edge solutions that address real-world challenges and
                            create value. I am excited to push the boundaries of what is possible, harnessing my skills to build and scale
                            innovative solutions that positively influence society and contribute to the entrepreneurial landscape.
                        </p>
                    </div>

                    {/* Stats section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-0 mt-6">
                        <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                            <Counter target={15} />
                            <CounterName text={'Project Completed'} />
                            <div className="flex items-center justify-start mt-4">
                                <div className="h-14 sm:h-16 md:h-20 w-full max-w-[384px] bg-black rounded-full flex items-center gap-3 md:gap-5 justify-start pl-2">
                                    <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex justify-center items-center rounded-full bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 h-full rounded-full bg-green-500 flex justify-center items-center">
                                        <span className="text-black font-semibold text-base sm:text-lg md:text-2xl">Download CV</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                            <Counter target={5} />
                            <CounterName text={'Industry Covered'} />
                            <h1 className="font-enfonix text-xl sm:text-2xl md:text-3xl lg:text-4xl italic mt-4">Jiwan Humagain</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}