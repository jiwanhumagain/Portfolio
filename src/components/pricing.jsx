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
        <div className="flex flex-row h-full w-full bg-white pb-28 pl-28 pt-36">

            <div className='flex flex-col gap-y-52 pb-0 w-[33%] '>
                <div className=" flex flex-col gap-y-6 items-start justify-center">
                    <div className="text-black font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Pricing Table</span>
                    </div>
                    <div className="absolute -mt-[2%]">
                        <span className="font-enfonix font-extrabold text-gray-600 text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            Pricing Model
                        </span>
                    </div>
                    <div className="text-black font-sans text-7xl flex font-semibold">
                        <div className="text-black font-sans text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-row">My <div className="text-purple-700 pl-4">Pricing </div></span>
                            <div className="text-purple-700"> Model</div>
                        </div>
                    </div>
                </div>

                <div className="h-[450px] w-[85%] rounded-2xl flex flex-col border-2 justify-center items-start gap-y-8 pl-6">
                    <div className='text-5xl text-black pr-10 font-semiold'>
                        Hey! Need a Custom Plans?
                    </div>
                    <div className='text-2xl pr-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </div>
                    <div className="h-14 w-72 bg-black rounded-full flex items-center gap-5 justify-end">

                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
                            <ArrowForwardIcon className="text-black" fontSize="large" />
                        </div>

                        <div className="w-52 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">Get Started</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex h-auto w-[66%] flex-row gap-x-[7%] items-end">

                <div className="bg-purple-800 h-[80%] w-[40%] rounded-2xl flex flex-col border-2 justify-start items-start gap-y-10 pl-6">

                    <div className='flex h-[30%] w-full items-center gap-x-32 pt-14 '>
                        <div className='flex text-white flex-col gap-y-4'>
                            <div className='text-4xl font-semibold'>
                                Hourly
                            </div>
                            <div className='flex items-end justify-start gap-2'>
                                <span className='text-7xl font-extrabold'> $80 </span>
                                <span className='text-4xl font-semibold'>/Hour</span>

                            </div>
                        </div>
                        <div className='h-[50%] w-[15%] bg-purple-400 rounded-full flex items-center justify-center '>
                            <ArrowForwardIcon className="text-white" fontSize="large" />

                        </div>
                    </div>
                    <div className='flex flex-col h-[60%] w-full items-start'>
                        {HourlyItems.map((items,index) => (
                            <div className='flex gap-x-6 h-20' key={index}>
                                <div className='h-8 w-8 rounded-full flex justify-center items-center bg-white'>
                                    <DoneIcon className='text-black ' fontSize='medium' />

                                </div>
                                <div className='text-2xl text-white'>
                                    {items}
                                </div>

                            </div>
                        ))}


                    </div>

                </div>
                <div className="bg-white h-[100%] w-[40%] rounded-2xl flex flex-col border-2 justify-start items-start gap-y-10 pl-6">

                    <div className='flex h-[30%] w-full items-center gap-x-4 pt-14 '>
                        <div className='flex flex-col gap-y-4'>
                            <div className='text-4xl font-semibold text-black'>
                                Monthly
                            </div>
                            <div className='flex items-end justify-start gap-2'>
                                <span className='text-7xl font-extrabold text-purple-800'> $9600 </span>
                                <span className='text-4xl font-semibold text-black'>/Month</span>

                            </div>
                        </div>
                        <div className='h-[35%] w-[15%] bg-gray-300 rounded-full flex items-center justify-center '>
                            <ArrowForwardIcon className="text-black" fontSize="large" />

                        </div>
                    </div>
                    <div className='flex flex-col h-[60%] w-full items-start'>
                        {MonthlyItems.map((items,index) => (
                            <div className='flex gap-x-6 h-20' key={index}>
                                <div className='h-8 w-8 rounded-full flex justify-center items-center bg-purple-800'>
                                    <DoneIcon className='text-white ' fontSize='medium' />

                                </div>
                                <div className='text-2xl text-black'>
                                    {items}
                                </div>

                            </div>
                        ))}


                    </div>

                </div>
                
            </div>




        </div>
    )
}