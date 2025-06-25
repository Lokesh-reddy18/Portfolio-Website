"use client";
import React from "react";

import { useRouter } from "next/navigation";

import MenuBar from "@/app/components/Menubar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Skills from "./components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import CodingProfiles from "@/app/components/CodingProfiles";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

const Page = () => {
    const router = useRouter();

    const handleLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <>

            <ScrollProgress className="fixed top-0 left-0 w-full" />

            <Hero />
            <Skills />
            <Education />
            <CodingProfiles />
            <Projects />
            <Contact />

            <footer className="dark:bg-black bg-gray-50 text-gray-900 dark:text-white py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left text-md md:text-base">
                    Made with ❤️ by Lokesh Reddy.
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <SiInstagram
                        className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-110"
                        style={{ color: '#E4405F' }}
                        onClick={() => handleLink("https://instagram.com/lokesh_reddy18")}
                        size={20}
                    />
                    <SiLinkedin
                        className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-110"
                        style={{ color: '#0077B5' }}
                        onClick={() => handleLink("https://linkedin.com/in/kolli-lokesh-reddy")}
                        size={20}
                    />
                    <SiGithub
                        className="cursor-pointer hover:opacity-80 transition-transform transform hover:scale-110 text-black dark:text-white"
                        style={{}}
                        onClick={() => handleLink("https://github.com/Lokesh-reddy18")}
                        size={20}
                    />
                </div>
            </footer>
            <MenuBar />
        </>
    );
};

export default Page;
