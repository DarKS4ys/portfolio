"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick  } = useActiveSectionContext();
  return (
    <header className='z-[997] relative'>
        <motion.div className='dark:bg-gray-950 dark:border-black/20 dark:bg-opacity-75 fixed top-0 left-1/2 h-[5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[.05] backdrop-blur-[.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] md:w-[35.3rem] sm:rounded-full'
            initial={{ y: -100, x: "-50%", opacity: 0}}
            animate={{ y: 0, x:"-50%", opacity: 1 }}
        ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-[3.25rem] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 md:text-[0.95rem] text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3 md:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
                <Link onClick={() =>{
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                
                className={clsx("flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-200", { "text-gray-950 dark:text-gray-100": activeSection === link.name, } )} href={link.hash}>
                  {link.name}

                  {
                    link.name === activeSection && (<motion.span className='dark:bg-gray-800 bg-[rgba(207,221,221,0.51)] rounded-full absolute inset-0 -z-10' layoutId='activeSection' transition={{type: "spring", stiffness: 380, damping: 30}}></motion.span> )
                  }
                  
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
    </header>
  )
}
