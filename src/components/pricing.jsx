import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';

const HourlyItems = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Sed do eiusmod tempor',
    'ut labore et dolore magna aliqua',
    'consectetur adipiscing elit',
]

const MonthlyItems = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Sed do eiusmod tempor',
    'ut labore et dolore magna aliqua',
    'consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Sed do eiusmod tempor',
]

export default function PricingModel() {
    return (
        <div className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 py-12 sm:py-16 md:py-24 lg:py-28 xl:py-36">
            {/* Main Container */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Section */}
                <div className='flex flex-col w-full lg:w-[25%] gap-y-12 lg:gap-y-52'>
                    {/* Header Section */}
                    <div className="flex flex-col gap-y-4 sm:gap-y-6 items-start justify-center relative">
                        <div className="text-black font-sans text-xl sm:text-2xl md:text-3xl flex font-medium tracking-wide">
                            <span>-</span>
                            <span className="ml-2">Pricing Table</span>
                        </div>
                        <div className="absolute top-0 left-0 w-full overflow-hidden">
                            <span className="font-enfonix font-extrabold text-gray-600 text-4xl sm:text-6xl md:text-8xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation whitespace-nowrap">
                                Pricing Model
                            </span>
                        </div>
                        <div className="text-black font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col font-semibold mt-6">
                            <span className="tracking-wide sm:tracking-wider flex flex-row gap-x-2 sm:gap-x-4">
                                My <span className="text-purple-700">Pricing</span>
                            </span>
                            <span className="text-purple-700">Model</span>
                        </div>
                    </div>
                    {/* Custom Plan Card */}
                    <div className="w-full rounded-2xl flex flex-col border-2 p-6 sm:p-8 gap-y-6 sm:gap-y-8">
                        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-semibold'>
                            Hey! Need a Custom Plan?
                        </div>
                        <div className='text-base sm:text-lg md:text-xl lg:text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="relative h-14">
                            <div className="absolute left-0 right-0 h-14 bg-black rounded-full flex items-center">
                                <div className="absolute left-1 h-12 w-12 flex justify-center items-center rounded-full bg-white">
                                    <ArrowForwardIcon className="text-black" />
                                </div>
                                <div className="absolute left-14 right-1 h-[52px] rounded-full bg-green-500 flex justify-center items-center">
                                    <span className="text-black font-semibold text-lg">Get Started</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Pricing Cards */}
                <div className="flex flex-col items-end md:flex-row w-full lg:w-[75%] gap-8 md:gap-6 lg:gap-8">
                    {/* Hourly Card */}
                    <div className="bg-purple-800 w-full md:w-[45%] rounded-2xl lg:h-[70%] xl:h-[70%] flex flex-col p-6 sm:p-8 gap-y-8 sm:gap-y-10">
                        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-white font-semibold'>
                                    Hourly
                                </div>
                                <div className='flex items-end gap-2'>
                                    <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold'>$80</span>
                                    <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>/Hour</span>
                                </div>
                            </div>
                            <div className='h-12 w-12 sm:h-14 sm:w-14 bg-purple-400 rounded-full flex items-center justify-center mt-4 sm:mt-0'>
                                <ArrowForwardIcon className="text-white w-6 sm:w-7 h-6 sm:h-7" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            {HourlyItems.map((item, index) => (
                                <div className='flex items-center gap-x-4' key={index}>
                                    <div className='h-6 w-6 sm:h-8 sm:w-8 rounded-full flex justify-center items-center bg-white'>
                                        <DoneIcon className='text-black w-4 sm:w-5 h-4 sm:h-5' />
                                    </div>
                                    <div className='text-base sm:text-lg md:text-xl lg:text-2xl text-white'>
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monthly Card */}
                    <div className="bg-white w-full md:w-[55%] h-full rounded-2xl flex flex-col border-2 p-6 sm:p-8 gap-y-8 sm:gap-y-10">
                        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl sm:text-3xl md:text-4xl text-black font-semibold'>
                                    Monthly
                                </div>
                                <div className='flex items-end gap-2'>
                                    <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-800 font-extrabold'>$9600</span>
                                    <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold'>/Month</span>
                                </div>
                            </div>
                            <div className='h-12 w-12 sm:h-14 sm:w-14 bg-gray-300 rounded-full flex items-center justify-center mt-4 sm:mt-0'>
                                <ArrowForwardIcon className="text-black w-6 sm:w-7 h-6 sm:h-7" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                            {MonthlyItems.map((item, index) => (
                                <div className='flex items-center gap-x-4' key={index}>
                                    <div className='h-6 w-6 sm:h-8 sm:w-8 rounded-full flex justify-center items-center bg-purple-800'>
                                        <DoneIcon className='text-white w-4 sm:w-5 h-4 sm:h-5' />
                                    </div>
                                    <div className='text-base sm:text-lg md:text-xl lg:text-2xl text-black'>
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}