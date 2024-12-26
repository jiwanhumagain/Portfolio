import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogsItems = [
    {
        'img': '/assets/hero.png',
        'buttomTitle': 'Hero Design',
        'title': 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        'author': 'Jiwan Humagain',
        'date': '2024-12-26',
    },
    {
        'img': '/assets/image.png',
        'buttomTitle': 'Hero Design',
        'title': 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        'author': 'Jiwan Humagain',
        'date': '2024-12-26',
    },
    {
        'img': '/assets/app_design.png',
        'buttomTitle': 'Hero Design',
        'title': 'Design Unraveled: Behind the Scenes of Ui/UX Magic',
        'author': 'Jiwan Humagain',
        'date': '2024-12-26',
    }
];

function BlogPosts() {
    return (
        <>
            {
                BlogsItems.map((items,index) => (
                    <div className="h-full w-[30%]  flex flex-col gap-y-8 " key={index}>
                        <div className="h-[400px] w-full rounded-3xl overflow-hidden">
                            <img
                                src={`${items.img}`}
                                alt="Blog Post"
                                className="h-full w-full object-cover grayscale"
                            />
                        </div>
                        <div className='h-12 w-40 px-2 rounded-full bg-green-500 flex items-center justify-center text-xl text-gray-800'>
                            {items.buttomTitle}
                        </div>
                        <div className='font-bold text-3xl tracking-wider'>
                            {items.title}
                        </div>

                        <div className='flex justify-start gap-x-9 items-center'>
                            <div className='flex gap-x-3 justify-center items-center'>
                                <div className='h-5 w-5 bg-purple-800 rounded-full'></div>
                                <div className='text-xl font-medium'>
                                    {items.author}
                                </div>
                            </div>
                            <div className='flex gap-x-3 justify-center items-center'>
                                <div className='h-5 w-5 bg-purple-800 rounded-full'></div>

                                <div className='text-2xl font-medium'>
                                    {items.date}
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    );
}

export default function Blogs() {
    return (
        <div className="flex flex-col h-full w-full bg-white pb-28 pl-28 pt-36 gap-y-20">
          
            <div className="flex h-[20%] items-center">
                <div className="h-full w-full flex flex-col gap-y-6">
                    <div className="text-black font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Blogs</span>
                    </div>
                    <div className="absolute">
                        <span className="font-enfonix font-extrabold text-gray-600 text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            My Blog Post
                        </span>
                    </div>
                    <div className="text-black font-sans text-7xl flex font-semibold">
                        <div className="text-black font-sans text-7xl flex flex-col font-semibold">
                            <span className="tracking-widest white flex flex-row">From My <div className="text-purple-700 pl-4">Blog </div></span>
                            <div className="text-purple-700">Post</div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-1/2 flex items-center justify-end mr-[5%]">
                    <div className="h-20 w-96 bg-black rounded-full flex items-center gap-5 justify-end">
                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                            <ArrowForwardIcon className="text-black" fontSize="large" />
                        </div>
                        <div className="w-72 h-full rounded-full bg-green-500 flex justify-center items-center pl-4">
                            <span className="text-black font-semibold text-2xl">View All Blogs</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" h-[80%] flex gap-x-[2%] ">
                <BlogPosts />

            </div>
        </div>
    );
}
