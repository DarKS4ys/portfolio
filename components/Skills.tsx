"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {
    const {ref} = useSectionInView('Skills');
  return (
    <motion.section id="skills" ref={ref} className='scroll-mt-32 mb-28 sm:mb-40 max-w-[53rem]'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.55 }}>
        <SectionHeading heading='My Skills'/>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                    >
                        <div className="bg-white borderBlack rounded-xl transition hover:bg-black/5 dark:hover:bg-white/20 px-5 py-3 dark:bg-white/10 dark:border-white/10 dark:text-white/90">
                            {skill}
                        </div>
                    </motion.li>
                ))
            }
        </ul>
    </motion.section>
  )
}
