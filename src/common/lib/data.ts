import React from 'react';

import portfolioImg from '@/../public/images/portfolio2.png';
import newsletterImg from '@/../public/images/newsletter2.png';
import dailyJournalImg from '@/../public/images/dailyJournal.png';
import cipherChatImg from '@/../public/images/cipherChat1.png';
import todoListImg from '@/../public/images/todoList4.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-Stack Interactive LLP',
    location: 'Navi Mumbai, India',
    description: `Front-end Web Develpoer Intern. Optimized web solutions using HTML, CSS, JavaScript, and React JS, significantly improving user experience also developed mobile-friendly static web pages from scratch without using pre-built component libraries.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Nov 2023 - Dec 2023',
  },
  {
    title: 'HackClub VITC',
    location: 'Chennai, India',
    description: `Blockchain & Web Developer at HackClub, Led the development and maintenance of blockchain projects. Collaborated with team members to develop the club's website.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Oct 2022 - Present',
  },
  {
    title: 'B.Tech in Computer Science and Engineering',
    location: 'VIT Chennai, India',
    description: `Final year undergrad studying Computer Science and Engineering with Spl. in Cyber Physical Systems from Vellore Institute of Technology Chennai.`,
    icon: React.createElement(BookIcon),
    date: 'Sep 2021 - Present',
  },
] as const;

export const images = {
  todoListImg,
  newsletterImg,
  cipherChatImg,
  dailyJournalImg,
  portfolioImg,
};

export const projectsData = [
  {
    title: 'Cipher Chat',
    description:
      'A chat platform which leverages the power of blockchain technology to revolutionize digital interactions by prioritizing user privacy and security,',
    tags: [
      'React',
      'JavaScript',
      'Next.js',
      'Node.js',
      'Solidity',
      'ether.js',
      'Web3Modal',
      'CSS',
    ],
    imageUrl: cipherChatImg,
    link: '',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: '',
  },
  {
    title: 'Daily Journal',
    description: `A blog webiste designed to seamless blog creation. This website offers users to create and publish their blogs.`,
    tags: [
      'HTML',
      'CSS',
      'Node.js',
      'Express.js',
      'Javascript',
    ],
    imageUrl: dailyJournalImg,
    link: '',
  },
  {
    title: 'ToDo List website',
    description:
      'A ToDo list website to efficiently manage your tasks. This websites allows users to add, update and delete tasks.',
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'Node.js',
      'MongoDB',
    ],
    imageUrl: todoListImg,
    link: '',
  },
  {
    title: 'Newsletter Signup website',
    description:
      'A landing page for users to signup for newletters. This website uses MailChimp API to manage users email addresses.',
    tags: ['HTML', 'CSS','JavaScript','Node.js', 'MailChimp API'],
    imageUrl: newsletterImg,
    link: '',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Solidity', '/svgs/solidity.svg'],
  ['C++', '/svgs/cpp.svg'],
  ['Java', '/svgs/java.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['AWS', '/svgs/aws.svg'],
  ['Azure', '/svgs/azure.svg'],
  ['', '/svgs/etc.svg'],
] as const;
