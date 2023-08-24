"use client"

import React from 'react'
import { motion } from 'framer-motion';

export default function Decoration() {
  return (
    <div className='relative'>
        <motion.div className='w-[30rem] h-[30rem] bg-teal-600/30 blur-[7rem] p-10 absolute rounded-3xl left-[-14rem] top-[10rem]'
            initial={{ opacity: 0, x: -100, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 45}}
            transition={{
                delay:0.1,
            }}
        ></motion.div>
    </div>
  )
}
