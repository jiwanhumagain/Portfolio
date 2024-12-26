import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function ExperienceContainer({ experienceObjects }) {
    return (
        <>
            {
                experienceObjects.map((experiences, index) => (
                    <div className='flex flex-row '>
                        <div className='h-full w-[70%] flex pt-5'>
                            <div className='flex flex-col gap-y-3 justify-start ml-[6%]'>
                                <div className='font-semibold text-5xl whitespace-nowrap tracking-wider'>{experiences.Name}</div>
                                <div className='text-2xl opacity-70'>{experiences.Des}</div>
                            </div>
                        </div>

                        <div className='h-full w-[30%] flex justify-center pt-5'>
                            <div className='flex flex-row text-2xl justify-center items-center h-3/4 w-2/3  rounded-xl gap-x-5 bg-white'>
                                <div>{experiences.start}</div>
                                <div>-</div>
                                <div>{experiences.end}</div>
                            </div>
                        </div>


                    </div>

                ))
            }
        </>

    )
}

function Container({ type, Icon, objects }) {
    return (
        <div className="h-[600px] w-[800px] bg-gray-200 rounded-3xl flex flex-col gap-y-5 items-center -mt-7">
            <div className="flex flex-row h-[100px] w-full gap-x-5 items-center justify-start pl-9 pt-5">
                <div className="h-20 w-20 rounded-full bg-purple-700 flex items-center justify-center">
                    <Icon className="text-white" fontSize="large" />
                </div>
                <div className="font-bold text-purple-700 text-4xl">
                    {type}
                </div>
            </div>
            <div className='w-[90%] h-[1px] bg-gray-900'></div>
            <div className='h-full w-full flex flex-col gap-y-9'>
                <ExperienceContainer experienceObjects={objects} />
            </div>
            
        </div>
    );
}

export default function Education() {
    const dataEducation = [
        {
            'Name': 'Kathmandu University',
            'Des': 'Bachelors in Computer Engineering',
            'start': '2020',
            'end': '2024'
        },
        {
            'Name': 'Kathmandu University',
            'Des': 'Bachelors in Computer Engineering',
            'start': '2020',
            'end': '2024'
        },
        {
            'Name': 'Kathmandu University',
            'Des': 'Bachelors in Computer Engineering',
            'start': '2020',
            'end': '2024'
        }
    ]
    const dataWork = [
        {
            'Name': 'BackEnd Developer',
            'Des': 'New It',
            'start': '2020',
            'end': '2024'
        },
        {
            'Name': 'Web Developer',
            'Des': 'New It',
            'start': '2020',
            'end': '2024'
        },
        {
            'Name': 'Web Developer',
            'Des': 'New It',
            'start': '2020',
            'end': '2024'
        }
    ]
    return (
        <div className="h-full w-full bg-white pb-32">
            <div className="flex flex-col">
                <div className="h-full w-full flex flex-col gap-y-5 items-center">
                    <div className="top-[50px] text-black font-sans text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Education & Work</span>
                    </div>
                    <div className="relative w-screen h-[150px] overflow-hidden">
                        <div className="absolute left-[-5%] w-[200%]">
                            <span className="font-enfonix font-extrabold text-gray-600 text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                                Education & Work Experience
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row top-[-120px] relative text-7xl gap-x-5 tracking-widest">
                        <span>My</span>
                        <span className="text-purple-700">Education</span>
                        <span>&</span>
                        <span className="text-purple-700">Work Experience</span>
                    </div>
                </div>
                <div className="flex items-center justify-around h-full w-full">
                    <Container type="Education" Icon={SchoolIcon} objects={dataEducation} />
                    <Container type="Work Experience" Icon={WorkIcon} objects={dataWork} />
                </div>
                
            </div>
        </div>
    );
}
