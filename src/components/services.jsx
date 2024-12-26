import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ServicesScroll from './serviceScroll/servicesScroll';
export default function Services() {
    return (
        <div className="h-full w-full bg-violet-600 relative">
            <div className="flex pt-36">
                <div className="flex flex-col items-start h-52 w-1/2 gap-y-3 pl-28 relative">
                    <div className="text-white font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Services</span>
                    </div>
                   
                    <div className="absolute left-0 w-full">
                        <span className="font-enfonix font-extrabold text-white text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            SERVICES
                        </span>
                    </div>
                    <div className="text-white font-sans text-7xl flex font-semibold">
                        <span>My</span>
                        <span className="ml-4 text-green-500">Services</span>
                    </div>
                </div>
                <div className="h-52 w-1/2 flex items-center justify-end mr-[5%]">
                    <div className="h-20 w-96 bg-white rounded-full flex items-center gap-5 justify-end">

                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" fontSize="large" />
                        </div>

                        <div className="w-72 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">View All Services</span>
                        </div>
                    </div>
                </div>


            </div>
            <ServicesScroll/>
        </div>
    );
}
