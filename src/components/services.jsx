import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ServicesScroll from './serviceScroll/servicesScroll';
export default function Services() {
    return (
        <div className="h-full w-full bg-violet-600 relative">
            <div className="flex lg:pt-36 md:pt-24 pt-20">
                <div className="flex flex-col items-start h-52 w-1/2 gap-y-3 lg:pl-28 pl-12 relative">
                    <div className="text-white font-sans lg:text-3xl md:text-3xl text-2xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Services</span>
                    </div>
                   
                    <div className="absolute left-0 w-full">
                        <span className="font-enfonix font-extrabold text-white lg:text-9xl md:text-8xl text-6xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            SERVICES
                        </span>
                    </div>
                    <div className="text-white font-sans lg:text-7xl md:text-6xl text-4xl flex font-semibold">
                        <span>My</span>
                        <span className="ml-4 text-green-500">Services</span>
                    </div>
                </div>
                <div className="lg:h-52 lg:w-1/2 md:h-40 h-32 w-1/2 flex items-center justify-end mr-[5%]">
                    <div className="lg:h-20 lg:w-96 h-16 w-80  bg-white rounded-full flex items-center lg:gap-5 pl-1 gap-2 justify-end">

                        <div className="lg:w-16 lg:h-16 md:h-12 md:w-12 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" fontSize="large" />
                        </div>

                        <div className="lg:w-72 w-64 h-full rounded-full bg-green-500 flex justify-center items-center lg:pl-4 ">
                            <span className="text-black font-semibold lg:text-2xl text-xl">View All Services</span>
                        </div>
                    </div>
                </div>


            </div>
            <ServicesScroll/>
        </div>
    );
}
