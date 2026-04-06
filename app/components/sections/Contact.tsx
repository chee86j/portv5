"use client";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import {
  StaggerGroup,
  StaggerItem,
} from "@/app/components/ui/FadeInSection";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-[5%] flex min-h-[72vh] scroll-mt-24 flex-col items-center justify-center py-8 lg:mx-40 lg:min-h-[96vh] lg:scroll-mt-32 lg:py-[4vh]"
    >
      <StaggerGroup className="text-center" stagger={0.08}>
        <StaggerItem distance={12}>
          <p className="font-semibold text-[rgb(85,85,85)] dark:text-[rgb(187,187,187)]">
            Get in Touch
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-1 text-3xl font-bold lg:text-4xl">Contact Me</h1>
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="mt-8 flex w-full max-w-3xl flex-col justify-center gap-2 rounded-3xl border border-[rgb(163,163,163)] p-4 transition-colors duration-300 dark:border-[rgb(185,185,185)] dark:bg-[rgb(60,60,60)] sm:flex-row sm:flex-wrap"
        stagger={0.08}
      >
        <StaggerItem className="m-2 flex items-center gap-2 sm:m-4" distance={12}>
          <MdEmail
            size={36}
            className="text-foreground dark:text-[rgb(193,193,193)]"
            aria-hidden
          />
          <p className="min-w-0 text-base sm:text-lg">
            <a
              href="mailto:JeffreyChee86@gmail.com"
              className="break-all text-foreground no-underline underline-offset-4 transition-colors duration-300 hover:underline dark:text-[rgb(193,193,193)]"
            >
              JeffreyChee86@gmail.com
            </a>
          </p>
        </StaggerItem>

        <StaggerItem className="m-2 flex items-center gap-2 sm:m-4" distance={12}>
          <FaLinkedin
            size={32}
            className="text-foreground dark:text-[rgb(193,193,193)]"
            aria-hidden
          />
          <p className="text-base sm:text-lg">
            <a
              href="https://www.linkedin.com/in/jeffchee86/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground no-underline underline-offset-4 transition-colors duration-300 hover:underline dark:text-[rgb(193,193,193)]"
            >
              LinkedIn
            </a>
          </p>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
