'use client';

import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.55);
  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.38 }}
    >
      <SectionHeading
        heading="My Projects"
        subheading="Here's some of my past work, you can click to see details"
      />
      <div className="flex flex-col gap-1 items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <span className="flex items-center gap-1">
          <p className="opacity-50">And many more projects on my</p>
          <a href="https://github.com/DarKS4ys" target="_blank" className="flex underline-offset-4 hover:underline active:scale-95 transition items-center gap-0.5">
            github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </span>
      </div>
    </motion.section>
  );
}
