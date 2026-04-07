"use client";

import Image from "next/image";
import {
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/FadeInSection";
import {
  frontEndSkills,
  backEndSkills,
  aiRagSkills,
  type Skill,
} from "@/app/lib/data/skills";

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="skill-item flex min-w-0 items-start gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-slate-100 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:hover:bg-slate-800">
      <i className="mt-0.5 flex shrink-0 text-2xl text-foreground" aria-hidden>
        {skill.kind === "icon" ? (
          <skill.Icon />
        ) : (
          <Image
            src={skill.src}
            alt={skill.name}
            width={32}
            height={32}
            className="h-8 w-8 dark:invert"
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
      <h2 className="mb-8 text-center text-2xl font-semibold text-foreground underline dark:text-white xl:text-[1.75rem]">
        {title}
      </h2>
      <StaggerGroup
        className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6"
        stagger={0.04}
      >
        {skills.map((skill) => (
          <StaggerItem key={skill.name} distance={10} duration={0.3}>
            <SkillItem skill={skill} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-[5%] flex scroll-mt-24 flex-col py-6 pb-14 xl:mx-40 xl:min-h-[96vh] xl:scroll-mt-32 xl:py-[4vh] xl:pb-20"
    >
      <StaggerGroup className="text-center" stagger={0.08}>
        <StaggerItem distance={12}>
          <p className="font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
            Explore My
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-1 text-3xl font-bold xl:text-4xl">Experience</h1>
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="mt-8 grid gap-6 xl:grid-cols-2 2xl:grid-cols-3"
        stagger={0.12}
      >
        <StaggerItem>
          <SkillGroup title="Frontend Development" skills={frontEndSkills} />
        </StaggerItem>
        <StaggerItem>
          <SkillGroup title="Backend Development" skills={backEndSkills} />
        </StaggerItem>
        <StaggerItem>
          <SkillGroup title="AI / RAG Systems" skills={aiRagSkills} />
        </StaggerItem>
      </StaggerGroup>

      <div className="mt-8 flex justify-center xl:mt-10 xl:justify-end">
        <a
          href="#projects"
          aria-label="Scroll to Projects"
          className="inline-flex text-foreground transition-transform duration-300 hover:translate-y-1 dark:text-white"
        >
          <Image
            src="/icons/arrow.png"
            alt=""
            width={32}
            height={32}
            aria-hidden
            className="h-8 w-8 dark:invert"
          />
        </a>
      </div>
    </section>
  );
}
