"use client"
import React from 'react';
import { Card, Card2 } from '@/components/Card';
import { cardData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import clsx from 'clsx';

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

  return (
    <motion.div
      className="mb-28 md:mb-40 flex flex-col items-center"
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
          className={clsx('scroll-mt-52 mt-[0.8rem] w-full')}
        >
          <div className="grid gap-3 md:hidden max-w-[450px] grid-cols-2">
          {cardData.slice(0, 2).map((card, index) => (
            <Card key={index} {...card} />
          ))}
          </div>

          <div className="hidden md:grid gap-4 max-w-none grid-cols-3">
          {cardData.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex flex-col items-center justify-center md:col-span-1 col-span-2 mt-3">
          {cardData.slice(2, 3).map((card, index) => (
            <Card2 key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}