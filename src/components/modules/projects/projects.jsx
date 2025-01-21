import React from 'react'
import IntroNames from '../../introName'
import ProjectContainer from '../../projectContainer'


const ProjectInfoContainer=()=>{
  return(
    <div className="w-full bg-violet-600 relative pb-16 sm:pb-24 md:pb-32">
              
                <div className="flex flex-col items-center w-full gap-y-3 relative mb-8 lg:mb-0">
                    <div className="text-white font-sans text-xl sm:text-2xl md:text-3xl flex relative font-medium tracking-wide">
                        <span>-</span>
                        <span className="ml-2">Projects</span>
                    </div>
                    <div className="absolute top-0 flex items-center justify-center w-full overflow-hidden">
                        <span className="whitespace-nowrap font-enfonix font-extrabold text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation">
                            Latest Projects
                        </span>
                    </div>
                    <div className="text-white font-sans text-3xl sm:text-5xl md:text-7xl flex flex-col sm:flex-row font-semibold gap-2 sm:gap-4 mt-6">
                        <span>My</span>
                        <span className="text-green-500">Latest Projects</span>
                    </div>
                </div>

                
            {/* Projects Container */}
            <div className='flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 mt-8 sm:mt-12 md:mt-16'>
                <ProjectContainer direction={'row'} />
                <ProjectContainer direction={'row-reverse'} />
                <ProjectContainer direction={'row'} />
                <ProjectContainer direction={'row-reverse'} />
                <ProjectContainer direction={'row'} />
                <ProjectContainer direction={'row-reverse'} />
                
            </div>
        </div>
  )
}

export default function ProjectsPage() {
  return (
    <div>
       <IntroNames name={'Projects'} description={'My Latest Projects'}/>
        <ProjectInfoContainer/>
    </div>
  )
}
