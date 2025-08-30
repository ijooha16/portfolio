import SectionContainer from "@/components/common/section-container";
import Profile from "./_components/profile";
import Information from "./_components/information";
import { awards, education, experience, language } from "@/data/profile";
import AboutMe from "./_components/about-me";

const About = () => {
  // const info = [education, language, experience, awards];

  return (
    <>
      <SectionContainer className="bg-gradient-to-tr from-primary to-secondary h-[20dvh]" />
      <SectionContainer className="-translate-y-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <Profile />
          <div className="flex flex-col gap-20 md:gap-28">
            <AboutMe />
            <Information data={experience} />
            <Information data={education} />
            <Information data={language} />
            <Information data={awards} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default About;
