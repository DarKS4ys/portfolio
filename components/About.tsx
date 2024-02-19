'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] lg:max-w-[55rem] text-center items-center justify-center flex flex-col leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading heading="About my work" />
      <p className="mb-3">
        I specialize in bringing ideas to life in the digital realm through the
        magic of <span className="font-semibold">code</span> and{' '}
        <span className="font-semibold">design.</span>{''}
        Using <span className="font-semibold">Next.js</span> and{' '}
        <span className="font-semibold">Tailwind CSS</span>, I craft{' '}
        <span className="font-semibold">captivating landing pages</span> and {' '}
        <span className="font-semibold">full-scale applications</span> that seamlessly blend{' '}
        <span className="font-semibold">function</span> and{' '}
        <span className="font-semibold">style.</span> My goal is to create experiences that {' '}
        <span className="font-semibold">invite exploration</span> and{' '}
        <span className="font-semibold">spark connections</span>.
      </p>
      <p className="max-w-[40rem]">
        Let&apos;s embark on a journey where{' '}
        <span className="font-semibold">imagination meets technology</span>,
        creating an online presence that&apos;s{' '}
        <span className="font-semibold">uniquely yours</span>.
      </p>
    </motion.section>
  );
}
