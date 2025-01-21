import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectContainer from './projectContainer';
export default function Projects() {
    return (
        <div className="w-full bg-violet-600 relative pb-16 sm:pb-24 md:pb-32">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row pt-16 sm:pt-24 md:pt-36 px-4 sm:px-8 md:px-12 lg:px-16">
                {/* Left Side - Title */}
                <div className="flex flex-col items-start w-full lg:w-1/2 gap-y-3 relative mb-8 lg:mb-0">
                    <div className="text-white font-sans text-xl sm:text-2xl md:text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Projects</span>
                    </div>
                    <div className="absolute top-0 left-0 w-full overflow-hidden">
                        <span className="whitespace-nowrap font-enfonix font-extrabold text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            Latest Projects
                        </span>
                    </div>
                    <div className="text-white font-sans text-3xl sm:text-5xl md:text-7xl flex flex-col sm:flex-row font-semibold gap-2 sm:gap-4 mt-6">
                        <span>My</span>
                        <span className="text-green-500">Latest Projects</span>
                    </div>
                </div>

                {/* Right Side - View All Button */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                    <div className="h-14 sm:h-16 md:h-20 w-full sm:w-96 bg-white rounded-full flex items-center gap-3 sm:gap-5 justify-end">
                        <div className="px-3 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" />
                        </div>
                        <div className="flex-1 sm:w-72 h-full rounded-full bg-green-500 flex justify-center items-center">
                            <span className="text-black font-semibold text-lg sm:text-xl md:text-2xl">View All Projects</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Container */}
            <div className='flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 mt-8 sm:mt-12 md:mt-16'>
                <ProjectContainer direction={'row'} />
                <ProjectContainer direction={'row-reverse'} />
            </div>
        </div>
    );
}