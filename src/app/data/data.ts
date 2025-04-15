// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// List your technical skills below
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/gautam-sharma-3045bb223/", // Replace "#" with your LinkedIn profile URL.
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/GautamSharma03", // Replace "#" with your Github profile URL.
    size: "18px",
  },
];

// Add your projects here with their descriptions, features, and tech stack.
export const projects = [
  {
    name: "Dev Match",
    description: "Developer networking platform with real-time chat.",
    points: [
      "- User registration, profile viewing, and networking.",
      "- Real-time chat with Socket.IO.",
      "- Optimized for responsiveness and performance.",

     
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux-toolkit", icon: SiRedux, color: "#C9D1D9" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#C9D1D9" },
    ],
    liveLink: "http://www.devmatch.site/",
    githubLink: "https://github.com/GautamSharma03/DevMatch-web",
    image: "/img/devmatchportfolio.png", // Update with the actual project image
  },
  {
    name: "Shadow Talk",
    description: "A secure public chat application.",
    points: [
      "Designed and developed a secure public chat application that prioritizes user privacy by not storing any data.",
      "With an intuitive interface, users can engage in anonymous conversations with anyone in real-time.",
      
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "https://shadow-talk.vercel.app/",
    githubLink: "#",
    image: "/img/shadowtalk.jpg", // Update with the actual project image
  },
  // {
  //   name: "Sample Project 3",
  //   description: "Description about sample project 3",
  //   points: [
  //     "Feature 1 of the sample project.",
  //     "Feature 2 of the sample project.",
  //     "Feature 3 of the sample project.",
  //   ],
  //   techStack: [
  //     { name: "React.js", icon: FaReact, color: "#61DAFB" },
  //     { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  //     { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  //     { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  //   ],
  //   liveLink: "#",
  //   githubLink: "#",
  //   image: "/img/projectimage.jfif", // Update with the actual project image
  // },
  // {
  //   name: "Sample Project 4",
  //   description: "Description about sample project 4",
  //   points: [
  //     "Feature 1 of the sample project.",
  //     "Feature 2 of the sample project.",
  //     "Feature 3 of the sample project.",
  //   ],
  //   techStack: [
  //     { name: "React.js", icon: FaReact, color: "#61DAFB" },
  //     { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  //     { name: "Context API", icon: FaServer, color: "#6366F1" },
  //     { name: "OpenWeather API", icon: FaDatabase, color: "#0064a5" },
  //   ],
  //   liveLink: "#",
  //   githubLink: "#",
  //   image: "/img/projectimage.jfif", // Update with the actual project image
  // },
];

// Update your personal information
export const personalInfo = {
  pfp: "/img/WhatsApp Image 2024-10-01 at 19.30.22_f0f185e9.jpg",
  alt: "Sample Profile Pic",
  summary:
    "I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.",
  location: "Jaipur, Rajasthan, India",
};

// Update your education details
export const education = {
  college: "Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT)",
  course: "B.Tech. (CSE)",
  duration: "2021 - 2025",
  highscool: "Sharda Vihdya Mandir",
  main: "Senior Secondary (XII) with Science and Mathematics",
  year: "2020-2021",
};

// Update your work experience
export const experience = {
  companyName: "Summer Internship at Celebal Technologies (ReactJS)",
  title: "Front-End Developer Intern",
  duration: "Jun 2024 - August 2024",
  location: "Remote",
  points: [
    "Completed the Celebal Summer Internship 2024 under ReactJS, focusing on real-world project development.",
    "Gained hands-on experience with component-based architecture, API integration, and state management using React.",
    "Demonstrated enthusiasm, diligence, and professionalism, receiving appreciation from the senior management.",
  ],
};
