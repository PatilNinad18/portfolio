import { meta, shopify, starbucks, tesla } from "../assets/images";
import resume from '../assets/icons/resume.svg'
import chemical from '../assets/icons/chemical.svg'
import focus from '../assets/icons/focus.svg'
import forest from '../assets/icons/forest.svg'
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "AI & Decentralized Intern",
        company_name: "BlockseBlock ",
        iconBg: "#accbe1",
        date: "Aug 2025 - Sept 2025",
        points: [
            "Developed an AI-Climate-Simulator using React Three Fiber and Three.js, featuring an interactive 3D Earth with real-time climate metrics and dynamic environmental event simulations.",
            "Engineered Voice Summarize, an AI-powered speech-to-text tool, and a Surprise Trip Planner using LLM-driven recommendation engines to enhance user personalized experiences.",
            "Bridged the gap between decentralized technologies and WebGL to create immersive, data-driven simulations for climate-tech applications.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/PatilNinad18',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ninadpatil18/',
    }
];

export const projects = [
     {
    iconUrl: resume,
    theme: 'btn-back-purple',
    name: 'ResuReader – ATS Resume Analyzer',
    description: 'Engineered a full-stack AI application using React 19, TypeScript, and Puter.js to analyze PDF resumes for ATS compatibility, delivering real-time feedback, keyword optimization, dynamic scoring gauges, secure authentication, and cloud-based storage.',
    // link: 'https://github.com/yourusername/resureader',
  },
  {
    iconUrl: focus,
    theme: 'btn-back-green',
    name: 'Focus Detection System',
    description: 'Built an AI-powered focus monitoring system using YOLOv8, PyTorch, OpenCV, and FastAPI to detect phone usage, writing activity, gaze direction, and drowsiness, generating a real-time Focus Score visualized through a React-based MJPEG dashboard.',
    // link: 'https://github.com/yourusername/focus-detection-system',
  },
  {
    iconUrl: forest,
    theme: 'btn-back-red',
    name: 'Algerian Forest Fires Regression Project',
    description: 'Implemented Linear, Lasso, Ridge, and ElasticNet regression models on the Algerian Forest Fires dataset, performing end-to-end preprocessing, feature engineering, model training, evaluation, and comparative performance analysis.',
    // link: 'https://github.com/yourusername/algerian-forest-fires-regression',
  },
  {
    iconUrl: chemical,
    theme: 'btn-back-blue',
    name: 'Chemical Dataset Analysis & Preprocessing',
    description: 'Conducted large-scale chemical data preprocessing, cleaning, and visualization workflows, collaborating with domain experts to support AI-driven R&D pipelines and improve downstream modeling reliability.',
    // link: 'https://github.com/yourusername/chemical-dataset-analysis',
  }
];