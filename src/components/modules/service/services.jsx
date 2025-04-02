'use client'
import IntroNames from "../../introName";
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const servicesItems = [
  {
    'img': '/assets/html.png',
    'title': 'HTML/CSS',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'img': '/assets/JavaScript.png',
    'title': 'Javascript',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'img': '/assets/react.png',
    'title': 'React.js',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'img': '/assets/node.png',
    'title': 'Node.js',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'img': '/assets/flutter.png',
    'title': 'Flutter',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'img': '/assets/mysql.jpeg',
    'title': 'MySQL',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const ServiceRoundedContainer = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-y-8 max-w-[1400px] mx-auto">
      {servicesItems.map((items, index) => (
        <div
          key={index}
          className="rounded-full bg-purple-500 hover:bg-white pt-10 pb-10 h-[500px] w-[350px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[550px] mx-auto flex flex-col items-center justify-start gap-y-10 text-gray-50 hover:text-black"
        >
          <div className="h-[150px] w-[150px] bg-purple-200 rounded-full flex items-center justify-center overflow-hidden">
            <img src={items.img} className="h-full w-full object-cover" />
          </div>

          <div className="text-5xl font-bold tracking-widest">
            {items.title}
          </div>
          <div className="text-xl font-medium tracking-wide px-8">
            {items.desc}
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <div className="text-xl">Learn More</div>
            <ArrowForwardIcon fontSize="large" />
          </div>
        </div>
      ))}
    </div>
  );
};

const ServiceContainer = () => {
  return (
    <div className="h-full w-full bg-purple-600 relative">
      <div className="flex lg:flex-col xl:flex-col md:flex-col justify-center items-center flex-row pt-12 sm:pt-16 md:pt-24 lg:pt-36 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full sm:w-1/2 flex flex-col gap-y-3 relative mb-8 items-center justify-center">
          <div className="text-white font-sans text-xl sm:text-2xl md:text-3xl flex items-center font-medium tracking-wide">
            <span>-</span>
            <span className="ml-2">Services</span>
          </div>
          <div className="absolute left-[20%] w-full overflow-hidden">
            <span className="font-enfonix font-extrabold text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation block whitespace-nowrap">
              SERVICES
            </span>
          </div>
          <div className="text-white font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl flex flex-wrap font-semibold items-center gap-2 sm:gap-4 mt-4">
            <span>My</span>
            <span className="text-green-500">Services</span>
          </div>
        </div>
        <div className="pt-10 pb-10 w-full flex flex-col sm:items-center">
          <ServiceRoundedContainer />
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <IntroNames name={'Services'} description={'My Services'} />
      <ServiceContainer />

    </>
  );
}
