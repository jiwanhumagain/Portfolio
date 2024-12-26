import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function ButtomDesign({ itemName }) {
    return (
        <div className='h-12 w-40 px-2 rounded-full bg-green-500 flex items-center justify-center text-xl text-gray-800'>
            {itemName}
        </div>
    )
}
function ProjectContainer({ direction }) {
    const calculatedPaddingLeft = direction === "row-reverse" ? 10 : 0;
    const calculatedPaddingRight = direction === "row-reverse" ? 0 : 20;
    return (
        <div className={`w-[80%] bg-violet-400 rounded-xl flex flex-${direction}`}>
            <div className='h-[90%] w-1/2    flex justify-center items-center rounded-3xl'>
                <div className='h-[30rem] w-full flex items-center justify-center'>
                    <img src='/assets/image.png' alt='Hero jiwan' className='h-[90%] w-[90%]  rounded-xl' />
                </div>
            </div>

            <div className='h-[90%] w-1/2    flex justify-center items-center rounded-3xl'>
                <div className={`h-[30rem] w-full flex flex-col items-start justify-start pt-[8%] pr-[${calculatedPaddingRight}%] gap-y-10 pl-[${calculatedPaddingLeft}%]`}>
                    <div className='flex flex-row items-center justify-center gap-x-5 '>
                        <ButtomDesign itemName={'APP Design'} />
                        <ButtomDesign itemName={'Web Design'} />
                        <ButtomDesign itemName={'Ui Design'} />

                    </div>
                    <div className='text-4xl text-white'>
                        Podcast - Podcast Mobile App Solution
                    </div>
                    <div className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </div>
                    <div className="h-14 w-72 bg-white rounded-full flex items-center gap-5 justify-end">

                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" fontSize="large" />
                        </div>

                        <div className="w-52 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">View Details</span>
                        </div>
                    </div>


                </div>
            </div>

        </div>)



}
export default function Projects() {
    return (
        <div className="h-full w-full bg-violet-600 relative pb-32">
            <div className="flex pt-36">
                <div className="flex flex-col items-start h-52 w-1/2 gap-y-3 pl-28 relative">
                    <div className="text-white font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Projects</span>
                    </div>

                    <div className="absolute left-0 w-full">
                        <span className="whitespace-nowrap font-enfonix font-extrabold text-white text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            Latest Projects
                        </span>
                    </div>
                    <div className="text-white font-sans text-7xl flex font-semibold">
                        <span>My</span>
                        <span className="ml-4 text-green-500">Latest Projects</span>
                    </div>
                </div>
                <div className="h-52 w-1/2 flex items-center justify-end mr-[5%]">
                    <div className="h-20 w-96 bg-white rounded-full flex items-center gap-5 justify-end">

                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" fontSize="large" />
                        </div>

                        <div className="w-72 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">View All Projects</span>
                        </div>
                    </div>
                </div>


            </div>
            <div className='justify-center flex items-center flex-col gap-y-10'>
                <ProjectContainer direction={'row'} />
                <ProjectContainer direction={'row-reverse'} />

            </div>
        </div>
    );
}
