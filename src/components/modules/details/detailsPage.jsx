'use client'
import React, { useEffect, useState, Suspense } from 'react';
import IntroNames from '../../introName';
import { useSearchParams } from 'next/navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';


const projectData = [
    {
        id: '0',
        title: "Atthire - E-commerce Platform for Clothes Rental",
        subtitle: "A full-stack platform for renting clothes with secure payments and optimized search.",
        solution_steps: [
            "Implemented a dynamic inventory system with periodic updates from the server.",
            "Integrated Stripe for seamless and secure transactions.",
            "Developed an advanced search and filtering system using MongoDB indexing."
        ],
        project_category:['Web Design','Personal Project','5 months','Nepal'],
        solution: "The solution involved implementing a dynamic inventory system that regularly updates from the server to ensure product availability is accurate. To ensure secure payments, we integrated Stripe, which handled the financial transactions smoothly. An advanced search and filtering system was developed using MongoDB indexing, which significantly improved the speed and accuracy of product searches, enhancing the overall user experience.",
        desc: "Atthire is a full-stack eCommerce platform designed for renting clothes. The platform provides users with a seamless experience to browse, rent, and return clothing items. The frontend is built using React.js, ensuring a modern and responsive UI, while the backend is powered by Node.js and Express.js. Secure transactions are handled using Stripe, and JWT authentication is implemented for user verification. Additionally, an optimized search and filtering system allows users to find products quickly. The platform also features an admin panel for managing inventory, orders, and user activity.",
        challenges: "Handling real-time inventory updates, ensuring secure payments, and creating an efficient search and filter system were key challenges.",
        impact: "The platform enables a convenient and sustainable way for users to rent clothing items instead of buying, promoting a circular economy.",
        img1: '/assets/atthire/atthire1.png',
        img2: '/assets/atthire/atthire2.png',
        img3: '/assets/atthire/atthire3.png'
    },
    {
        id: '1',
        title: "MedScanAI - AI-driven Medical Report Analyzer",
        subtitle: "AI-powered tool to extract and classify key medical information from reports.",
        solution_steps: [
            "Trained AI models using a large dataset of medical terms and prescriptions.",
            "Implemented NLP techniques to extract relevant information from medical reports.",
            "Integrated RESTful APIs for real-time processing and efficient communication."
        ],

        project_category:['AI Project','Personal Project','5 months','Nepal'],
        solution: "The solution focused on training AI models with a comprehensive medical dataset to improve accuracy. Natural Language Processing (NLP) techniques were applied to extract relevant health information from medical reports. The backend was designed using Flask and integrated with RESTful APIs to enable real-time data processing, making the system efficient and responsive in analyzing medical reports.",
        desc: "MedScanAI is an AI-driven system designed to analyze medical reports and extract key health-related information. It helps patients and doctors by identifying medicines, symptoms, and diseases mentioned in reports. The system is built using Flask and machine learning models trained on medical datasets. It integrates RESTful APIs for smooth data processing and communication between the backend and frontend. The AI model achieves an accuracy of 89% in identifying relevant medical terms, making it a useful tool for quick health assessments.",
        challenges: "Developing a reliable AI model with high accuracy and handling complex medical terminology were major challenges.",
        impact: "The system assists both patients and healthcare professionals by quickly analyzing medical documents, reducing the time needed for manual review.",
        img1: '/assets/medscan/medscan1.png',
        img2: '/assets/medscan/medscan2.png',
        img3: '/assets/medscan/medscan3.png'
    },
    {
        id: '2',
        title: "e-Lect - Decentralized Voting System",
        subtitle: "A blockchain-based voting platform ensuring transparency and security.",
        solution_steps: [
            "Implemented blockchain smart contracts for transparent and immutable voting records.",
            "Used cryptographic hashing to prevent voter identity exposure.",
            "Developed a user-friendly React interface for smooth interaction with the blockchain network."
        ],

        project_category:['Web Design','Personal Project','5 months','Nepal'],
        solution: "The solution leverages blockchain technology to ensure secure, transparent, and immutable voting records. Smart contracts were deployed to guarantee that votes are stored in a tamper-proof ledger. To protect voter privacy, cryptographic hashing was used to anonymize voter identities. The frontend was built using React, offering an intuitive and user-friendly interface for interacting with the blockchain network.",
        desc: "e-Lect is a secure and decentralized online voting system powered by blockchain technology. It ensures transparency and integrity in elections by preventing data tampering and fraud. Built with Solidity and Hardhat, the system enables voters to securely cast their votes, which are stored in an immutable blockchain ledger. The React-based frontend provides a user-friendly experience, allowing users to register, vote, and verify election results in real-time. The system ensures anonymity while maintaining verifiability, making it a reliable digital voting solution.",
        challenges: "Ensuring security, preventing double voting, and maintaining transparency while keeping voter identities anonymous.",
        impact: "The project enhances electoral transparency and security, reducing fraud risks and increasing voter confidence in online elections.",
        img1: '/assets/elect/elect1.png',
        img2: '/assets/elect/elect2.jpg',
        img3: '/assets/elect/elect3.jpg'
    },
    {
        id: '3',
        title: "Ridify - Ride-Sharing and Car Rental App",
        subtitle: "A Flutter-based ride-sharing app with real-time navigation and car rental options.",
        solution_steps: [
            "Integrated Google Maps API for real-time location tracking and navigation.",
            "Used Firebase for efficient ride-matching and real-time database updates.",
            "Implemented a secure authentication system to verify users and drivers."
        ],

        project_category:['App Design','Personal Project','5 months','Nepal'],
        solution: "The solution implemented Google Maps API to provide real-time location tracking and navigation, ensuring an efficient and accurate route calculation for rides. Firebase was used for real-time data synchronization, making the ride-matching process quick and effective. A secure authentication system was incorporated to ensure the safety and verification of users and drivers, enhancing overall trust in the platform.",
        desc: "Ridify is a modern ride-sharing and car rental application that provides users with multiple options for commuting. It allows users to book rides in real-time, schedule future rides, or rent a car for personal use. Built using Flutter, it offers a seamless cross-platform experience on both Android and iOS. The app integrates Firebase for real-time data synchronization and Google Maps API for navigation and location tracking. Advanced features such as fare estimation, driver rating, and ride history enhance the user experience.",
        challenges: "Implementing real-time ride tracking, optimizing route calculations, and ensuring smooth user experience.",
        impact: "The app provides a convenient and affordable transportation solution, reducing travel time and increasing accessibility for users.",
        img1: '/assets/ridify/ridify1.png',
        img2: '/assets/ridify/ridify2.png',
        img3: '/assets/ridify/ridify3.png'
    },
    {
        id: '4',
        title: "AidWell - AI-powered Healthcare Assistance App",
        subtitle: "A Flutter app for virtual doctor consultations and AI chatbot support.",
        solution_steps: [
            "Integrated the Gemini API for an AI-powered chatbot with medical knowledge.",
            "Used Firebase for secure authentication and encrypted communication.",
            "Developed an easy-to-use interface with real-time doctor consultation options."
        ],

        project_category:['App Design','Personal Project','5 months','Nepal'],
        solution: "The solution involved integrating the Gemini API for an AI-powered chatbot capable of providing medical advice based on user input. Firebase was used to ensure secure user authentication and encrypted communication between patients and doctors, ensuring privacy. The interface was designed to be user-friendly, providing real-time doctor consultations via video calls to bridge the healthcare gap, especially in underserved areas.",
        desc: "AidWell is a healthcare application designed to provide instant medical assistance through AI-driven chatbots and virtual doctor consultations. Built using Flutter, it offers a cross-platform experience for mobile users. The app includes features such as symptom checking, appointment scheduling, and real-time video consultations with healthcare professionals. It also integrates an AI-powered chatbot that provides medical advice based on user queries. Firebase is used for data storage and authentication, ensuring a secure and seamless experience for users.",
        challenges: "Providing accurate AI-based medical responses and ensuring secure communication between doctors and patients.",
        impact: "The app improves healthcare accessibility by offering instant medical guidance and remote doctor consultations, especially in remote areas.",
        img1: '/assets/comingsoon.jpeg',
        img2: '/assets/comingsoon.jpeg',
        img3: '/assets/comingsoon.jpeg'
    }
];

