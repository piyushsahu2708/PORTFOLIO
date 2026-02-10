import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

type PortfolioData = {
  name: string;
  roles: string[];
  summary: string;
  about: string;
  contact: {
    email: string;
    phone: string;
    social: {
      linkedin: string;
      github: string;
    };
  };
  resumeUrl: string;
  profilePicture: ImagePlaceholder | undefined;
  experiences: {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    techStack: string[];
  }[];
  skills: {
    [key: string]: string[];
  };
  projects: {
    title: string;
    description: string;
    features: string[];
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    image: ImagePlaceholder | undefined;
  }[];
  achievements: string[];
};

export const portfolioData: PortfolioData = {
  name: "Piyush Sahu",
  roles: ["Software Engineer Intern", "Full Stack Developer"],
  summary:
    "A professional, recruiter-focused portfolio that goes beyond a resume and clearly showcases technical skills, real-world project experience, system & architecture thinking, and a problem-solving mindset.",
  about:
    "B.Tech in CSE with a 6.36 CGPA. My core interests lie in Full Stack Development, Backend Engineering, Security, and Cloud technologies. My career objective is to build scalable, secure, and impactful real-world systems.",
  contact: {
    email: "piyushsahu631@gmail.com",
    phone: "+91 7000398023",
    social: {
      linkedin: "https://www.linkedin.com/in/piyush-sahu",
      github: "https://github.com/piyushsahu2708",
    },
  },
  resumeUrl: "/piyush_sahu_resume.pdf",
  profilePicture: PlaceHolderImages.find(img => img.id === 'profile-picture'),
  experiences: [
    {
      role: "SDE Intern",
      company: "ITJOBXS",
      period: "Oct 2024 - Dec 2024",
      description:
        "Contributed to building a secure and responsive recruitment platform, focusing on user-facing features and anti-fraud measures.",
      highlights: [
        "Developed responsive UI components.",
        "Implemented authentication and verification systems.",
        "Created systems for fake bot and post detection.",
        "Integrated Google reCAPTCHA for enhanced security."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    },
    {
      role: "Solutions Architecture Virtual Experience",
      company: "AWS APAC (Forage)",
      period: "Virtual Experience",
      description:
        "Completed a virtual job simulation focused on core AWS cloud architecture principles.",
      highlights: [
        "Designed scalable cloud architecture for a sample application.",
        "Applied security best practices for cloud infrastructure.",
        "Developed cost optimization strategies for AWS services.",
        "Planned for high availability and disaster recovery."
      ],
      techStack: ["AWS"],
    },
  ],
  skills: {
    "Programming Languages": ["Java", "JavaScript", "Python"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "HTML, CSS"],
    "Databases": ["MySQL", "MongoDB", "JDBC"],
    "Tools": ["Git & GitHub", "Postman", "Netlify / Vercel"],
  },
  projects: [
    {
      title: "SkillMirror – Skill Verification Platform",
      description:
        "An online platform designed to validate skills listed on resumes, tackling the issue of unverifiable claims.",
      features: [
        "Secure JWT-based Authentication",
        "Role-Based Access Control (RBAC)",
        "Automated Skill Assessment System",
        "User Credibility Scoring",
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/piyushsahu2708/skillmirror",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'skillmirror-project'),
    },
    {
      title: "PractorVision – Smart Interview Proctoring System",
      description:
        "An AI-driven system to detect and prevent cheating during remote interviews.",
      features: [
        "Face absence and multiple face detection",
        "Head movement and posture tracking",
        "Tab switch and window blur detection",
        "Violation logging with timestamps for review",
      ],
      techStack: ["Java", "JSP", "Servlets", "JDBC", "Python", "OpenCV", "MediaPipe"],
      githubUrl: "https://github.com/piyushsahu2708/practorvision",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'practorvision-project'),
    },
    {
      title: "MediTract Pro – Hospital Management System",
      description:
        "A comprehensive system to digitize and streamline manual hospital workflows.",
      features: [
        "Centralized Patient Records Management",
        "Efficient Appointment Scheduling System",
        "Role-Based Access for Doctors, Staff, and Admins",
        "Secure REST APIs for data exchange",
      ],
      techStack: ["MERN Stack", "Java", "REST APIs"],
      githubUrl: "https://github.com/piyushsahu2708/meditract-pro",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'meditract-project'),
    },
  ],
  achievements: [
    "Commonwealth Bank – Software Engineering (Forage)",
    "Mastercard – Cybersecurity (Forage)",
    "AWS APAC – Solutions Architecture",
  ]
};