import React from 'react';
export default function HomeComponent() {

    return (

        <div className='lg:mt-20 md:mt-12 mt-10 flex flex-col items-center '>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col  items-center'>
                    <h1 className='lg:text-5xl text-3xl '>- Hello</h1>
                    <h1 className='lg:mt-8 md:mt-5 mt-3 lg:text-7xl text-5xl  font-semibold tracking-widest font-serif'>I'm <b className='text-blue-400 underline underline-offset-5 decoration-4'>Jiwan,</b></h1>
                    <h1 className='lg:mt-8 md:mt-5 mt-3 lg:text-7xl text-5xl  font-semibold tracking-widest font-serif whitespace-nowrap'>Full Stack Developer</h1>
                </div>
                {/* <div className="bg-black w-40 h-40 rounded-full translate-x-72 relative flex items-center justify-center">

                    <div className="absolute h-20 w-20 rounded-full bg-green-500"></div>


                    <div className="absolute w-full h-full flex items-center justify-center">
                        {Array.from({ length: 3 }).map((_, j) => (
                            Array.from("HIRE ME .").map((char, i) => (
                                <span
                                    key={`${j}-${i}`}
                                    className="absolute text-white text-xs font-semibold"
                                    style={{
                                        transform: `rotate(${j * 120 + i * 9}deg) translate(65px) rotate(-${j * 120 + i * 9}deg)`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))
                        ))}
                    </div>

                </div> */}


            </div>


            <div className="relative justify-center flex lg:h-[800px] lg:w-[800px] h-[400px] w-[400px] mt-20">

                <div className='lg:h-[600px] lg:w-[500px] h-[300px] w-[250px] translate-y-[100px] -translate-x-[50px] skew-x-12 lg:-translate-x-[50px] lg:translate-y-[200px] '

                    style={{

                        borderRadius: '20px 10px 10px 10px',
                        backgroundColor: 'rgb(44, 3, 169)',
                    }}
                ></div>


                <div className='lg:h-[300px] lg:w-[300px]  lg:-skew-x-12 lg:translate-x-[20px] lg:translate-y-[500px] h-[150px] w-[150px]  -skew-x-12 translate-x-[20px] translate-y-[250px] '

                    style={{


                        borderRadius: '10px',

                        backgroundColor: 'rgb(136, 135, 135)'
                    }}
                ></div>

                <img
                    src="./assets/hero.png"
                    alt="Jiwan Image"
                    className="h-full w-full object-fill absolute grayscale"
                />


                <div
                    className="absolute lg:h-[100px] lg:w-[550px] sm:h-[50px] sm:w-[350px] rounded-[50px] z-10 bg-white justify-around flex flex-row items-center top-[85%] left-[50%] translate-x-[-53%]"
                >
                    <div className=" lg:py-7 lg:px-16 px-8 py-2 rounded-full flex flex-row items-center" style={{ backgroundColor: 'rgb(44, 3, 169)', color: 'white' }}>
                        <div className='font-semibold lg:text-3xl text-xl'>Portfolio</div>
                        <div className="h-8 w-8 bg-green-400 rounded-full ml-2 flex items-center justify-center" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={7}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-black font-semibold lg:text-3xl text-xl whitespace-nowrap border-black border-2 lg:py-6 lg:px-16 px-8 py-2 rounded-full">
                        Hire Me
                    </div>
                </div>
                <div className='hidden absolute lg:flex md:flex flex-col lg:top-[65%] lg:-left-[50%] lg:h-[5rem] lg:w-[20rem] md:top-[50%] md:-left-[65%] md:h-[3rem] md:w-[12rem] ' >
                    <span className='font-semibold lg:text-3xl md:text-xl'>450+</span>
                    <span className='text-xl mt-3'>Happy Clients</span>
                    <div className='flex flex-row items-center gap-0 mt-3'>
                        <div className="relative rounded-full lg:h-20 lg:w-20 md:h-12 md:w-16 lg:border-4 md:border-2 border-white overflow-hidden">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full lg:h-20 lg:w-20 md:h-12 md:w-16 lg:border-4 md:border-2 border-white overflow-hidden lg:-ml-6 md:-ml-3">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full lg:h-20 lg:w-20 md:h-12 md:w-16 lg:border-4 md:border-2 border-white overflow-hidden lg:-ml-6 md:-ml-3">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full lg:h-20 lg:w-20 md:h-12 md:w-16 lg:border-4 md:border-2 border-white overflow-hidden lg:-ml-6 md:-ml-3">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full lg:h-20 lg:w-20 md:h-12 md:w-16 lg:border-4 md:border-2 border-white overflow-hidden z-20 lg:-ml-6 md:-ml-3">
                            <div
                                className="absolute inset-0 w-full h-full flex items-center justify-center object-cover grayscale bg-slate-200 text-5xl"
                                style={{ Color: 'rgb(44, 3, 169)' }}
                            >
                                +
                            </div>
                        </div>



                    </div>
                </div>
            </div>








        </div>


    )
}