'use client'
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';


function ButtonDesign({ itemName }) {
    return (
        <div className='h-8 sm:h-10 md:h-12 w-28 sm:w-32 md:w-40 px-2 rounded-full bg-green-500 flex items-center justify-center text-sm sm:text-base md:text-xl text-gray-800'>
            {itemName}
        </div>
    );
}

export default function ProjectContainer({ direction, data }) {
    let router = useRouter();
    console.log("Received Data in ProjectContainer:", data);
    return (

        <div className={`w-[95%] md:w-[90%] lg:w-[80%] bg-violet-400 rounded-3xl flex flex-col ${direction === 'row-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            {/* Image Section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center rounded-3xl p-4 sm:p-6 md:p-8'>
                <div className='relative aspect-square lg:aspect-square w-full flex items-center justify-center'>
                    <img
                        src={data.img}
                        alt={data.title}
                        className='h-full w-full rounded-xl object-contain'
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center rounded-3xl p-4 sm:p-6 md:p-8'>
                <div className='w-full flex flex-col items-start justify-start gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-20'>
                    {/* Buttons Row */}
                    <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4'>
                        {data.skills.map((skills, index) => (
                            <ButtonDesign key={index} itemName={skills} />
                        ))}
                    </div>

                    {/* Title */}
                    <div className='text-2xl sm:text-3xl md:text-4xl text-white font-semibold'>
                        {data.title}
                    </div>

                    {/* Description */}
                    <div className='text-base sm:text-lg md:text-xl text-white/90'>
                        {data.desc}
                    </div>

                    {/* View Details Button */}
                    <div
                        className="h-12 sm:h-14 w-full sm:w-72 bg-white rounded-full flex items-center gap-3 sm:gap-5 justify-end hover:cursor-pointer"
                        onClick={() => router.push(`/ServiceDetails?id=${encodeURIComponent(data.id)}`)}
                    >
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex px-3 justify-center m-1 items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" />
                        </div>
                        <div className="flex-1 sm:w-52 h-full rounded-full bg-green-500 flex justify-center items-center">
                            <span className="text-black font-semibold text-lg sm:text-xl md:text-2xl">View Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
