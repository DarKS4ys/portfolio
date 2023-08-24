"use client"

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.55);
  return (
    <motion.section ref={ref} id='projects' className='scroll-mt-28 mb-28 sm:mb-40' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
        <SectionHeading heading="My Projects" />
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
    </motion.section>
  )
}

