import React from 'react';
export default function HomeComponent() {

    return (

        <div className='mt-20 flex flex-col items-center'>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col  items-center'>
                    <h1 className='text-5xl'>- Hello</h1>
                    <h1 className='mt-8 text-7xl font-semibold tracking-widest font-serif'>I'm <b className='text-blue-400 underline underline-offset-5 decoration-4'>Jiwan,</b></h1>
                    <h1 className='mt-8 text-7xl font-semibold tracking-widest font-serif'>Full Stack Developer</h1>
                </div>
                <div className="bg-black w-40 h-40 rounded-full translate-x-72 relative flex items-center justify-center">

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

                </div>


            </div>


            <div className="relative justify-center flex" style={{ height: '800px', width: '800px' }}>

                <div

                    style={{
                        height: '600px',
                        width: '500px',
                        transform: 'skew(12deg)',
                        translate: '-50px 200px',

                        borderRadius: '20px 10px 10px 10px',
                        backgroundColor: 'rgb(44, 3, 169)',
                    }}
                ></div>


                <div

                    style={{
                        height: '300px',
                        width: '300px',
                        transform: 'skew(-12deg)',
                        borderRadius: '10px',
                        translate: '20px 500px',
                        backgroundColor: 'rgb(136, 135, 135)'
                    }}
                ></div>

                <img
                    src="./assets/hero.png"
                    alt="Jiwan Image"
                    className="h-full w-full object-fill absolute grayscale"
                />


                <div
                    className="absolute bg-white justify-around flex flex-row items-center"
                    style={{
                        top: '85%',
                        left: '50%',
                        transform: 'translate(-53%)',
                        height: '100px',
                        width: '550px',
                        borderRadius: '50px',
                        zIndex: 10,
                    }}
                >
                    <div className=" pt-7 pb-7 pl-16 pr-16 rounded-full flex flex-row items-center" style={{ backgroundColor: 'rgb(44, 3, 169)', color: 'white' }}>
                        <div className='font-semibold text-3xl'>Portfolio</div>
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
                    <div className="text-black font-semibold text-3xl border-black border-2 pt-6 pb-6 pl-16 pr-16 rounded-full">
                        Hire Me
                    </div>
                </div>
                <div className='absolute flex flex-col' style={{ top: '65%', left: '-50%', height: '5rem', width: '20rem' }}>
                    <span className='font-semibold text-3xl'>450+</span>
                    <span className='text-xl mt-3'>Happy Clients</span>
                    <div className='flex flex-row items-center gap-0 mt-3'>
                        <div className="relative rounded-full h-20 w-20 border-4 border-white overflow-hidden ">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>


                        <div className="relative rounded-full h-20 w-20 border-4 border-white overflow-hidden z-10 -ml-6">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full h-20 w-20 border-4 border-white overflow-hidden z-20 -ml-6">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full h-20 w-20 border-4 border-white overflow-hidden z-20 -ml-6">
                            <img
                                src="./assets/hero.png"
                                alt="Jiwan Image"
                                className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500"
                            />
                        </div>
                        <div className="relative rounded-full h-20 w-20 border-4 border-white overflow-hidden z-20 -ml-6">
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