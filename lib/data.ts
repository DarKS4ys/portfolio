import React from "react";
import { MdQueryBuilder } from 'react-icons/md';
import { CgWorkAlt } from "react-icons/cg";
import { BiWindow, BiPaintRoll } from "react-icons/bi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "",
    description:
      "I worked as a front-end developer for 2 years and made many landing pages for both other people and my projects. I also upskilled to the full stack.",
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

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Sass",
  "Prisma",
  "Firebase",
  "Supabase",
  "Vercel",
  "PHP",
  "PostgreSQL",
  "Python",
  "Django",
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