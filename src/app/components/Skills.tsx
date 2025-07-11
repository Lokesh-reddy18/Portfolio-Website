"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {IconType} from 'react-icons';
import {
    SiJavascript,
    SiTypescript,
    SiMongodb,
    SiNextdotjs,
    SiExpress,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiCplusplus,
    SiJquery,
    SiMysql,
    SiC,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useState, useEffect } from "react";
type SkillType = {
    name: string;
    icon:IconType;
    color: string;
};
const skills = [
    { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Java", icon: DiJava, color: "text-[#007396]" },
    { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "jQuery", icon: SiJquery, color: "text-[#0769AD]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  ];
  

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<SkillType|null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="py-20 bg-white dark:bg-black relative overflow-hidden" id="skills">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    My Skills
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Technologies & tools I work with
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 dark:text-white ">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <skill.icon className={`text-4xl ${skill.color} `} />
                        <Badge variant="secondary" className="mt-3 px-3 py-1 text-sm whitespace-nowrap ">
                            {skill.name}
                        </Badge>

                    </motion.div>
                ))}

            </div>

            {hoveredSkill && (
                <motion.div
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: cursorPos.x + 10,
                        top: cursorPos.y + 10,
                    }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <hoveredSkill.icon className={`text-4xl ${hoveredSkill.color}`} />
                </motion.div>
            )}
        </section>
    );
};

export default Skills;
