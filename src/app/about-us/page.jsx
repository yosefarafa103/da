import TextAniamtionAbout from "@/components/TextAniamtionAbout";
import "../animations.css";
import Features from "@/components/Features";
import AnimateSection from "@/components/AnimateSection";
import DaposWorks from "@/components/DaposWorks";
import SingleWork from "@/components/SingleWork";
const About = () => {
  return (
    <>
    <title>من نحن</title>
      <AnimateSection title={`من نحن`}>
        <section style={{ direction: "rtl" }} className="bg-[#000]">
          <TextAniamtionAbout />
          <Features />
          {/* <DaposWorks>
            <SingleWork workTitle={`ARS_ROASTERY`}>
              <section className="h-full bg-[#D7BEA0]"></section>
            </SingleWork>
            <SingleWork workTitle={`ALMARQAB `}>
              <section className="h-full bg-[#661814]"></section>
            </SingleWork>
            <SingleWork workTitle={`KABSA_STAITION`}>
              <section className="h-full bg-[#FFBD12]"></section>
            </SingleWork>
            <SingleWork workTitle={`ZAY_ALKHAYAL`}>
              <section className="h-full bg-[#362e15]"></section>
            </SingleWork>
          </DaposWorks> */}
        </section>
      </AnimateSection>
    </>
  );
};

export default About;
