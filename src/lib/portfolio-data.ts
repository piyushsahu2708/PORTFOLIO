
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
    "Full Stack Developer skilled in MERN stack, REST APIs, and authentication systems. Experienced in building real-world projects with clean architecture, secure data handling, and user-focused design.",
  about:
    "B.Tech in CSE with a 6.36 CGPA. My core interests lie in Full Stack Development, Backend Engineering, Security, and Cloud technologies. My career objective is to build scalable, secure, and impactful real-world systems.",
  contact: {
    email: "piyushsahu631@gmail.com",
    phone: "+91-7000398023",
    social: {
      linkedin: "https://www.linkedin.com/in/piyush-sahu-052666249/",
      github: "https://github.com/piyushsahu2708",
    },
  },
  resumeUrl: "https://raw.githubusercontent.com/piyushsahu2708/resume/main/PIYUSH%20ENGINEER%20CSE%20(1).pdf",
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
      liveUrl: "https://skill-mirror-self.vercel.app/",
      image: PlaceHolderImages.find(img => img.id === 'skillmirror-project'),
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
      liveUrl: "https://medi-tract-pro.vercel.app/",
      image: PlaceHolderImages.find(img => img.id === 'meditract-project'),
    },
    {
      title: "Pink Flayer – Animated Brand Experience",
      description:
        "A visually immersive scroll-based landing page designed to showcase modern UI motion design using GSAP and advanced scroll interactions.",
      features: [
        "Smooth GSAP-powered scroll animations",
        "Pinned sections with dynamic transitions",
        "Layered motion effects & element scaling",
        "Creative typography and brand storytelling",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      githubUrl: "https://github.com/piyushsahu2708/pinkflayer-project",
      liveUrl: "https://piyushsahu2708.github.io/pinkflayer-project/",
      image: PlaceHolderImages.find(img => img.id === 'pinkflayer-project'),
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
      liveUrl: "https://practor-vision.vercel.app/",
      image: PlaceHolderImages.find(img => img.id === 'practorvision-project'),
    },
    {
      title: "Tala – Fruit Snack Landing Page",
      description:
        "A modern animated landing page for a fruit snack brand, focused on premium branding, smooth scroll animations, and interactive product storytelling.",
      features: [
        "Scroll-triggered animation sequences",
        "Section pinning with dynamic transitions",
        "Animated product visuals & gradients",
        "Clean, premium UI with brand-focused design",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      githubUrl: "https://github.com/piyushsahu2708/tala-fruit-landing",
      liveUrl: "https://piyushsahu2708.github.io/tala-fruit-landing/",
      image: PlaceHolderImages.find(img => img.id === 'tala-project'),
    },
  ],
  achievements: [
    "Commonwealth Bank – Software Engineering (Forage)",
    "Mastercard – Cybersecurity (Forage)",
    "AWS APAC – Solutions Architecture",
    "Completed an advanced software engineering job simulation by Walmart Global Tech via Forage."
  ]
};
