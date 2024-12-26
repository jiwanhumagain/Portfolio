import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

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


    return (
        <div className="relative flex items-center pb-28 ml-64 mr-64">
           
            <div className="flex flex-row items-center overflow-hidden space-x-8 w-[1800px]">
                {Services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                    <div
                        key={index}
                        className="h-[600px] w-[700px] rounded-full bg-white flex flex-col justify-evenly items-center"
                    >
                        <div className="h-[200px] w-[200px] rounded-full bg-gray-200 flex items-center justify-center">
                            <img className="h-1/2 w-1/2" src="./assets/hero.png" alt={service} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-9">
                            <h1 className="font-bold text-5xl text-center">{service}</h1>
                            <p className="text-center break-words ml-14 mr-14 font-serif text-xl font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="">
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
