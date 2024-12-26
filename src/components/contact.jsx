import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function Contact() {
    const ContactDetails = [{
        'icon': PhoneIcon,
        'detail': '+9779800000000'
    },
    {
        'icon': EmailIcon,
        'detail': 'example@gmail.com'
    },
    {
        'icon': LinkedInIcon,
        'detail': 'example'
    },
    {
        'icon': FmdGoodIcon,
        'detail': 'Panauti-4,Kavre'
    },
    ]
    return (
        <div className="flex flex-row h-full w-full bg-purple-700 pb-28 pl-28 pt-36">

            <div className='flex flex-col gap-y-20 pb-0 w-[33%] '>
                <div className=" flex flex-col gap-y-6 items-start justify-center">
                    <div className="text-white font-sans text-3xl flex relative font-medium tracking-wide">
                        <span className='text-green-400'>-</span>
                        <span className="ml-2">Contact Us</span>
                    </div>
                    <div className="absolute -mt-[10%] -ml-[15%]">
                        <span className="font-enfonix font-extrabold text-white text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            Contact Us
                        </span>
                    </div>
                    <div className="text-white font-sans text-7xl flex font-semibold">
                        <div className="text-white font-sans text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-row">Let's <div className="text-green-400 pl-4">Connect </div> <div className='pl-4'> &</div></span>
                            <div className="text-green-400"> Collaborate</div>
                        </div>
                    </div>
                    <div className='text-2xl text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                </div>
                <div className='flex flex-col justify-start items-start'>
                    {ContactDetails.map((items, index) => (
                        <div className='flex gap-x-5 justify-center items-center h-24' key={index} >
                            <div className='w-16 h-16 bg-white rounded-full flex justify-center items-center'>
                                <items.icon fontSize='large' />
                            </div>
                            <div className='text-4xl text-white'> {items.detail}</div>
                        </div>
                    ))}
                </div>



            </div>
            <div className='flex flex-col pb-0 w-[66%] ml-[10%] '>
                <div className='flex flex-row h-[15%] w-full justify-start gap-x-[5%]'>
                    <div className="h-full w-[40%] flex items-center justify-center ">
                        <input
                            className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pl-[2rem] placeholder-white flex items-center justify-center"
                            placeholder="First Name *"
                        />
                    </div>
                    <div className="h-full w-[40%] flex items-center justify-center ">
                        <input
                            className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pl-[2rem] placeholder-white flex items-center justify-center"
                            placeholder="Last Name *"
                        />
                    </div>
                </div>
                <div className='flex flex-row h-[15%] w-full justify-start gap-x-[5%]'>
                    <div className="h-full w-[40%] flex items-center justify-center ">
                        <input
                            className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pl-[2rem] placeholder-white flex items-center justify-center"
                            placeholder="Email *"
                        />
                    </div>
                    <div className="h-full w-[40%] flex items-center justify-center ">
                        <input
                            className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pl-[2rem] placeholder-white flex items-center justify-center"
                            placeholder="Phone Number *"
                        />
                    </div>
                </div>
                <div className="h-[20%] w-[85%] flex  items-center ">
                    <input
                        className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pl-[2rem] placeholder-white flex items-center justify-center"
                        placeholder="Subject *"
                    />
                </div>

                <div className="h-[40%] w-[85%] mt-[3%] flex">
                    <textarea
                        className="h-[66%] w-full bg-purple-200 rounded-3xl text-2xl pt-4 pl-[2rem] placeholder-white placeholder-opacity-75 resize-none"
                        placeholder="Message *"
                    ></textarea>
                </div>



                <div className=''>
                    <div className="h-20 w-72 bg-white rounded-full flex items-center gap-5 justify-end">

                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-purple-700">
                            <ArrowForwardIcon className="text-white" fontSize="large" />
                        </div>

                        <div className="w-52 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">Send Message</span>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}