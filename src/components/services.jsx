'use client'
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ServicesScroll from './serviceScroll/servicesScroll';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router=useRouter();
  return (
    <div className="h-full w-full bg-violet-600 relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row pt-12 sm:pt-16 md:pt-24 lg:pt-36 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Left Section - Titles */}
        <div className="w-full sm:w-1/2 flex flex-col gap-y-3 relative mb-8 sm:mb-0">
          {/* Services Label */}
          <div className="text-white font-sans text-xl sm:text-2xl md:text-3xl flex items-center font-medium tracking-wide">
            <span>-</span>
            <span className="ml-2">Services</span>
          </div>
          {/* Background Text */}
          <div className="absolute left-0 w-full overflow-hidden">
            <span className="font-enfonix font-extrabold text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation block whitespace-nowrap">
              SERVICES
            </span>
          </div>
          {/* Main Title */}
          <div className="text-white font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl flex flex-wrap font-semibold items-center gap-2 sm:gap-4 mt-4">
            <span>My</span>
            <span className="text-green-500">Services</span>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end items-center mb-8 sm:mb-0">
          <div className="h-14 sm:h-16 lg:h-20 w-full lg:max-w-[384px] bg-white rounded-full flex items-center justify-end gap-2 lg:gap-5 p-1 hover:cursor-pointer" onClick={()=>{router.push(`\Services`)}}>
            {/* Arrow Button */}
            <div className="max-h-12 min-h-8 sm:max-h-14 lg:h-16 ml-1 aspect-square flex justify-center items-center rounded-full bg-purple-700 flex-shrink-0">
              <ArrowForwardIcon
                className="text-white text-lg sm:text-xl lg:text-2xl"
              />
            </div>
            {/* View All Services Button */}
            <div className="h-full flex-grow rounded-full bg-green-500 flex justify-center items-center" >
              <span className="text-black font-semibold text-lg sm:text-xl lg:text-2xl px-4 whitespace-nowrap">
                View All Services
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Scroll Section */}
      <ServicesScroll />
    </div>
  );
}