'use client';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
   const [activeIndex, setActiveIndex] = useState(null);
   const [open, setOpen] = useState(false);
   const [dropdownFocus, setDropdownFocus] = useState(false);
   const [dropdownActiveIndex, setDropdownActiveIndex] = useState(null);

   const handleClick = (index) => {
      setActiveIndex(index);
      if (index === 2) { // Index 2 corresponds to "About"
         setDropdownFocus(!dropdownFocus);
      } else {
         setDropdownFocus(false);
      }
   };

   const navbarElements = ['Home', 'Services', 'About', 'Works', 'Projects', 'Contact'];

   useEffect(() => {
      // Toggle body scroll based on the menu state
      if (open) {
         document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
         document.body.style.overflow = ''; // Re-enable scrolling
      }

      return () => {
         document.body.style.overflow = ''; // Cleanup on unmount
      };
   }, [open]);

   return (
      <div className="h-36 w-full flex items-center flex-row gap-9 pl-12 pr-12 justify-between md:gap-4 md:px-7 ">

         {/* Logo */}
         <div>
            <li className="list-none font-serif font-extrabold lg:text-5xl flex flex-row gap-1 md:text-xl sm:text-5xl">
               Jiwan<h1 className="text-red-700"> . </h1>
            </li>
         </div>

         {/* Navbar Elements */}
         <div
            className="flex-row list-none lg:gap-9 lg:text-3xl md:gap-3 md:text-xl hidden md:flex"
            id="navbarElement"
         >
            {navbarElements.map((item, index) => (
               <li
                  key={index}
                  className={`relative myId ${activeIndex === index
                        ? 'text-blue-500 underline decoration-2 underline-offset-4'
                        : 'text-black'
                     }`}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => index === 2 && setDropdownFocus(true)} // Keep dropdown open on hover
                  onMouseLeave={() => index === 2 && !dropdownActiveIndex && setDropdownFocus(false)}
               >
                  <a href="#">{item}</a>

                  {/* Dropdown for "About" */}
                  {index === 2 && dropdownFocus && (
                     <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-9 -left-4 bg-white shadow-md rounded-md p-4 z-50"
                        onMouseLeave={() => setDropdownFocus(false)} // Close dropdown when leaving
                     >
                        <ul className="flex flex-col list-none gap-2 lg:text-3xl md:text-xl">
                           {['About Me', 'Pricing', 'Blogs'].map((dropdownItem, dropdownIndex) => (
                              <li
                                 key={dropdownIndex}
                                 className={`hover:text-blue-500 ${dropdownActiveIndex === dropdownIndex ? 'text-blue-500' : 'text-black'
                                    }`}
                                 onClick={() => setDropdownActiveIndex(dropdownIndex)}

                                 onMouseLeave={() => setDropdownActiveIndex(null)}
                              >
                                 <a href="#" className="whitespace-nowrap">{dropdownItem}</a>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  )}
               </li>
            ))}
         </div>

         {/* Chat Button - Hidden on Small Screens */}
         <div className="hidden md:flex box-border border-solid border-2 rounded pl-9 pr-9 pt-3 pb-3 text-lg md:pl-5 md:pr-5 md:pt-2 md:pb-2">
            Let's Chat
         </div>

         {/* Hamburger Menu - Visible on Small Screens */}
         <div className="md:hidden">
                <button id="hamburgerButton" className="h-8 w-10 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    <motion.div animate={open ? { backgroundColor: "white", rotate: -45, } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>
                    <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className={("w-10 h-1 bg-black rounded")}></motion.div>
                    <motion.div animate={open ? { backgroundColor: "white", rotate: 45 } : { rotate: 0 }} className={("w-10 h-1 bg-black rounded origin-right")}></motion.div>
                </button>

            </div>
         {/* Dropdown Menu - Visible when Hamburger is Open */}
         {open && (
            <motion.div animate={{ x: [70, 0] }} transition={{ when: "beforeChildren" }} className="md:hidden fixed text-4xl top-0 left-0 flex flex-col h-screen w-screen bg-black text-white items-center justify-center gap-14 z-40">
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="">
                  <a href="/" className="font-semibold ">Home
                  </a>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-semibold">
                  <a href="/#">
                     Services
                  </a>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="font-semibold"><a href="/#">About</a></motion.div>
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="font-semibold"><a href="/#">Works</a></motion.div>
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="font-semibold"><a href="/#">Projects</a></motion.div>
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="font-semibold"><a href="/#">Pricing</a></motion.div>
               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="font-semibold"><a href="/#">Blogs</a></motion.div>



               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} className="font-semibold"><a href="/#">Contact</a></motion.div>

            </motion.div>
         )}
      </div>
   );
}
