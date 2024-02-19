"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import clsx from "clsx";
import ProjectDetails from "./ProjectDetails";

type ProjectProps = (typeof projectsData)[number]

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    images,
}: ProjectProps) {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.55, 1])


    return (
        <Dialog>
            <DialogTrigger asChild>
            <motion.div 
            // @ts-ignore
            ref={ref}
            id={title.toLowerCase()}
            style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            }}
            className="group cursor-pointer sm:mb-8 mb-3 last:mb-0"
            >
            <section className='dark:text-white group-active:scale-95 dark:bg-white/10 dark:hover:bg-white/20 bg-gray-100 max-w-[44.5rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8'>
                <div className={clsx('pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem]', description.length > 150 ? 'sm:max-w-[55%]' : 'sm:max-w-[50%]')}>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm'>{description}</p>
                    <ul className='flex flex-wrap pt-8 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/70 dark:text-white/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image
                src={imageUrl}
                quality={95}
                alt={title}
                placeholder="blur"
                className='absolute hidden sm:block top-9 -right-40 w-[29rem] group-hover:brightness-110 rounded-t-lg shadow-2xl shadow-black/80 group-even:right-[initial] group-even:-left-[9.5rem]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:rotate-2

                group-hover:scale-[1.04]
                transition
                '
                />
            </section>
        </motion.div>
            </DialogTrigger>
            <DialogContent>
                <ProjectDetails images={images} title={title} description={description} tags={tags} imageUrl={imageUrl} />
            </DialogContent>
        </Dialog>
    )
}
