"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import {
  FadeInSection,
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/FadeInSection";

const CV_URL =
  "https://docs.google.com/document/d/1s4OyNb-xy5mqUtxnz0jidDka9DasU9iN/edit?usp=sharing&ouid=111575396071781908443&rtpof=true&sd=true";

export function Profile() {
  return (
    <section
      id="profile"
      className="mx-[5%] flex min-h-[calc(100vh-5rem)] scroll-mt-24 flex-col items-center justify-center gap-10 pb-10 pt-8 sm:pt-10 xl:mx-40 xl:min-h-[80vh] xl:flex-row xl:gap-20 xl:py-[4vh] xl:scroll-mt-32"
    >
      <FadeInSection
        className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64 md:h-[275px] md:w-[275px] xl:h-[400px] xl:w-[400px]"
        distance={18}
      >
        <Image
          src="/images/profile-pic.jpg"
          alt="Jeffrey Chee profile headshot"
          fill
          priority
          className="rounded-3xl object-cover"
        />
      </FadeInSection>

      <StaggerGroup className="self-center text-center" stagger={0.09}>
        <StaggerItem distance={14}>
          <p className="font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
            Hello, I&apos;m
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl xl:text-5xl">
            Jeffrey Chee
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mb-4 mt-2 text-xl font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)] sm:text-2xl xl:text-[1.75rem]">
            FullStack Developer
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="my-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              <span className="texto flex items-center gap-2">
                <FiDownload aria-hidden />
                Download CV
              </span>
              <FiDownload className="mysvg text-2xl" aria-hidden />
            </a>

            <a
              href="#contact"
              className="inline-flex w-36 items-center justify-center rounded-full border border-[rgb(53,53,53)] bg-[rgb(53,53,53)] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-black dark:border-gray-400 dark:bg-[rgb(60,60,60)] dark:hover:bg-[rgb(40,40,40)] sm:w-32"
            >
              Contact Info
            </a>
          </div>
        </StaggerItem>
        <StaggerItem distance={12}>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/jeffchee86/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-foreground transition-all duration-500 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <FaLinkedin size={32} aria-hidden />
            </a>
            <a
              href="https://github.com/chee86j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-foreground transition-all duration-500 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <FaGithub size={32} aria-hidden />
            </a>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
