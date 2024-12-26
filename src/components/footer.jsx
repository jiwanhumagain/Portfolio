import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Icons = [
    {
        'icon': FacebookIcon
    },
    {
        'icon': InstagramIcon
    },
    {
        'icon': TwitterIcon
    },
    {
        'icon': LinkedInIcon
    },
    {
        'icon': YouTubeIcon
    },


]

export default function Footer() {
    return (
        <div className="flex flex-col h-full w-full bg-white pb-28 px-28 pt-36 gap-y-20">

            <div className="flex h-[20%] items-center">
                <div className="h-full w-full flex flex-col gap-y-6">
                    <div className="text-black font-sans text-7xl flex font-semibold">
                        <div className="text-black font-sans text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-row">
                                Let's
                                <div className="text-green-700 pl-4">
                                    Connect
                                </div>
                                <div className="pl-4">
                                    there
                                </div>
                            </span>

                        </div>
                    </div>
                </div>
                <div className="h-full w-1/2 flex items-center justify-end ">
                    <div className="h-20 w-96 bg-black rounded-full flex items-center gap-5 justify-end">
                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                            <ArrowForwardIcon className="text-black" fontSize="large" />
                        </div>
                        <div className="w-72 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">Hire Me Now</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[50%] w-full py-20  border-gray-400 border-y-2 flex justify-between'>
                <div className='flex flex-col gap-y-10 w-[25%]'>
                    <div className='font-bold text-5xl'>Jiwan</div>
                    <div className='text-xl text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className='flex items-center gap-x-3'>
                        {
                            Icons.map((items, index) => (
                                <div className='h-12 w-12 bg-purple-800 rounded-full flex items-center justify-center' key={index}>
                                    <items.icon fontSize='medium' className='text-white' />
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='flex flex-col gap-y-10 w-[20%] text-xl text-gray-800'>
                    <div  className='text-2xl font-semibold text-purple-800  tracking-widest'>Navigation</div>

                    <div>Home</div>
                    <div>Services</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Blogs</div>


                </div>
                <div className='flex flex-col gap-y-10 w-[20%] text-xl text-gray-800'>
                    <div className='text-2xl font-semibold text-purple-800  tracking-widest'>Contact</div>
                    <div>+9779800000000</div>
                    <div>example@example.com</div>
                    <div>www.example.com</div>
                    <div>Panauti-4 KavrePalanchwok Nepal</div>

                </div>
                <div className='flex flex-col gap-y-10 w-[20%]'>
                    <div className='text-2xl font-semibold text-purple-800  tracking-widest'>Get Latest Information</div>
                    <div className='flex justify-center items-center'>

                        <div className="h-12 w-[90%] flex items-center justify-center ">
                            <input
                                className="h-full w-full bg-gray-100 rounded-tl-xl rounded-bl-xl text-2xl pl-[2rem] placeholder-gray-600 flex items-center justify-center"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className='h-12 w-[10%] flex items-center bg-purple-800 text-white rounded-tr-xl rounded-br-xl'>
                            <button>
                                <ArrowForwardIcon fontSize='large' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-around text-3xl text-gray-800'>
                <div className='flex'>
                    Copyright @ 2024
                    <div className='ml-4 text-purple-800'>
                        Jiwan.
                    </div>
                    <div className='ml-4'>
                        All Right Reserved
                    </div>
                </div>
                <div className=''>Users Terms & Conditions | Privacy Policy</div>
            </div>
        </div>
    )
}