"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { TiltCard } from "@/app/components/ui/TiltCard";
import { projects, type Project } from "@/app/lib/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="flex h-full min-h-[560px] w-[82vw] max-w-[320px] shrink-0 snap-start flex-col rounded-3xl border border-[rgb(163,163,163)] bg-[rgb(250,250,250)] p-4 transition-colors duration-300 dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)] sm:min-h-[600px] lg:min-h-[620px] lg:w-[300px]">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="mb-4 h-[190px] w-full rounded-2xl object-cover"
      />

      <h2 className="mx-3 mb-2 text-center text-xl font-semibold text-foreground underline underline-offset-4 dark:text-[rgb(230,230,230)]">
        {project.title}
      </h2>

      <p className="mx-3 mb-6 flex-1 text-center text-sm leading-relaxed text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap justify-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded-full border border-[rgb(163,163,163)] dark:border-[rgb(185,185,185)] text-foreground dark:text-[rgb(230,230,230)] bg-transparent hover:bg-[rgb(53,53,53)] hover:text-white hover:border-white dark:hover:bg-[rgb(80,80,80)] transition-all duration-300"
          >
            Github
          </a>
        )}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded-full border border-[rgb(163,163,163)] dark:border-[rgb(185,185,185)] text-foreground dark:text-[rgb(230,230,230)] bg-transparent hover:bg-[rgb(53,53,53)] hover:text-white hover:border-white dark:hover:bg-[rgb(80,80,80)] transition-all duration-300"
        >
          Demo
        </a>
      </div>
    </TiltCard>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-[5%] flex scroll-mt-24 flex-col py-6 lg:mx-20 lg:min-h-[96vh] lg:scroll-mt-32 lg:py-[4vh] xl:mx-32"
    >
      <p className="text-center font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
        Explore My Recent Work
      </p>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mt-1">
        Projects
      </h1>

      <div className="mt-8 overflow-x-auto pb-6 [scrollbar-gutter:stable]">
        <div className="flex min-w-max snap-x snap-mandatory gap-5 px-1 pb-1 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <a
        href="#contact"
        aria-label="Scroll to Contact"
        className="absolute bottom-10 right-0 hidden text-foreground transition-transform duration-300 hover:scale-110 dark:invert lg:inline-flex"
      >
        <FaArrowDown size={28} aria-hidden />
      </a>
    </section>
  );
}
