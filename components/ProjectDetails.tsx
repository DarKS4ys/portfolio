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
/* import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
 */
type ProjectDetailsProps = {
  title: (typeof projectsData)[number]['title'];
  description: (typeof projectsData)[number]['description'];
  imageUrl: (typeof projectsData)[number]['imageUrl'];
  tags: (typeof projectsData)[number]['tags'];
  images: (typeof projectsData)[number]['images'];
};

export default function ProjectDetails({
  title,
  description,
  imageUrl,
  tags,
  images,
}: ProjectDetailsProps) {
  const allImages = [imageUrl, ...images];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="w-full h-full py-8 px-12">
        <Carousel className="w-full rounded-lg">
          <CarouselContent>
            {allImages.map((image, index) => (
              <CarouselItem key={index} className="h-72 rounded-lg">
                <div className="h-full relative rounded-lg">
                  <Image src={image} className="object-cover rounded-lg" quality={95} placeholder="blur" fill alt={`Project Image ${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h3 className="text-4xl font-semibold">{title}</h3>
      <h3 className="text-xl opacity-60 font-light">{description}</h3>
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
