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
        <div className="relative flex items-center pb-28 lg:ml-36 lg:mr-36 ml-20 mr-20">
           
            <div className="lg:flex lg:flex-row flex flex-col items-center overflow-hidden lg:space-x-8 space-y-10 lg:w-[1800px] w-[1200px]">
                {Services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                    <div
                        key={index}
                        className="lg:h-[600px] lg:w-[700px] md:h-[600px] md:w-[550px] sm:h-[550px] sm:w-[450px] rounded-full bg-white flex flex-col justify-evenly items-center"
                    >
                        <div className="lg:h-[250px] lg:w-[250px] md:h-[250px] md:w-[250px] sm:h-[200px] sm:w-[200px] rounded-full bg-gray-200 flex items-center justify-center">
                            <img className="h-2/3 w-2/3" src="./assets/hero.png" alt={service} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-9">
                            <h1 className="font-bold lg:text-4xl md:text-4xl text-2xl text-center">{service}</h1>
                            <p className="text-center break-words ml-14 mr-14 font-serif lg:text-xl md:text-xl text-lg font-medium">
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
