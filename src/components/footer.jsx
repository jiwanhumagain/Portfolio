'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useRouter } from 'next/navigation';

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
    const currentYear = new Date().getFullYear();
    const router=useRouter();
    return (
        <div className="flex flex-col h-full w-full bg-white pb-8 md:pb-28 px-4 md:px-28 pt-12 md:pt-36 gap-y-8 md:gap-y-20">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row h-auto md:h-[20%] items-center gap-y-8 md:gap-y-0">
                <div className="h-full w-full flex flex-col gap-y-6">
                    <div className="text-black font-sans text-4xl md:text-7xl flex font-semibold">
                        <div className="text-black font-sans text-4xl md:text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-wrap md:flex-row gap-2">
                                Let's
                                <div className="text-green-700">
                                    Connect
                                </div>
                                <div>
                                    there
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 flex items-center justify-center md:justify-end">
                    <div className="h-16 md:h-20 w-[300px] sm:w-[350px] md:w-96 bg-black rounded-full flex items-center gap-2 md:gap-5 px-2 py-1 hover:cursor-pointer" onClick={()=>{router.push('\Contact')}}>
                        <div className="w-12 md:w-16 h-12 md:h-16 flex-shrink-0 flex justify-center items-center rounded-full bg-white">
                            <ArrowForwardIcon className="text-black text-2xl md:text-3xl" />
                        </div>
                        <div className="flex-1 h-full rounded-full bg-green-500 flex justify-center items-center">
                            <span className="text-black font-semibold text-lg md:text-2xl">Hire Me Now</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className='min-h-[50%] w-full py-8 md:py-20 border-gray-400 border-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* About Section */}
                <div className='flex flex-col gap-y-6 md:gap-y-10'>
                    <div className='font-bold text-4xl md:text-5xl'>Jiwan</div>
                    <div className='text-lg md:text-xl text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className='flex items-center gap-x-3'>
                        {Icons.map((items, index) => (
                            <div className='h-10 md:h-12 w-10 md:w-12 bg-purple-800 rounded-full flex items-center justify-center' key={index}>
                                <items.icon fontSize='medium' className='text-white' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col gap-y-6 md:gap-y-10'>
                    <div className='text-xl md:text-2xl font-semibold text-purple-800 tracking-widest'>Navigation</div>
                    <div className='text-lg md:text-xl text-gray-800'>Home</div>
                    <div className='text-lg md:text-xl text-gray-800'>Services</div>
                    <div className='text-lg md:text-xl text-gray-800'>About</div>
                    <div className='text-lg md:text-xl text-gray-800'>Projects</div>
                    <div className='text-lg md:text-xl text-gray-800'>Blogs</div>
                </div>

                {/* Contact Info */}
                <div className='flex flex-col gap-y-6 md:gap-y-10'>
                    <div className='text-xl md:text-2xl font-semibold text-purple-800 tracking-widest'>Contact</div>
                    <div className='text-lg md:text-xl text-gray-800'>+9779800000000</div>
                    <div className='text-lg md:text-xl text-gray-800'>example@example.com</div>
                    <div className='text-lg md:text-xl text-gray-800'>www.example.com</div>
                    <div className='text-lg md:text-xl text-gray-800'>Panauti-4 KavrePalanchwok Nepal</div>
                </div>

                {/* Newsletter */}
                <div className='flex flex-col gap-y-6 md:gap-y-10'>
                    <div className='text-xl md:text-2xl font-semibold text-purple-800 tracking-widest'>Get Latest Information</div>
                    <div className='flex w-full'>
                        <div className="flex-1">
                            <input
                                className="w-full h-12 bg-gray-100 rounded-l-xl text-base md:text-lg pl-4 placeholder-gray-600"
                                placeholder="Email Address"
                            />
                        </div>
                        <button className='h-12 w-12 flex items-center justify-center bg-purple-800 text-white rounded-r-xl'>
                            <ArrowForwardIcon className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 text-xl md:text-3xl text-gray-800'>
                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <footer>
                        <p>&copy; {currentYear} Jiwan Humagain.</p>
                    </footer>
                    <div className='md:ml-4'>
                        All Rights Reserved
                    </div>
                </div>
                <div className='text-center md:text-right'>Users Terms & Conditions | Privacy Policy</div>
            </div>
        </div>
    )
}