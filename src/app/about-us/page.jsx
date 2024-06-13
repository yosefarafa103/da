import TextAniamtionAbout from "@/components/TextAniamtionAbout";
import "../animations.css";
import Features from "@/components/Features";
const About = () => {
  return (
    <>
      <section style={{ direction: "rtl" }} className="bg-[#000]">
        <TextAniamtionAbout />
        <Features />
      </section>
    </>
  );
};

export default About;
