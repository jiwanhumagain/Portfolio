import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

export default function ServicesScroll() {
    const Services = [
        'Web Design',
        'Backend Development',
        'Frontend Development',
        'App Development',
        'Cloud Deployment',
        'Database Design',
        'SEO Optimization',
        'Cybersecurity',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    
    const isXl = useMediaQuery('(min-width: 1536px)');
    const isLg = useMediaQuery('(min-width: 1100px)');
    const isMd = useMediaQuery('(min-width: 768px)');

    
    const cardsToShow = isXl ? 3 : isLg ? 3 : isMd ? 3 : 1;

    return (
        <div className="relative flex items-center pb-16 sm:pb-20 lg:pb-28 mx-4 pt-10 sm:mx-12 lg:mx-36">
            <div className="flex flex-col lg:flex-row items-center overflow-hidden lg:space-x-8 space-y-6 lg:space-y-0 w-full lg:w-[1800px]">
                {Services.slice(currentIndex, currentIndex + cardsToShow).map((service, index) => (
                    <div
                        key={index}
                        className="h-[400px] w-full sm:h-[500px] md:h-[600px] lg:h-[600px] 
                                 sm:w-[450px] md:w-[550px] lg:w-[580px] xl:w-[700px] 
                                 rounded-full bg-white flex flex-col justify-evenly items-center
                                 transition-all duration-300"
                    >
                        <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] 
                                    rounded-full bg-gray-200 flex items-center justify-center">
                            <img className="h-2/3 w-2/3" src="./assets/hero.png" alt={service} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-6 sm:gap-y-9">
                            <h1 className="font-bold text-2xl md:text-4xl text-center">{service}</h1>
                            <p className="text-center break-words mx-8 sm:mx-14 font-serif text-lg md:text-xl font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                                <span>Learn more</span>
                                <ArrowForwardIcon className="text-gray" fontSize="large" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
