'use client'
import { useState } from 'react'
import IntroNames from "../../introName"
import { useMediaQuery } from '@mui/material'
import { ChevronDown } from 'lucide-react'

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

function BlogPosts({ visiblePosts }) {
    return (
        <>
            {visiblePosts.map((items, index) => (
                <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8 mb-8 lg:mb-0 mt-20" key={index}>
                    <div className="h-64 sm:h-72 lg:h-[400px] w-full rounded-3xl overflow-hidden">
                        <img
                            src={`${items.img}`}
                            alt="Blog Post"
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="h-10 sm:h-12 w-32 sm:w-40 px-2 rounded-full bg-green-500 flex items-center justify-center text-base sm:text-lg lg:text-xl text-white">
                        {items.buttomTitle}
                    </div>
                    <div className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide sm:tracking-wider text-white">
                        {items.title}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 sm:gap-x-6 items-start">
                        <div className="flex gap-x-3 items-center min-w-fit">
                            <div className="h-4 w-4 sm:h-5 sm:w-5 bg-green-400 rounded-full flex-shrink-0"></div>
                            <div className="text-sm sm:text-base lg:text-lg font-medium text-white">
                                {items.author}
                            </div>
                        </div>
                        <div className="flex gap-x-3 items-center min-w-fit">
                            <div className="h-4 w-4 sm:h-5 sm:w-5 bg-green-400 rounded-full flex-shrink-0"></div>
                            <div className="text-sm sm:text-base lg:text-lg font-medium text-white">
                                {items.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default function BlogsContainer() {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const [visibleCount, setVisibleCount] = useState(3);
    
    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, BlogsItems.length));
    };

    const visiblePosts = BlogsItems.slice(0, visibleCount);
    const hasMore = visibleCount < BlogsItems.length;

    return (
        <div>
            <IntroNames name={'Blogs'} description={'Blog Posts'}/>
            <div className="flex flex-col w-full bg-purple-800 px-4 sm:px-8 lg:px-28 py-12 sm:py-16 lg:py-36 gap-y-12 sm:gap-y-16 lg:gap-y-20">
                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-0">
                    <div className="w-full lg:w-1/2 flex flex-col gap-y-4 sm:gap-y-6 relative">
                        <div className="text-white font-sans text-2xl sm:text-3xl flex relative font-medium tracking-wide">
                            <span>-</span>
                            <span className="ml-2">Blogs</span>
                        </div>
                        <div className="absolute -top-4 sm:-top-8 -left-20 w-full">
                            <span className="font-enfonix font-extrabold text-white text-5xl sm:text-7xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation whitespace-nowrap">
                                My Blog Post
                            </span>
                        </div>
                        <div className="text-white font-sans text-4xl sm:text-5xl lg:text-7xl flex font-semibold">
                            <div className="text-white font-sans text-4xl sm:text-5xl lg:text-7xl flex flex-col font-semibold">
                                <span className="tracking-widest flex flex-wrap gap-2 lg:gap-4 text-white">
                                    From My
                                    <div className="text-green-400">Blog Post</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-start gap-6 lg:gap-x-[2%]">
                    <BlogPosts visiblePosts={visiblePosts} />
                </div>
                
                {hasMore && (
                    <div className="flex justify-center">
                        <button 
                            onClick={handleLoadMore}
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
                        >
                            Load More
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}