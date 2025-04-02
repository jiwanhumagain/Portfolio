import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import React from 'react';

function ExperienceContainer({ experienceObjects }) {
    return (
        <>
            {experienceObjects.map((experiences, index) => (
                <div key={index} className='flex flex-col md:flex-row w-full px-4 md:px-2'>
                    {/* Left side - Name and Description */}
                    <div className='w-full md:w-[65%] flex pt-3 md:pt-5'>
                        <div className='flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 justify-start md:ml-[6%] w-full'>
                            <div className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide md:tracking-wider break-words md:break-normal'>
                                {experiences.Name}
                            </div>
                            <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl opacity-70'>
                                {experiences.Des}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Date Range */}
                    <div className='w-full md:w-[35%] flex justify-start md:justify-center pt-2 md:pt-5'>
                        <div className='flex flex-row text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl justify-center items-center h-10 md:h-12 w-auto md:w-[90%] rounded-xl bg-white px-3 md:px-2 lg:px-3'>
                            <div className='flex-shrink-0'>{experiences.start}</div>
                            <div className='mx-2 md:mx-3 flex-shrink-0'>-</div>
                            <div className='flex-shrink-0'>{experiences.end}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
function Container({ type, Icon, objects }) {
    return (
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[650px] xl:w-[800px] min-h-[410px] sm:min-h-[460px] md:h-[510px] lg:h-[560px] xl:h-[610px] bg-gray-200 rounded-xl md:rounded-3xl flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 items-center mx-4 sm:mx-auto md:mx-2 mb-8 md:mb-0">
            <div className="flex flex-row h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] w-full gap-x-3 sm:gap-x-4 md:gap-x-5 items-center justify-start pl-4 sm:pl-6 md:pl-9 pt-3 md:pt-5">
                <div className="h-10 w-10 sm:h-12 md:h-16 lg:h-18 xl:h-20 sm:w-12 md:w-16 lg:w-18 xl:w-20 rounded-full bg-purple-700 flex items-center justify-center">
                    <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                </div>
                <div className="font-bold text-purple-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    {type}
                </div>
            </div>
            <div className='w-[90%] h-[1px] bg-gray-900'></div>
            <div className='w-full flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-8 xl:gap-y-9 pb-4 md:pb-0 overflow-y-auto'>
                <ExperienceContainer experienceObjects={objects} />
            </div>
        </div>
    );
}

export default function Education() {
    const dataEducation = [
        {
            'Name': 'Kathmandu University',
            'Des': 'Bachelors in Computer Engineering',
            'start': '2020',
            'end': '2024'
        },
        {
            'Name': 'Khwopa Secondary School',
            'Des': 'High School',
            'start': '2018',
            'end': '2020'
        },
        {
            'Name': 'Shree Bhaleshwor Secondary School',
            'Des': 'Bachelors in Computer Engineering',
            'start': '2016',
            'end': '2018'
        },
    ];

    const dataWork = [
        {
            'Name': 'GE Aerospace Virtual Experience Program',
            'Des': 'Developed a Vue.js UI simulation, demonstrating proficiency in Vue SFC Playground and feature implementation.',
            'start': '01/025',
            'end': '02/025'
        },
        // {
        //     'Name': 'Web Developer',
        //     'Des': 'New It',
        //     'start': '2020',
        //     'end': '2024'
        // },
        // {
        //     'Name': 'Web Developer',
        //     'Des': 'New It',
        //     'start': '2020',
        //     'end': '2024'
        // }
    ];

    return (
       <div className="w-full bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
            <div className="flex flex-col">
                <div className="w-full flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 items-center">
                    <div className="text-black font-sans text-xl sm:text-2xl md:text-2xl lg:text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Education & Work</span>
                    </div>
                    <div className="relative w-full h-[70px] sm:h-[80px] md:h-[100px] lg:h-[115px] xl:h-[130px] overflow-hidden">
                        <div className="absolute left-0 sm:left-[-2%] md:left-[-3%] lg:left-[-4%] xl:left-[-5%] w-[150%] sm:w-[160%] md:w-[175%] lg:w-[190%] xl:w-[200%] text-center md:text-left">
                            <span className="font-enfonix font-extrabold text-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl opacity-5 tracking-wide sm:tracking-wider md:tracking-widest scale-x-110 sm:scale-x-125 wave-animation">
                                Education & Work Experience
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row text-center md:text-left relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl gap-y-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 tracking-wide md:tracking-wider -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 px-4 md:px-0">
                        <span>My</span>
                        <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 justify-center md:justify-start">
                            <span className="text-purple-700">Education</span>
                            <span>&</span>
                        </div>
                        <span className="text-purple-700 whitespace-normal md:whitespace-nowrap">Work Experience</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 gap-8 md:gap-4">
                    <Container type="Education" Icon={SchoolIcon} objects={dataEducation} />
                    <Container type="Work Experience" Icon={WorkIcon} objects={dataWork} />
                </div>
            </div>
        </div>
    );
}