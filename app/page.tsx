import { Loader } from "@/app/components/ui/Loader";
import { FadeInSection } from "@/app/components/ui/FadeInSection";
import { Navbar } from "@/app/components/sections/Navbar";
import { Profile } from "@/app/components/sections/Profile";
import { About } from "@/app/components/sections/About";
import { Experience } from "@/app/components/sections/Experience";
import { Projects } from "@/app/components/sections/Projects";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <FadeInSection>
          <Profile />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
