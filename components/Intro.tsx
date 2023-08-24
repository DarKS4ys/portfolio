"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs'
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const {ref} = useSectionInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick
    } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='scroll-mt-[80rem] mb-28 max-w-[50rem] lg:max-w-[60rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative group'>
                <motion.div
                    initial= {{ opacity:0, scale:0 }}
                    animate= {{ opacity:1, scale:1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2,
                    }}
                >
                    <Image 
                        src='/profilepic.jpg'
                        alt='User Picture'
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        className='h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl border-white group-hover:ring-2 ring-black/50  transition '
                    />
                </motion.div>
                <motion.span className='absolute text-4xl bottom-0 right-0 drop-shadow-md pointer-events-none' 
                    initial= {{ opacity:0, scale:0 }}
                    animate= {{ opacity:1, scale:1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: .07,
                        duration: .5,
                    }}
                >
                        👋
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl lg:text-[2.5rem]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}

        >
        <span className="font-bold">Hello, I&apos;m Dark.</span> I&apos;m a{" "}
        <span className="font-bold">web developer & designer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I build{" "}
        <span className="underline">high-converting</span>{" "}
        <span className="font-bold">landing pages</span>.
        </motion.h1>

        <motion.div className='group flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium text-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}

        >
            <Link href="#contact" onClick={() => {setActiveSection("Contact"), setTimeOfLastClick(Date.now())}} className='bg-gray-900 outline-none text-white px-7 py-3 flex items-center gap-2 rounded-full max-w-[16rem] active:scale-100 hover:scale-110 hover:bg-gray-950 transition'>Contact me here <BsArrowRight className="opacity-84 group-hover:opacity-100 transition group-hover:translate-x-1 group-active:translate-x-0" /></Link>
        </motion.div>
    </section>
  )
}