function DetailsPage() {
    return (
        <div>
            <IntroNames name={'Projects'} description={'Projects Details'} />
            <Suspense fallback={<div>Loading...</div>}>
                <DetailPageContainer />
            </Suspense>
        </div>
    );
}

export default DetailsPage;

let DetailPageContainer = () => {
    const [darkMode, setDarkMode] = useState(false);
    const searchParams = useSearchParams();
    const projectId = searchParams.get('id');
    const selectedProject = projectData.find(item => item.id === projectId);
    const router = useRouter();


    // Check system preference for dark mode
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }

        // Listen for changes in system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className="h-full w-full bg-purple-600 relative">
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-center pt-12 px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="aspect-video w-full sm:w-1/2 flex flex-col gap-y-3 relative mb-4 items-center justify-center border-4 rounded-2xl">
                    <img
                        src={selectedProject.img1}
                        alt="Hero jiwan"
                        className="h-full w-full rounded-xl object-contain grayscale hover:grayscale-0"
                    />

                </div>
            </div>

            {/* Content Section */}
            <div className="md:pb-28 px-4 md:px-28 dark:bg-gray-900 min-h-screen p-8 ">
                <div className='w-full flex justify-between'>
                    <div className='w-[60%] text-white'>
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4">
                                <span className="text-green-300">{selectedProject.title}</span>
                            </h1>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <span className="text-green-300 dark:text-green-400 text-4xl">✔</span>
                                </div>

                                <div className=''>
                                    <p className="text-2xl font-semibold">
                                        {selectedProject.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Subtext */}
                        <div className="mb-8">
                            <p className="mb-6 text-2xl font-semibold">
                                {selectedProject.desc}
                            </p>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'bg-green-400' : 'bg-green-300'} rounded-3xl p-6 w-[25%] hidden lg:block`}>

                        <div className="mb-4">
                            <p className="text-black font-medium">Project Category :</p>
                            <h3 className="text-2xl font-bold text-black">{selectedProject.project_category[0]}</h3>
                        </div>

                        <div className="mb-4">
                            <p className="text-black font-medium">Client :</p>
                            <h3 className="text-2xl font-bold text-black">{selectedProject.project_category[1]}</h3>
                        </div>

                        <div className="mb-4">
                            <p className="text-black font-medium">Duration :</p>
                            <h3 className="text-2xl font-bold text-black">{selectedProject.project_category[2]}</h3>
                        </div>

                        <div>
                            <p className="text-black font-medium">Country:</p>
                            <h3 className="text-2xl font-bold text-black">{selectedProject.project_category[3]}</h3>
                        </div>
                    </div>
                </div>
                {/* Sections */}
                <h2 className="mt-8 text-3xl font-bold text-white">The Challenge</h2>
                <p className="mt-2 text-2xl text-white">{selectedProject.challenges}</p>

                <h2 className="mt-8 text-3xl font-bold text-white">The Solution</h2>
                <p className="mt-2 text-2xl text-white">{selectedProject.solution}</p>

                {/* Bullet Points */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-2xl text-white">
                    {selectedProject.solution_steps.map((item, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <span className="text-green-300 dark:text-green-400">✔</span> {item}
                        </div>
                    ))}

                </div>
                <div className="flex flex-col sm:flex-row gap-6 my-12">
                    {/* First Image Block */}
                    <div className={`${darkMode ? 'bg-indigo-800' : 'bg-white'} rounded-3xl p-4 w-full sm:w-1/2 h-[500px] flex justify-center items-center`}>
                        <img
                            src={selectedProject.img2}
                            alt="Podcast App UI Screens"
                            className="w-full h-full object-contain rounded-2xl"
                        />
                    </div>

                    {/* Second Image Block */}
                    <div className={`${darkMode ? 'bg-indigo-800' : 'bg-white'} rounded-3xl p-4 w-full sm:w-1/2 h-[500px] flex justify-center items-center`}>
                        <img
                            src={selectedProject.img3}
                            alt="Podcast App Interface"
                            className="w-full h-full object-contain rounded-2xl"
                        />
                    </div>
                </div>

                {/* The Impact Section - As shown in the new reference image */}
                <div className="mt-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">The Impact</h2>
                    <p className="text-2xl">
                        {selectedProject.impact}
                    </p>
                </div>



            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end pb-8">
                <div className="h-14 sm:h-16 md:h-20 w-full sm:w-96 bg-white rounded-full flex items-center gap-3 sm:gap-5 justify-end hover:cursor-pointer" onClick={() => { router.push('\Projects') }}>
                    <div className="px-3 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex justify-center m-2 items-center rounded-full bg-purple-700">
                        <ArrowForwardIcon className="text-white" />
                    </div>
                    <div className="flex-1 sm:w-72 h-full rounded-full bg-green-500 flex justify-center items-center">
                        <span className="text-black font-semibold text-lg sm:text-xl md:text-2xl">View Other Projects</span>
                    </div>
                </div>
            </div>

        </div>
    );
};
