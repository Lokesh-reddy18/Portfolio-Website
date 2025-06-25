"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiHtml5,
  SiExpress,
  SiCplusplus,
  SiChessdotcom,
  SiClerk,
  SiLeaflet
} from "react-icons/si";
import { LinkPreview } from "@/components/ui/link-preview";
import { Icon } from "lucide-react";

const projects = [
  {
    title: "Ace Bot AI",
    description:
      "Ace Bot AI is a full-stack web application that uses AI to help users prepare for interviews. It offers personalized interview questions, session management and a responsive interface.",
    image: "/assets/images/acebotai.png", 
    tech: [
      { Icon: SiReact, color: "text-[#61DAFB]" },
      { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
      { Icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { Icon: SiExpress, color: "text-black dark:text-white" },
      { Icon: SiMongodb, color: "text-[#47A248]" },
    ],
    link: "https://github.com/Lokesh-reddy18/Ace-Bot-AI",
  },
  {
    title: "Chess Master",
    description:
      "Chess Master is a full-stack chess application that allows users to play chess online, track their games, and analyze their moves.",
    image: "/assets/images/chessmaster.png", 
    tech: [
        { Icon: SiReact, color: "text-[#61DAFB]" },
        { Icon: SiNodedotjs, color: "text-[#5FA04E]" },
        { Icon: SiExpress, color: "text-black dark:text-white" },
        { Icon: SiMongodb, color: "text-[#47A248]" },
        { Icon: SiTailwindcss, color: "text-[#38BDF8]", },
        { Icon: SiChessdotcom, color: "text-[#38FDFF]" },
    ],
    link: "https://github.com/Lokesh-reddy18/Chess-Master",
  },
  {
    title: "JobQuest - Job Portal",
    description:
      "JobQuest is a full-featured MERN stack job portal where job seekers can search and apply for jobs while recruiters can post and manage listings.",
    image: "/assets/images/jobquest.png", 
    tech: [
        { Icon: SiReact, color: "text-[#61DAFB]" },
        { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
        { Icon: SiNodedotjs, color: "text-[#5FA04E]" },
        { Icon: SiExpress, color: "text-black dark:text-white" },
        { Icon: SiMongodb, color: "text-[#47A248]" },
        { Icon: SiClerk, color: "text-[#666666]" },

    ],
    link: "https://github.com/Lokesh-reddy18/JobQuest",
  },
  {
    title: "Dijkstra Travel Planner",
    description:
      "A C++ implementation of a travel route planner developed as a Data Structures and Algorithms (DSA) project, featuring shortest path calculations and a simple web UI.",
    image: "/assets/images/dijkstratravelplanner.png",
    tech: [
      { Icon: SiCplusplus, color: "text-blue-700" },
      { Icon: SiHtml5, color: "text-[#E34F26]" },
      { Icon: SiLeaflet, color: "text-[#2A9D8F]" },
    ],
    link: "https://github.com/Lokesh-reddy18/Dijkstra-Travel-Planner",
  },
];

const Projects = () => {
  return (
    <section
      className="py-20 bg-white dark:bg-black relative overflow-hidden"
      id="projects"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          <LinkPreview url="https://github.com/Lokesh-reddy18">My Projects</LinkPreview>{" "}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Some of my featured works
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border flex flex-col justify-between">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-black dark:text-white"
              >
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full ">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>

              <div className="flex justify-between items-center sm:mt-8 w-full">
                <div className="flex space-x-3">
                  {project.tech.map(({ Icon, color }, i) => (
                    <Icon key={i} className={`text-2xl ${color}`} />
                  ))}
                </div>

                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;