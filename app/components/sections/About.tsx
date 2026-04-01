"use client";

import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaArrowDown } from "react-icons/fa";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-[5%] scroll-mt-24 py-6 lg:mx-40 lg:min-h-[96vh] lg:scroll-mt-32 lg:py-[4vh]"
    >
      <p className="text-center font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
        Get To Know More
      </p>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mt-1">
        About Me
      </h1>

      <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] lg:items-center lg:gap-16">
        {/* Photo */}
        <div className="flex items-start justify-center lg:justify-start">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            <Image
              src="/images/about-pic.jpg"
              alt="Jeffrey Chee"
              fill
              className="object-cover rounded-3xl grayscale-0 hover:grayscale-[15%] transition-all duration-500"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-8 lg:max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            <div className="flex min-h-[170px] flex-col items-center justify-center text-center p-6 rounded-3xl border border-[rgb(163,163,163)] dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)] transition-colors duration-300">
              <FaBriefcase
                size={28}
                className="mb-3 text-foreground"
                aria-hidden
              />
              <h3 className="font-semibold text-lg mb-1 dark:text-white">
                Experience
              </h3>
              <p className="text-sm text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
                FullStack Academy — Software Engineering Immersive Cert.
              </p>
            </div>

            <div className="flex min-h-[170px] flex-col items-center justify-center text-center p-6 rounded-3xl border border-[rgb(163,163,163)] dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)] transition-colors duration-300">
              <FaGraduationCap
                size={28}
                className="mb-3 text-foreground"
                aria-hidden
              />
              <h3 className="font-semibold text-lg mb-1 dark:text-white">
                Education
              </h3>
              <p className="text-sm text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
                Bernard Baruch College — B.Sc. Public Affairs
              </p>
            </div>
          </div>

          <p className="max-w-4xl text-left text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)] leading-relaxed lg:text-[1.05rem]">
            Jeffrey transitioned over a decade&apos;s worth of Real Estate
            Property Management experience to Software Engineering, combining
            his sharp problem-solving skills with keen insights from property
            dealings. He noticed surprising parallels between managing
            properties and coding. In his tech role, he hopes to harness his
            past experience, offering innovative software solutions that address
            practical challenges. With a foundation in real estate and a passion
            for tech, he&apos;s dedicated to creating impactful tools that
            enhance business operations and user experiences.
          </p>
        </div>
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
