"use client";

import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaArrowDown } from "react-icons/fa";
import {
  FadeInSection,
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/FadeInSection";
import { TiltCard } from "@/app/components/ui/TiltCard";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-[5%] scroll-mt-24 py-6 lg:mx-40 lg:min-h-[96vh] lg:scroll-mt-32 lg:py-[4vh]"
    >
      <StaggerGroup className="text-center" stagger={0.08}>
        <StaggerItem distance={12}>
          <p className="font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
            Get To Know More
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-1 text-3xl font-bold lg:text-4xl">About Me</h1>
        </StaggerItem>
      </StaggerGroup>

      <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <FadeInSection
          className="flex items-start justify-center lg:justify-start"
          distance={18}
        >
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            <Image
              src="/images/about-pic.jpg"
              alt="Jeffrey Chee"
              fill
              className="rounded-3xl object-cover grayscale-0 transition-all duration-500 hover:grayscale-[15%]"
            />
          </div>
        </FadeInSection>

        <StaggerGroup className="flex flex-col gap-8 lg:max-w-4xl" stagger={0.1}>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:gap-6" stagger={0.08}>
            <StaggerItem>
              <TiltCard className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl border border-[rgb(163,163,163)] p-6 text-center transition-colors duration-300 dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)]">
                <FaBriefcase
                  size={28}
                  className="mb-3 text-foreground"
                  aria-hidden
                />
                <h3 className="mb-1 text-lg font-semibold dark:text-white">
                  Experience
                </h3>
                <p className="text-sm text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
                  FullStack Academy - Software Engineering Immersive Cert.
                </p>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="flex min-h-[170px] flex-col items-center justify-center rounded-3xl border border-[rgb(163,163,163)] p-6 text-center transition-colors duration-300 dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)]">
                <FaGraduationCap
                  size={28}
                  className="mb-3 text-foreground"
                  aria-hidden
                />
                <h3 className="mb-1 text-lg font-semibold dark:text-white">
                  Education
                </h3>
                <p className="text-sm text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
                  Bernard Baruch College - B.Sc. Public Affairs
                </p>
              </TiltCard>
            </StaggerItem>
          </StaggerGroup>

          <StaggerItem>
            <p className="max-w-4xl text-left leading-relaxed text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)] lg:text-[1.05rem]">
              Jeffrey transitioned over a decade&apos;s worth of Real Estate
              Property Management experience to Software Engineering, combining
              his sharp problem-solving skills with keen insights from property
              dealings. He noticed surprising parallels between managing
              properties and coding. In his tech role, he hopes to harness his
              past experience, offering innovative software solutions that
              address practical challenges. With a foundation in real estate and
              a passion for tech, he&apos;s dedicated to creating impactful
              tools that enhance business operations and user experiences.
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to Experience"
        className="absolute bottom-10 right-0 hidden text-foreground transition-transform duration-300 hover:scale-110 dark:invert lg:inline-flex"
      >
        <FaArrowDown size={28} aria-hidden />
      </a>
    </section>
  );
}
