'use client'
import { useState } from 'react';
import { motion } from "framer-motion"

export default function Navbar() {
   const [activeIndex, setActiveIndex] = useState(null);
   const [open, setOpen] = useState(false);

   const handleClick = (index) => {
      setActiveIndex(index);
   };
   const navbarElements = ['Home','Services', 'About',  'Works', 'Projects', 'Pricing', 'Contact', 'Blogs' ];
   return (
      <div className="lg:h-36 w-full items-center flex-row flex gap-9 pl-12 pr-12 justify-around md:gap-4 md:pl-7 md:pr-7 ">
         <div className="">
            <li className="list-none font-serif font-extrabold text-5xl flex flex-row gap-1 md:text-3xl">Jiwan<h1 className="text-red-700"> . </h1></li>
         </div>
         <div className="flex flex-row list-none gap-14 text-3xl md:gap-8 md:text-2xl " id="navbarElement">
            {navbarElements.map((items, index) => (
               <li key={index} className={`myId ${activeIndex === index ? 'text-blue-500 underline decoration-2 underline-offset-4' : 'text-black'}`} onClick={() => handleClick(index)}><a href="#">{items}</a></li>
            ))}

         </div>
         <div className="box-border border-solid border-2 rounded pl-9 pr-9 pt-3 pb-3 text-lg md:pl-5 md:pr-5 md:pt-2 md:pb-2">
            Let's Chat
         </div>
         {/* <div className='md:hidden'>
            <button className='h-8 w-10 flex flex-col justify-between z-50 relative' onClick={(() => setOpen(!open))}>
               <motion.div animate={open ? { backgroundColor: "black", rotate: -45, } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>
               <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className={("w-10 h-1 bg-black rounded")}></motion.div>
               <motion.div animate={open ? { backgroundColor: "black", rotate: 45 } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>

            </button>
         </div> */}

      </div>


   )

}
// 'use client'
// import { useState } from 'react';
// import { motion } from "framer-motion";

// export default function Navbar() {
//    const [activeIndex, setActiveIndex] = useState(null);
//    const [open, setOpen] = useState(false);

//    const handleClick = (index) => {
//       setActiveIndex(index);
//    };

//    const navbarElements = ['Home', 'Services', 'About', 'Works', 'Projects', 'Pricing', 'Contact', 'Blogs'];

//    return (
//       <div className="lg:h-36 w-full flex items-center flex-row gap-9 pl-12 pr-12 justify-between md:gap-4 md:pl-7 md:pr-7 s">
//          {/* Logo */}
//          <div>
//             <li className="list-none font-serif font-extrabold text-5xl flex flex-row gap-1 md:text-xl">Jiwan<h1 className="text-red-700"> . </h1></li>
//          </div>

//          {/* Navbar Elements - Hidden on Small Screens */}
//          <div
//             className={`flex flex-row list-none gap-14 text-3xl md:gap-3 md:text-xl hidden md:flex`}
//             id="navbarElement"
//          >
//             {navbarElements.map((items, index) => (
//                <li
//                   key={index}
//                   className={`myId ${activeIndex === index ? 'text-blue-500 underline decoration-2 underline-offset-4' : 'text-black'}`}
//                   onClick={() => handleClick(index)}
//                >
//                   <a href="#">{items}</a>
//                </li>
//             ))}
//          </div>

//          {/* Chat Button - Hidden on Small Screens */}
//          <div className="hidden md:flex box-border border-solid border-2 rounded pl-9 pr-9 pt-3 pb-3 text-lg md:text-sm md:pl-5 md:pr-5 md:pt-2 md:pb-2">
//             Let's Chat
//          </div>

//          {/* Hamburger Menu - Visible on Small Screens */}
//          <div className="md:hidden flex">
//             <button
//                className="h-8 w-10 flex flex-col justify-between z-50 relative"
//                onClick={() => setOpen(!open)}
//             >
//                <motion.div
//                   animate={open ? { backgroundColor: "black", rotate: -45 } : { rotate: 0 }}
//                   className="w-10 h-1 bg-black rounded origin-right"
//                ></motion.div>
//                <motion.div
//                   animate={open ? { opacity: 0 } : { opacity: 1 }}
//                   className="w-10 h-1 bg-black rounded"
//                ></motion.div>
//                <motion.div
//                   animate={open ? { backgroundColor: "black", rotate: 45 } : { rotate: 0 }}
//                   className="w-10 h-1 bg-black rounded origin-right"
//                ></motion.div>
//             </button>
//          </div>

//          {/* Dropdown Menu - Visible when Hamburger is Open */}
//          {open && (
//             <motion.div
//                initial={{ opacity: 0, y: -10 }}
//                animate={{ opacity: 1, y: 0 }}
//                className="absolute top-16 right-12 bg-white shadow-md rounded-md p-4 md:w-64"
//             >
//                <ul className="flex flex-col list-none gap-4 text-lg">
//                   {navbarElements.map((items, index) => (
//                      <li
//                         key={index}
//                         className={`myId ${activeIndex === index ? 'text-blue-500 underline decoration-2 underline-offset-4' : 'text-black'}`}
//                         onClick={() => handleClick(index)}
//                      >
//                         <a href="#">{items}</a>
//                      </li>
//                   ))}
//                </ul>
//             </motion.div>
//          )}
//       </div>
//    );
// }
