"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center relative z-10">
          <Image
                src="/logo.png"
                alt="Webworks logo"
                width={130}    
                height={0}  
                style={{ objectFit: "contain", width: '80%', height:'auto' }}  
                priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center alumni-sans-pinstripe-regular text-3xl">
            <Link href="/" className="menu-link text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="#experience" className="menu-link text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#services" className="menu-link text-gray-600 hover:menu-link -900">
              Services
            </Link>
            <Link href="#projects" className="menu-link text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link 
                href="https://m.me/ronnel.santos08" 
                className="butn" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <span>Message Me</span>
                </Link>

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center p-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {/* Simple hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>


{/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="md:hidden mt-2 flex flex-col space-y-2 w-25 alumni-sans-pinstripe-regular text-3xl"
    >
      <Link href="#home" className="menu-link text-gray-800 hover:text-gray-900">
        Home
      </Link>
      <Link href="#experience" className="menu-link text-gray-800 hover:text-gray-900">
        Experience
      </Link>
      <Link href="#services" className="menu-link text-gray-800 hover:text-gray-900">
        Services
      </Link>
      <Link href="#projects" className="menu-link text-gray-800 hover:text-gray-900">
        Projects
      </Link>
      <Link 
                href="https://m.me/ronnel.santos08" 
                className="butn" 
                target="_blank" 
                rel="noopener noreferrer"
                >
        <span>Message Me</span>
      </Link>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </nav>
  );
}
