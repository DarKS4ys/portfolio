import React from "react";
import { MdQueryBuilder } from 'react-icons/md';
import { CgWorkAlt } from "react-icons/cg";
import { BiWindow } from "react-icons/bi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";

import platformImg from '@/public/platform/platformsmall.png'
import landingImg from '@/public/landing/landingsmall.png'
import affluentImg from '@/public/affluent/small.png'
import primeImg from '@/public/prime/primeLandingSmall.png'
import authImg from '@/public/auth/authsmall.png'

import { platformImages, primeImages, affluentImages, landingImages, authImages } from './imageExport';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
/*   {
    name: "Experience",
    hash: "#experience",
  }, */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started the journey",
    location: "",
    description:
      "I started my journey as a front-end developer with some design and programming experience",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "",
    description:
      "I worked as a front-end developer for 2 years and made many landing pages for both other people and my projects. I also upskilled to full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma/Firebase. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

const {
  platform1, platform2, platform3, platform4, platform5, platform6, platform7
} = platformImages;

const {
  prime1, prime2, prime3, prime4
} = primeImages;

const {
  affluent1, affluent2, affluent3
} = affluentImages;

const {
  landing2, landing3, landing4, landing5, landing6, landing7, landing8
} = landingImages;

const {
  auth1, auth2, auth3, auth4
} = authImages;

export const projectsData = [
  {
    title: "Stoic Landing Page",
    description:
      "Designed an engaging landing page for a social media course, highlighting captivating animations and a beautiful layout. Included a video trailer and persuasive copy to drive conversions.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion", "Landing page"],
    imageUrl: landingImg,
    images: [landing2, landing3, landing4, landing5, landing6, landing7, landing8],
  },
  {
    title: "Affluent AI Landing Page",
    description:
      "Designed a website for an AI agency specializing in business solutions, featuring captivating animations and a sleek design. The site showcased the agency's innovative AI solutions with precision and elegance.",
    tags: ["React", "Next.js", "Framer-Motion", "Tailwind", "Landing page"],
    imageUrl: affluentImg,
    images: [affluent1, affluent2, affluent3],
  },
  {
    title: "STOIC 2.0",
    description:
      "Online education platform packed with features like Text/Video lessons, Task tracker, Social Media Analytics, User system and bunch more. I worked as the full-stack developer on this project for 6 months.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase", "Vimeo", "Stripe", "Framer-Motion", 'application'],
    imageUrl: platformImg,
    images: [platform1, platform2, platform3, platform4, platform5, platform6, platform7],
  },
  {
    title: "Prime Trading Landing Page",
    description:
      "Designed a captivating landing page for Prime Trading, a premier trading course, featuring a custom AI chatbot to enrich user engagement and provide a tailored experience for visitors.",
    tags: ["React", "Next.js", "Framer-Motion", "Tailwind", "AI Chatbot", "Landing page"],
    imageUrl: primeImg,
    images: [prime1, prime2, prime3, prime4],
  },
  {
    title: "Auth Toolbox",
    description:
      "Auth Toolbox is a personal project for streamlined authentication, supporting provider-based login, email login and verification, role-based middleware protection, and multi-factor authentication for enhanced security.",
    tags: ["React", "Next.js", "Prisma","Tailwind", "MongoDB", "Auth.js",  "Resend", "TypeScript", "Application"],
    imageUrl: authImg,
    images: [auth1, auth2, auth3, auth4]
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Scss",
  "Prisma",
  "Firebase",
  "Supabase",
  "Vercel",
  "MongoDB",
  "PostgreSQL",
  "Auth.js",
  "Python",
  "Framer Motion",
] as const;

export const cardData = [
  {
    heading: "Development",
    icon: React.createElement(MdQueryBuilder, { size: 48 }),
    description: "Utilizing the latest technology and design trends to bring your unique vision to fruition with performance and creativity."
  },
  {
    heading: "Conversion",
    icon: React.createElement(RiExchangeDollarLine, { size: 48 }),
    description: "Using the art of copywriting to create compelling website content that drives conversions and achieves your business goals."
  },
  {
    heading: "UI & UX Design",
    icon: React.createElement(BiWindow, { size: 48 }),
    description: "Crafting intuitive and strategic user interfaces that seamlessly guide users, perform tasks efficiently and provide a pleasant experience for the user."
  },
] as const;