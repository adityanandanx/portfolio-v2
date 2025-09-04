import {
  SiGithub,
  SiInstagram,
  SiWhatsapp,
  SiX,
} from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "lucide-react";
import { NavLink, Project, SocialLink } from "./types";

export const navLinks: NavLink[] = [
  { href: "/#about", text: "About" },
  { href: "/#exp", text: "Experience" },
  { href: "/#projects", text: "Projects" },
  { href: "/#award", text: "Award" },
  { href: "/#contact", text: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/adityanandanx", icon: <SiGithub /> },
  {
    href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
    icon: <LinkedinIcon />,
  },
  { href: "https://www.instagram.com/adityanandan.zip", icon: <SiInstagram /> },
  { href: "https://x.com/adithatsit", icon: <SiX /> },
  { href: "https://wa.link/8z1d77", icon: <SiWhatsapp /> },
];

export const stuff: string[] = [
  "websites",
  "mobile apps",
  "ui/ux designs",
  "machine learning",
  "ai",
];

export const projects: Project[] = [
  {
    title: "Dental X-Ray Analysis AI",
    coverImg: "/images/projects/dental-cover.png",
    href: "https://dental-conditions-detection.vercel.app/",
    githubLink: "https://github.com/adityanandanx/dental-conditions-detection",
    desc: "An AI-driven dental diagnostic platform with FastAPI, Next.js, and TypeScript, featuring DICOM X-ray processing, Roboflow-based cavity/lesion detection, and automated medical report generation using LangChain + OpenAI.",
    tags: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "Tailwind CSS",
      "Roboflow",
      "LangChain",
      "GenAI",
    ],
  },
  {
    title: "ScripturaAI",
    githubLink: "https://github.com/Team-Hacksmith/ScripturaAI",
    desc: "An intelligent documentation generation platform that leverages AI to automatically create comprehensive documentation, docstrings, algorithm explanations, guides, and visual diagrams from your codebase.",
    tags: [
      "Next.js",
      "Flask",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "LangChain",
      "OpenAI",
      "MkDocs",
      "VS Code Extension",
    ],
  },
  {
    title: "Nirbhay: Automated Emergency Detection App",
    coverImg: "/images/projects/nirbhay-cover.png",
    githubLink: "https://github.com/Team-Hacksmith/nirbhay",
    desc: "An AI-powered safety platform combining wearables and a mobile app to automatically detect distress, falls, or medical emergencies and instantly alert caregivers or emergency services, empowering vulnerable individuals with independence and security.",
    tags: [
      "React Native",
      "TensorFlow Lite",
      "Edge AI",
      "ESP32",
      "Heart Rate Monitor",
      "Bluetooth Low Energy (BLE)",
      "Mobile App",
      "Real-Time Alerts",
    ],
  },
  {
    title: "Kalam2: Handwriting Generation App",
    coverImg: "/images/projects/kalam2-cover.png",
    githubLink: "https://github.com/adityanandanx/kalam2",
    desc: "A full-stack handwriting generation application. It consists of a FastAPI backend for generating SVG handwriting using machine learning, and a Next.js frontend for user interaction and visualization.",
    tags: [
      "FastAPI",
      "Next.js",
      "Python",
      "TypeScript",
      "TensorFlow",
      "Machine Learning",
      "SVG",
      "Handwriting Generation",
      "A4 Layout",
      "API",
    ],
  },
];
