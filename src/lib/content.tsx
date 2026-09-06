import {
  SiGithub,
  SiInstagram,
  SiWhatsapp,
  SiX,
} from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "lucide-react";
import { NavLink, Project, SocialLink, AwardItem } from "./types";

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
    slug: "heimdall",
    title: "Heimdall: Local AI Screen Memory for Hyprland",
    coverImg: "/images/projects/heimdall-cover.png",
    githubLink: "https://github.com/adityanandanx/heimdall",
    desc: "Event-driven Python capture daemon on the Hyprland socket: on window changes it captures the active-window region (grim) and its accessibility tree (AT-SPI) into a searchable SQLite/FTS5 store, falling back to RapidOCR on the Intel NPU (OpenVINO) for blind windows. YouTube watch-sessions (MPRIS + Chromium MV3 extension + yt-dlp/faster-whisper transcripts) become searchable via subtitles served over FastAPI, scheduled day-recap and time-breakdown pipes run through a local Gemma 4 QAT model on the Arc Vulkan backend (llama-server), and a Tauri 2 desktop client serves timeline, search, sessions, and settings. Everything stays on-machine.",
    tags: [
      "Python",
      "Hyprland",
      "Wayland",
      "AT-SPI",
      "RapidOCR",
      "OpenVINO",
      "SQLite FTS5",
      "FastAPI",
      "Tauri 2",
      "Gemma",
    ],
  },
  {
    slug: "cinema-rag",
    title: "Hybrid RAG Pipeline: Conversational Movie Agent",
    coverImg: "/images/projects/cinema-cover.png",
    githubLink: "https://github.com/adityanandanx/cinema-rag",
    desc: "Multi-agent hybrid retrieval-augmented generation pipeline answering natural-language queries across 2,200 movie screenplays chunked into 289,124 documents. Combines dense retrieval (BAAI/bge-small-en-v1.5) with BM25 sparse retrieval via Reciprocal Rank Fusion, Qdrant as the vector store, and Llama 4 17B via Groq for fast response generation.",
    tags: [
      "Python",
      "Hybrid RAG",
      "LangChain",
      "Qdrant",
      "BM25",
      "Reciprocal Rank Fusion",
      "Docker",
      "Llama 4",
      "Groq",
    ],
  },
  {
    slug: "bitflip",
    title: "BitFlip: Story Based 2D Platformer Game",
    coverImg: "/images/projects/bitflip-cover.png",
    githubLink: "https://github.com/Team-Hacksmith/bitflip",
    desc: "Story-based 2D platformer built in 72 hours, winning 1st place at IIT Ropar's Advitiya Game Jam 2025. Built with Godot and GDScript leading a 3-member team, with coyote time, variable jump height, and jump buffering tuned for smooth performance.",
    tags: ["Godot", "GDScript", "2D Platformer", "Game Jam Winner"],
  },
  {
    slug: "nirbhay",
    title: "Nirbhay: Automated Emergency Detection App",
    coverImg: "/images/projects/nirbhay-cover.png",
    githubLink: "https://github.com/Team-Hacksmith/nirbhay",
    desc: "Accessibility-focused safety app that automatically detects distress and triggers hands-free emergency alerts. Integrates ESP32 wearable hardware, a Flutter mobile app, and a Firebase backend with YAMNet for real-time audio distress detection, empowering elderly, disabled, and at-risk users to summon help without manual intervention.",
    tags: [
      "Flutter",
      "Firebase",
      "ESP32",
      "YAMNet",
      "Edge AI",
      "Bluetooth Low Energy (BLE)",
      "Mobile App",
      "Real-Time Alerts",
    ],
  },
];

export const awards: AwardItem[] = [
  {
    title: "WorldSkills Asia: Web Technologies",
    organization: "WorldSkills Asia, Taipei, Taiwan",
    from: "Nov 2025",
    location: "Taipei, Taiwan",
    details: [
      "Represented India in Web Technologies against 14 countries across 5 independent 3-hour modules over 3 days, each with a fresh spec and zero internet access.",
      "Won Medallion of Excellence, ranked 5th globally.",
    ],
  },
  {
    title: "IndiaSkills National Qualifier: Web Technologies",
    organization:
      "Ministry of Skill Development & Entrepreneurship, Govt. of India",
    from: "2024",
    details: [
      "Won IndiaSkills National 2024 in Web Technologies after 2+ months of intensive training and 3 internal test rounds simulating competition constraints, securing selection to represent India internationally.",
    ],
  },
  {
    title: "SWOC 2024 Winner",
    organization: "Social Winter of Code",
    from: "Mar 2024",
    details: [
      "Recognized as the #1 open source contributor out of 20,000+ developers; contributed to 10+ projects and resolved 80+ issues.",
    ],
  },
  {
    title: "IIT Ropar Advitiya Game Jam 2025",
    organization: "IIT Ropar",
    from: "2025",
    details: [
      "1st place (BitFlip) — nation-wide 72-hour game development hackathon.",
    ],
  },
  {
    title: "HackTheHills 2024",
    organization: "DIT University",
    from: "2024",
    details: [
      "2nd place (ScripturaAI) — national coding hackathon with 50+ teams.",
    ],
  },
  {
    title: "AWS Jam Grandmaster 2025",
    organization: "Graphic Era University",
    from: "2025",
    details: [
      "Winner, campus-wide cloud & DevOps hackathon solving Amazon Web Services architecture and operations challenges.",
    ],
  },
];

export const EMAIL = "nandanaditya985@gmail.com";
