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
    <div className="h-36 w-full flex items-center flex-row gap-9 px-12 justify-between md:gap-4 md:px-7">
      {/* Logo */}
      <div>
        <li className="list-none font-serif font-extrabold lg:text-5xl flex flex-row gap-1 md:text-xl sm:text-5xl">
          Jiwan<h1 className="text-red-700"> . </h1>
        </li>
      </div>

      {/* Navbar Elements */}
      <div
        className="hidden md:flex flex-row list-none lg:gap-9 lg:text-3xl md:gap-3 md:text-xl"
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

      {/* Chat Button */}
      <div className="hidden md:flex box-border border-solid border-2 rounded px-9 py-3 text-lg md:px-5 md:py-2">
        Let's Chat
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          id="hamburgerButton"
          className="h-8 w-10 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={open ? { backgroundColor: "white", rotate: -45 } : { rotate: 0 }}
            className="w-10 h-1 bg-black rounded origin-right"
          ></motion.div>
          <motion.div
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? { backgroundColor: "white", rotate: 45 } : { rotate: 0 }}
            className="w-10 h-1 bg-black rounded origin-right"
          ></motion.div>
        </button>
      </div>

      {/* Dropdown Menu for Hamburger */}
      {open && (
        <motion.div
          animate={{ x: [70, 0] }}
          transition={{ when: "beforeChildren" }}
          className="md:hidden fixed text-4xl top-0 left-0 flex flex-col h-screen w-screen bg-black text-white items-center justify-center gap-14 z-40"
        >
          {navbarElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="font-semibold"
            >
              <a href="#">{item}</a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <span className="text-2xl font-bold cursor-pointer">Logo</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             <Link href="/">
//               <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer">
//                 Home
//               </span>
//             </Link>
//             <Link href="/about">
//               <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer">
//                 About
//               </span>
//             </Link>
//             <Link href="/services">
//               <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer">
//                 Services
//               </span>
//             </Link>
//             <Link href="/contact">
//               <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer">
//                 Contact
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-700">
//           <Link href="/">
//             <span className="block px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">
//               Home
//             </span>
//           </Link>
//           <Link href="/about">
//             <span className="block px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">
//               About
//             </span>
//           </Link>
//           <Link href="/services">
//             <span className="block px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">
//               Services
//             </span>
//           </Link>
//           <Link href="/contact">
//             <span className="block px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer">
//               Contact
//             </span>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
