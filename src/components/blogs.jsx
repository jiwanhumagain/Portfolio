'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogsItems = [
    {
        img: '/assets/hero.png',
        buttomTitle: 'Hero Design',
        title: 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        author: 'Jiwan Humagain',
        date: '2024-12-26',
    },
    {
        img: '/assets/image.png',
        buttomTitle: 'Hero Design',
        title: 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        author: 'Jiwan Humagain',
        date: '2024-12-26',
    },
    {
        img: '/assets/app_design.png',
        buttomTitle: 'Hero Design',
        title: 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        author: 'Jiwan Humagain',
        date: '2024-12-26',
    },
];

function BlogPosts({ isLargeScreen, isDarkMode }) {
    return (
        <>
            {BlogsItems.map((items, index) => (
                <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8 mb-8 lg:mb-0" key={index}>
                    <div className="h-64 sm:h-72 lg:h-[400px] w-full rounded-3xl overflow-hidden">
                        <img
                            src={`${items.img}`}
                            alt="Blog Post"
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="h-10 sm:h-12 w-32 sm:w-40 px-2 rounded-full bg-green-500 flex items-center justify-center text-base sm:text-lg lg:text-xl text-gray-800">
                        {items.buttomTitle}
                    </div>
                    <div className={`font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide sm:tracking-wider ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {items.title}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 sm:gap-x-6 items-start">
                        {/* Author Section */}
                        <div className="flex gap-x-3 items-center min-w-fit">
                            <div className="h-4 w-4 sm:h-5 sm:w-5 bg-purple-800 rounded-full flex-shrink-0"></div>
                            <div className={`text-sm sm:text-base lg:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                                {items.author}
                            </div>
                        </div>
                        {/* Date Section */}
                        <div className="flex gap-x-3 items-center min-w-fit">
                            <div className="h-4 w-4 sm:h-5 sm:w-5 bg-purple-800 rounded-full flex-shrink-0"></div>
                            <div className={`text-sm sm:text-base lg:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                                {items.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default function Blogs() {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for dark mode preference on client-side
    useEffect(() => {
        // Check if user prefers dark mode
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeQuery.matches);

        // Add listener to respond to changes
        const handler = (e) => setIsDarkMode(e.matches);
        darkModeQuery.addEventListener('change', handler);
        
        return () => darkModeQuery.removeEventListener('change', handler);
    }, []);

    return (
        <div className={`flex flex-col w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} px-4 sm:px-8 lg:px-28 py-12 sm:py-16 lg:py-36 gap-y-12 sm:gap-y-16 lg:gap-y-20`}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                <div className="w-full lg:w-1/2 flex flex-col gap-y-4 sm:gap-y-6 relative">
                    <div className={`font-sans text-2xl sm:text-3xl flex relative font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <span>-</span>
                        <span className="ml-2">Blogs</span>
                    </div>
                    <div className="absolute -top-4 sm:-top-8 left-0 w-full overflow-hidden">
                        <span className={`font-enfonix font-extrabold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-5xl sm:text-7xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation whitespace-nowrap`}>
                            My Blog Post
                        </span>
                    </div>
                    <div className={`font-sans text-4xl sm:text-5xl lg:text-7xl flex font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <div className={`font-sans text-4xl sm:text-5xl lg:text-7xl flex flex-col font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            <span className="tracking-widest flex flex-wrap gap-2 lg:gap-4">
                                From My
                                <div className="text-purple-500">Blog</div>
                            </span>
                            <div className="text-purple-500">Post</div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                    <div className={`h-16 sm:h-20 w-full sm:w-96 ${isDarkMode ? 'bg-gray-700' : 'bg-black'} rounded-full flex items-center p-1.5 gap-2 hover:cursor-pointer`} onClick={() => {router.push('/Blogs')}}>
                        <div className={`h-full aspect-square rounded-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex justify-center items-center`}>
                            <ArrowForwardIcon className={isDarkMode ? 'text-white' : 'text-black'} fontSize={isLargeScreen ? "large" : "medium"} />
                        </div>
                        <div className="flex-grow h-full">
                            <div className="w-full h-full rounded-full bg-green-500 flex justify-center items-center">
                                <span className="text-black font-semibold text-lg sm:text-2xl">View All Blogs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-start gap-6 lg:gap-x-[2%]">
                <BlogPosts isLargeScreen={isLargeScreen} isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}