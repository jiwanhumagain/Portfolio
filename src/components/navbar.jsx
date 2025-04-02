'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropdownFocus, setDropdownFocus] = useState(false);
  const [dropdownActiveIndex, setDropdownActiveIndex] = useState(null);

  const router = useRouter();
  const handleHover = (index) => {
    setActiveIndex(index);
    if (index === 2) {
      setDropdownFocus(!dropdownFocus);
    } else {
      setDropdownFocus(false);
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setDropdownFocus(!dropdownFocus);
  };

  const handelClick = (path) => {
    if (path === 'Home') {
      router.push('/')
    } else {
      const formattedPath = path.replace(/\s+/g, '');
      router.push(`/${formattedPath}`);
    }
  }

  const navbarElements = ['Home', 'Services', 'About', 'Projects', 'Pricing', 'Blogs'];
  const hamburgerNavElements = ['Home', 'Services', 'About Me', 'Pricing', 'Blogs', 'Projects', 'Contact'];
  const dropdownItems = ['About Me', 'Pricing', 'Blogs'];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="h-36 w-full flex items-center flex-row gap-9 px-12 justify-between md:gap-4 md:px-7">
      {/* Logo */}
      <div>
        <li className="list-none font-serif font-extrabold lg:text-5xl flex flex-row gap-1 md:text-xl sm:text-5xl [@media(prefers-color-scheme:dark)]:text-white">
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
            className={`relative myId ${
              activeIndex === index
                ? 'text-blue-500 underline decoration-2 underline-offset-4'
                : '[@media(prefers-color-scheme:dark)]:text-white text-black'
            }`}
            onClick={() => handelClick(item)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(index)}
          >
            <a className="cursor-pointer">{item}</a>
          </li>
        ))}
      </div>

      {/* Chat Button */}
      <button 
        className="hidden bg-violet-700 text-white md:flex box-border border-solid border-2 rounded px-9 py-3 text-3xl md:px-5 md:py-2 
        [@media(prefers-color-scheme:dark)]:text-white [@media(prefers-color-scheme:dark)]:border-white" 
        onClick={() => { handelClick('Contact') }}
      >
        Contact
      </button>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          id="hamburgerButton"
          className="h-8 w-10 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={open ? { backgroundColor: "white", rotate: -45 } : { rotate: 0 }}
            className="w-10 h-1 bg-black [@media(prefers-color-scheme:dark)]:bg-white rounded origin-right"
          ></motion.div>
          <motion.div
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-10 h-1 bg-black [@media(prefers-color-scheme:dark)]:bg-white rounded"
          ></motion.div>
          <motion.div
            animate={open ? { backgroundColor: "white", rotate: 45 } : { rotate: 0 }}
            className="w-10 h-1 bg-black [@media(prefers-color-scheme:dark)]:bg-white rounded origin-right"
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
          {hamburgerNavElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="font-semibold cursor-pointer"
              onClick={() => {
                handelClick(item);
                setOpen(false);
              }}
            >
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}