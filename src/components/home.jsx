'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomeComponent() {
    const router =useRouter();
    return (
        <div id='Home' className="mt-6 sm:mt-8 md:mt-12 lg:mt-20 flex flex-col items-center px-4 sm:px-6 md:px-8">
            {/* Header Section */}
            <div className="w-full text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl">- Hello</h1>
                <h1 className="mt-2 sm:mt-3 md:mt-5 lg:mt-8 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-widest font-serif">
                    I'm <b className="text-blue-400 underline underline-offset-5 decoration-4">Jiwan,</b>
                </h1>
                <h1 className="mt-2 sm:mt-3 md:mt-5 lg:mt-8 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-widest font-serif">
                    Full Stack Developer
                </h1>
            </div>

            {/* Main Visual Section */}
            <div className="relative flex justify-center w-full max-w-[300px] h-[300px] sm:max-w-[400px] sm:h-[400px] lg:max-w-[800px] lg:h-[800px] mt-10 sm:mt-16 lg:mt-20">
                {/* Background shapes */}
                <div
                    className="h-[200px] w-[180px] sm:h-[300px] sm:w-[250px] lg:h-[600px] lg:w-[500px] translate-y-[50px] -translate-x-[30px] sm:translate-y-[100px] sm:-translate-x-[50px] lg:translate-y-[200px] skew-x-12"
                    style={{
                        borderRadius: '20px 10px 10px 10px',
                        backgroundColor: 'rgb(44, 3, 169)',
                    }}
                ></div>
                <div
                    className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[300px] lg:w-[300px] -skew-x-12 translate-x-[10px] translate-y-[180px] sm:translate-x-[20px] sm:translate-y-[250px] lg:translate-y-[500px]"
                    style={{
                        borderRadius: '10px',
                        backgroundColor: 'rgb(136, 135, 135)',
                    }}
                ></div>

                {/* Hero Image */}
                <img
                    src="./assets/hero.png"
                    alt="Jiwan Image"
                    className="absolute max-h-full max-w-full object-cover grayscale"
                />

                {/* CTA Section */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[350px] lg:w-[550px] h-[40px] sm:h-[50px] lg:h-[100px] rounded-[50px] bg-white flex justify-around items-center z-10">
                    <button className="py-1.5 px-4 sm:py-2 sm:px-8 lg:py-7 lg:px-16 rounded-full flex items-center gap-2 text-white"
                        style={{ backgroundColor: 'rgb(44, 3, 169)' }}>
                        <span className="text-lg sm:text-xl lg:text-3xl font-semibold whitespace-nowrap">Portfolio</span>
                        <div className="h-6 w-6 sm:h-8 sm:w-8 bg-green-400 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 sm:h-4 sm:w-4 text-white"
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
                    </button>
                    <button className="text-black font-semibold text-lg sm:text-xl lg:text-3xl whitespace-nowrap border-black border-2 py-1.5 px-4 sm:py-2 sm:px-8 lg:py-6 lg:px-16 rounded-full" onClick={()=>{router.push('/Contact')}}>
                        Hire Me
                    </button>
                </div>

                {/* Happy Clients Section */}
                <div className="hidden sm:flex absolute flex-col 
        sm:-left-[100%] md:-left-[100%] lg:-left-[100%] xl:-left-[20%]
        sm:top-1/2 lg:top-2/3
        sm:-translate-x-1/2 md:-translate-x-full
        sm:scale-75 md:scale-90 lg:scale-100
        z-10">
                    <span className="font-semibold text-2xl lg:text-3xl">450+</span>
                    <span className="text-lg lg:text-xl mt-2">Happy Clients</span>

                    <div className="flex items-center mt-3">
                        {/* Client Images */}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className={`
                        relative rounded-full 
                        sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20
                        border-2 lg:border-4 border-white 
                        overflow-hidden
                        ${index !== 0 ? '-ml-4 lg:-ml-6' : ''}
                        transition-transform hover:scale-110
                    `}
                            >
                                <img
                                    src="./assets/hero.png"
                                    alt={`Client ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover grayscale bg-slate-500 hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}

                        {/* Plus Button */}
                        <div className={`
                relative rounded-full 
                sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20
                border-2 lg:border-4 border-white 
                overflow-hidden 
                -ml-4 lg:-ml-6 
                z-20
                hover:scale-110 transition-transform
            `}>
                            <div className="
                    absolute inset-0 
                    w-full h-full 
                    flex items-center justify-center 
                    bg-slate-200 
                    text-2xl md:text-3xl lg:text-5xl
                    hover:bg-slate-300 transition-colors
                    "
                                style={{ color: 'rgb(44, 3, 169)' }}
                            >
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}