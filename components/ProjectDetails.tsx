import { projectsData } from '@/lib/data';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

type ProjectDetailsProps = {
  title: (typeof projectsData)[number]['title'];
  description: (typeof projectsData)[number]['description'];
  imageUrl: (typeof projectsData)[number]['imageUrl'];
  tags: (typeof projectsData)[number]['tags'];
  images: (typeof projectsData)[number]['images'];
  href: (typeof projectsData)[number]['link'];
};

export default function ProjectDetails({
  title,
  description,
  imageUrl,
  tags,
  images,
  href
}: ProjectDetailsProps) {
  const allImages = [imageUrl, ...images];

  return (
    <div className="flex flex-col gap-2 sm:gap-4 p-4">
      <div className="w-full h-full py-8 px-12">
        <Carousel className="w-full rounded-lg">
          <CarouselContent>
            {allImages.map((image, index) => (
              <CarouselItem key={index} className="group h-72 rounded-lg">
                <div className="h-full relative rounded-lg">
                  <Image src={image} className="object-cover rounded-lg" quality={95} placeholder="blur" fill alt={`Project Image ${index + 1}`} />
                </div>
                <div className="sticky inset-0 w-full h-full transition duration-300 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <Link className="underline-offset-4 hover:underline font-medium uppercase text-2xl text-white active:scale-90 transition" rel="noopener noreferrer" target="_blank" href={href}>Visit</Link>
                </div> 
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Link rel="noopener noreferrer" target="_blank" className="bg-primary/20 dark:bg-primary/15 px-4 py-1.5 hover:bg-primary/40 rounded-full active:scale-90 transition flex gap-1 items-center w-fit" href={href}>Visit<ExternalLinkIcon/></Link>
      <h3 className="text-3xl sm:text-4xl font-semibold">{title}</h3>

      <h3 className="text-sm sm:text-xl opacity-60 font-light">{description}</h3>
      <ul className="flex flex-wrap pt-8 gap-2 sm:mt-auto">
        {tags.map((tag, index) => (
          <li
            className="bg-black/70 dark:bg-white/10 dark:text-white/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
