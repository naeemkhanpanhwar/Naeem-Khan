import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaDocker, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiFastapi, SiExpress, SiTailwindcss, SiZod } from "react-icons/si";

export type SkillType = {
    id: number,
    title: string,
    icon: React.ComponentType<{ size?: number; color?: string }>,
    color: string
};

export const skillsData: SkillType[] = [
    {
        id: 1,
        title: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F"
    },
    {
        id: 2,
        title: "ReactJS",
        icon: FaReact,
        color: "#61DAFB"
    },
    {
        id: 3,
        title: "NodeJS",
        icon: FaNodeJs,
        color: "#3C873A"
    },
    {
        id: 4,
        title: "FastAPI",
        icon: SiFastapi,
        color: "#009688"
    },
    {
        id: 5,
        title: "ExpressJS",
        icon: SiExpress,
        color: "#888888"
    },
    {
        id: 6,
        title: "Java",
        icon: FaJava,
        color: "#f89820"
    },
    {
        id: 7,
        title: "Python",
        icon: FaPython,
        color: "#3776AB"
    },
    {
        id: 8,
        title: "Git & GitHub",
        icon: FaGitAlt,
        color: "#F05032"
    },
    {
        id: 9,
        title: "Docker",
        icon: FaDocker,
        color: "#2496ED"
    },
    {
        id: 10,
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8"
    },
    {
        id: 11,
        title: "Zod",
        icon: SiZod,
        color: "#0B7285"
    },
    {
        id: 12,
        title: "(MySQL, MS SQL, MongoDB)",
        icon: FaDatabase,
        color: "#00758F"
    },
];