"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView('Contact')

  return (
    <motion.section ref={ref} id='contact' className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true,
        }}

    >
        <SectionHeading heading='Contact Me'/>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className="hover:text-gray-950 dark:hover:text-white underline" href="mailto:melihyardim1057@gmail.com">melihyardim1057@gmail.com</a></p>
        <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error); 
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
            <input name="senderEmail" className='dark:bg-white dark:text-black dark:bg-opacity-[.85] dark:focus:bg-opacity-100 dark:focus:ring-white/60 focus:ring-2 h-14 rounded-lg p-4 outline-none focus:ring-black/30 duration-300 transition borderBlack' type='email' required maxLength={450} placeholder='Your email' />
            <textarea name="message" className='h-52 my-3 rounded-lg borderBlack p-4 outline-none focus:ring-2 dark:bg-white dark:bg-opacity-[.85] dark:focus:bg-opacity-100 focus:ring-black/30 dark:focus:ring-white/60 duration-300 transition'maxLength={3000} required placeholder='Your message' />
            <SubmitButton />
        </form>
    </motion.section>
  )
}
