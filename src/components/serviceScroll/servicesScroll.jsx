import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

export default function ServicesScroll() {
    const Services = [
        {
            'title':'Web Design',
            'img':'./assets/web.jpeg',
            'desc':'Crafting visually appealing and user-friendly designs that enhance user experience and brand identity.'
        },
        {
            'title':'Backend Development',
            'img':'./assets/backend.jpeg',
            'desc':'Building secure, scalable, and efficient server-side logic to power seamless digital experiences.'

        },
        {
       
            'title': 'Frontend Development',
            'img':'./assets/frontend.jpeg',
            'desc':'Creating responsive and interactive interfaces that bring designs to life with smooth user interactions.'


        },
        {
            'title': 'App Development',
            'img':'./assets/html.png',
            'desc':'Developing high-performance mobile and web applications tailored for functionality and user engagement.'


        }
        
        
     
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
                            <img className="h-2/3 w-2/3 rounded-full object-cover" src={service.img} alt={service.title} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-6 sm:gap-y-9">
                            <h1 className="font-bold text-2xl md:text-4xl text-center">{service.title}</h1>
                            <p className="text-center break-words mx-8 sm:mx-14 font-serif text-lg md:text-xl font-medium justify-between p-5">
                                {service.desc}
                            </p>
                            {/* <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                                <span>Learn more</span>
                                <ArrowForwardIcon className="text-gray" fontSize="large" />
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
