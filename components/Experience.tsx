"use client"

import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from 'react'
import SectionHeading from './SectionHeading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

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

export default function Experience() {
/*   const {ref} = useSectionInView('Experience'); */
  const {theme} = useTheme();
  return (
    <motion.section className="scroll-mt-28 mb-28 sm:mb-40" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} /* ref={ref} */ id='experience'>
      <SectionHeading heading='My experience'/>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => (
            <React.Fragment  key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor: theme === 'light' ? '#f3f4f6' : "rgba(255, 255, 255, 0.05)",
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: theme === 'light' ? '.4rem solid #9ca3af' : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem'
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 font-normal text-gray-700 dark:text-white/75">{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>

          ))
        }
      </VerticalTimeline>
    </motion.section>
  )
}
