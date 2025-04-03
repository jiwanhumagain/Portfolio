import React from 'react'
import IntroNames from '../../introName'
import ProjectContainer from '../../projectContainer'

let projectData = [
    {
        'id': '0',
        'skills': ['React', 'Node.js', 'JWT'],
        'title': "Atthire - E-commerce Platform for Clothes Rental",
        'desc': "Developed a full-stack eCommerce platform for clothing rentals, featuring a responsive React.js frontend and secure Node.js/Express.js backend. Integrated Stripe payments and JWT authentication, with optimized search and filtering for seamless user experience.",
        'img': '/assets/atthire/atthire1.png'
    },
    {
        'id': '1',
        'skills': ['Flask', 'AI/ML', 'RESTful API'],
        'title': "MedScanAI - AI-driven Medical Report Analyzer",
        'desc': "Created an AI-powered tool for extracting and classifying key medical information from reports. Built with Flask and machine learning models to identify medicines, symptoms, and diseases. Integrated RESTful APIs for seamless communication and real-time processing.",
        'img': '/assets/project.png'
    },
    {
        'id': '2',
        'skills': ['Blockchain', 'Solidity', 'React'],
        'title': "e-Lect - Decentralized Voting System",
        'desc': "Developed a blockchain-based voting platform to ensure secure, transparent, and tamper-proof elections. Built with Solidity smart contracts and a React frontend for real-time voting, ensuring anonymity while maintaining verifiability.",
        'img': '/assets/project.png'
    },
    {
        'id': '3',
        'skills': ['Flutter', 'Firebase', 'Google Maps API'],
        'title': "Ridify - Ride-Sharing and Car Rental App",
        'desc': "Built a modern ride-sharing and car rental app with real-time ride tracking and navigation. Created with Flutter for cross-platform support and integrated Firebase for real-time data sync, along with Google Maps for accurate route navigation.",
        'img': '/assets/project.png'
    },
    {
        'id': '4',
        'skills': ['Flutter', 'Firebase', 'AI Chatbot'],
        'title': "AidWell - AI-powered Healthcare Assistance App",
        'desc': "Developed a healthcare app offering virtual doctor consultations and AI-powered medical advice. Built using Flutter with Firebase for data storage and secure user authentication, along with an AI chatbot to assist with symptom checking and medical queries.",
        'img': '/assets/project.png'
    }
];


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
                <ProjectContainer direction={'row'} data={projectData[0]}/>
                <ProjectContainer direction={'row-reverse'} data={projectData[1]}/>
                <ProjectContainer direction={'row'} data={projectData[2]}/>
                <ProjectContainer direction={'row-reverse'} data={projectData[3]}/>
                <ProjectContainer direction={'row'} data={projectData[4]}/>
                {/* <ProjectContainer direction={'row-reverse'} data={projectData[1]}/> */}
                
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
