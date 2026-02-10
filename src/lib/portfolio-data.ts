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
};

export const portfolioData: PortfolioData = {
  name: "Jane Doe",
  roles: ["Full Stack Developer", "Cloud Solutions Architect", "AI Enthusiast"],
  summary:
    "Innovative Full Stack Developer with a passion for building scalable cloud solutions and leveraging AI to solve real-world problems. Proven ability to deliver high-quality software from concept to deployment.",
  about:
    "I am a results-oriented developer with a strong foundation in computer science and a knack for creating elegant, efficient, and user-friendly applications. My journey in tech began with a fascination for how software can transform ideas into reality, which led me to explore everything from frontend design to backend architecture and cloud infrastructure. I thrive in collaborative environments and am always eager to learn new technologies and take on challenging projects.",
  contact: {
    email: "jane.doe@email.com",
    phone: "+1 (555) 123-4567",
    social: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
  },
  resumeUrl: "/jane-doe-resume.pdf",
  profilePicture: PlaceHolderImages.find(img => img.id === 'profile-picture'),
  experiences: [
    {
      role: "Solutions Architecture Intern",
      company: "Amazon Web Services (AWS)",
      period: "May 2023 - Aug 2023",
      description:
        "Contributed to the design and implementation of cloud-native solutions for enterprise clients, focusing on scalability, security, and cost-optimization.",
      highlights: [
        "Developed a serverless data processing pipeline using AWS Lambda, S3, and DynamoDB, reducing processing time by 40%.",
        "Authored technical documentation and best practice guides for internal teams on using new AWS services.",
        "Presented a proof-of-concept for a multi-region disaster recovery strategy to senior architects.",
      ],
      techStack: ["AWS", "Python", "Terraform", "DynamoDB", "Lambda", "S3"],
    },
    {
      role: "Software Development Intern",
      company: "ITJOBXS",
      period: "Jun 2022 - Aug 2022",
      description:
        "Worked within an agile team to develop and maintain a web-based recruitment platform, enhancing features for both job seekers and recruiters.",
      highlights: [
        "Implemented a secure authentication flow using OAuth 2.0 and integrated Google reCAPTCHA to prevent bot registrations.",
        "Redesigned and developed a responsive user dashboard with React, improving user engagement by 15%.",
        "Wrote comprehensive unit and integration tests, increasing code coverage to over 90%.",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Jest", "Google reCAPTCHA"],
    },
  ],
  skills: {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Spring Boot"],
    "Databases": ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
    "Tools & Platforms": ["AWS", "Docker", "Kubernetes", "Git", "Terraform", "Jenkins", "Figma"],
  },
  projects: [
    {
      title: "SkillMirror",
      description:
        "An AI-powered platform that helps users identify and bridge skill gaps for their desired career paths by analyzing their current abilities against job market data.",
      features: [
        "AI-driven skill analysis and recommendations.",
        "Personalized learning path generation.",
        "Interactive data visualizations of career progression.",
      ],
      techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "GenAI", "D3.js"],
      githubUrl: "https://github.com/janedoe/skillmirror",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'skillmirror-project'),
    },
    {
      title: "PractorVision",
      description:
        "A computer vision tool for medical practitioners to analyze X-ray images for preliminary fracture detection, improving diagnostic speed and accuracy.",
      features: [
        "High-accuracy fracture detection model.",
        "Secure image upload and processing.",
        "Collaborative tools for second opinions.",
      ],
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "AWS S3"],
      githubUrl: "https://github.com/janedoe/practorvision",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'practorvision-project'),
    },
    {
      title: "MediTract Pro",
      description:
        "A blockchain-based system for securely tracking and managing the pharmaceutical supply chain, ensuring authenticity and reducing counterfeiting.",
      features: [
        "Immutable ledger for drug-related transactions.",
        "Real-time tracking from manufacturer to pharmacy.",
        "QR code-based verification for consumers.",
      ],
      techStack: ["Solidity", "Hardhat", "Next.js", "IPFS", "Node.js"],
      githubUrl: "https://github.com/janedoe/meditract-pro",
      liveUrl: "#",
      image: PlaceHolderImages.find(img => img.id === 'meditract-project'),
    },
  ],
};
