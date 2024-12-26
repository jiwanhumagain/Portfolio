import { useState, useEffect } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Reusable Counter Component
function Counter({ target }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const totalDuration = 2000; // Total time to reach target (in milliseconds)
        const totalSteps = target - 1; // Number of steps to count
        const intervalDuration = totalDuration / totalSteps; // Interval time based on target

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < target) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval); // Clear interval when count reaches target
                    return prevCount;
                }
            });
        }, intervalDuration); // Dynamic interval duration to match total duration

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [target]);

    return (
        <h1 className="text-6xl font-bold tracking-widest">
            {count} +
        </h1>
    );
}
function CounterName({ text }) {
    return (
        <h1 className="text-4xl font-sans">{text}</h1>

    )
}

export default function AboutMe() {
    return (
        <div className="flex flex-row h-full w-full bg-white pb-10">
     
            <div className="flex justify-around items-center h-screen w-1/2">
                <div className="ml-[100px] bg-purple-700 h-[720px] w-[650px] rounded-3xl flex flex-row">
           
                    <div className="h-full w-[200px] flex justify-center items-center">
                        <div className="-rotate-90 -translate-x-[80px] tracking-widest text-white text-7xl font-extrabold whitespace-nowrap">
                            JIWAN HUMAGAIN
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-[250px] text-white">
                        <div className="ml-[180px] -mt-[200px] text-[600px]  whitespace-nowrap">5</div>
                        <div className="-mt-[150px] text-[45px] font-semibold whitespace-nowrap ">Years of Experience</div>
                    </div>
                </div>
            </div>

            
            <div className="flex justify-around items-center h-screen w-1/2">
                <div className="h-[720px] w-full flex flex-col gap-y-6">
                    <div className="text-black font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">About Me</span>
                    </div>
                    <div className="absolute">
                        <span className="font-enfonix font-extrabold text-gray-600 text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            ABOUT ME
                        </span>
                    </div>
                    <div className="text-black font-sans text-7xl flex font-semibold">
                        <div className="text-black font-sans text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-row">Who is <div className="text-purple-700 pl-4">Jiwan </div></span>
                            <div className="text-purple-700">Humagain?</div>
                        </div>
                    </div>
                    <div className="mr-36 mt-5">
                        <p className="text-start break-words font-mono text-xl font-medium">
                            As a diligent and driven Computer Engineering student, I am deeply passionate about leveraging technology to
                            solve complex problems and drive innovation. With a relentless work ethic and a keen interest in
                            entrepreneurship, I am dedicated to developing cutting-edge solutions that address real-world challenges and
                            create value.I am excited to push the boundaries of what is possible, harnessing my skills to build and scale
                            innovative solutions that positively influence society and contribute to the entrepreneurial landscape.
                        </p>
                    </div>
                    <div className="h-[200px] flex flex-row">
                        <div className="w-1/2 flex flex-col gap-y-5">

                            <Counter target={15} />
                            <CounterName text={'Project Completed'} />
                            <div className="h-52 w-1/2  flex items-center justify-start">
                                <div className="h-20 w-96 bg-black rounded-full flex items-center gap-5 justify-start pl-2">

                                    <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                                        <ArrowForwardIcon className="text-black" fontSize="large" />
                                    </div>

                                    <div className="w-60 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                                        <span className="text-black font-semibold text-2xl">Download CV</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-1/2 flex flex-col gap-y-5">

                            <Counter target={5} />
                            <CounterName text={'Industy Covered'} />
                            <h1 className="font-enfonix text-4xl italic">Jiwan Humagain</h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
