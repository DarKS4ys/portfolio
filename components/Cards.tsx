"use client"
import React from 'react';
import { Card, Card2 } from '@/components/Card';
import { cardData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Cards() {
  const { ref } = useSectionInView('Services', 0.65);
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <motion.div
      className="mb-28 sm:mb-40"
      ref={ref}
      variants={fadeInAnimationVariants}
      transition={{ delay: 0.2 }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <SectionHeading heading="Transforming your vision into reality" />
      <div className="flex items-center justify-center">
      <div
          id="services"
          className={`scroll-mt-52 mt-[0.8rem] grid ${
            isMobile ? 'grid-cols-2' : 'grid-cols-3'
          } x-1 gap-3 sm:gap-4 max-w-[450px] sm:max-w-none`}
        >
          {cardData.slice(0, isMobile ? 2 : 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="sm:hidden block">
        <div className="flex flex-col items-center justify-center sm:col-span-1 col-span-2 mt-3">
          {cardData.slice(2, 3).map((card, index) => (
            <Card2 key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}