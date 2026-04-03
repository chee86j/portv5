"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import {
  frontEndSkills,
  backEndSkills,
  aiRagSkills,
  type Skill,
} from "@/app/lib/data/skills";

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="skill-item flex min-w-0 items-start gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
      <i className="mt-0.5 flex shrink-0 text-2xl text-foreground" aria-hidden>
        {skill.kind === "icon" ? (
          <skill.Icon />
        ) : (
          <Image
            src={skill.src}
            alt={skill.name}
            width={32}
            height={32}
            className="w-8 h-8 dark:invert"
          />
        )}
      </i>
      <div className="min-w-0">
        <p className="break-words bg-gradient-to-r from-[#ff2600] to-[#00d4d0] bg-clip-text text-base leading-snug text-transparent">
          {skill.name}
        </p>
        <p className="mt-1 bg-gradient-to-r from-[#ff2600] to-[#00d4d0] bg-clip-text text-sm font-medium text-transparent">
          {skill.level}
        </p>
      </div>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="h-full rounded-3xl border border-slate-300 bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:shadow-lg dark:border-slate-500 dark:bg-slate-900 dark:shadow-black/35 sm:p-6">
      <h2 className="text-center text-2xl lg:text-[1.75rem] font-semibold underline mb-8 text-foreground dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-[5%] flex scroll-mt-24 flex-col py-6 lg:mx-40 lg:min-h-[96vh] lg:scroll-mt-32 lg:py-[4vh]"
    >
      <p className="text-center font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
        Explore My
      </p>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mt-1">
        Experience
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        <SkillGroup title="Frontend Development" skills={frontEndSkills} />
        <SkillGroup title="Backend Development" skills={backEndSkills} />
        <SkillGroup title="AI / RAG Systems" skills={aiRagSkills} />
      </div>

      <a
        href="#projects"
        aria-label="Scroll to Projects"
        className="absolute bottom-10 right-0 hidden text-foreground transition-transform duration-300 hover:scale-110 dark:invert lg:inline-flex"
      >
        <FaArrowDown size={28} aria-hidden />
      </a>
    </section>
  );
}
