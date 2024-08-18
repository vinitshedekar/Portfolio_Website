"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Github } from 'lucide-react';
import Image from "next/image";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        <div
          className={
            "absolute left-0 top-0 h-screen w-full dark:bg-[#0000007c]"
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
        >
          <source src="/layout8.mp4" />
        </video>
        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.span
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className="mb-10 text-start font-extrabold"
              >
                Hey!
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Vinit Shedekar`} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-[#bfc6cf] hover:text-black hover:dark:text-white dark:hover:bg-[#282828] sm:w-auto"
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Contact me here</span>
              </a>

              <a
                className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-[#bfc6cf] dark:bg-white/10 dark:text-white dark:hover:bg-[#282828] sm:w-auto"
                href="/Vinit_resume.pdf"
                download
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-2">
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-[#bfc6cf] hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-[#282828]"
                  href="https://www.linkedin.com/in/vinit453/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-[#bfc6cf] hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-[#282828]"
                  href="https://github.com/vinitshedekar"
                  target="_blank">
                  <Github />
                </a>
                  
                  {/* <Image
                    width={25}
                    height={25}
                    src={"/svgs/github1.svg"}
                    alt="github icon"
                  /> */}
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
