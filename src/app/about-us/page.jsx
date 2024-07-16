import TextAniamtionAbout from "@/components/TextAniamtionAbout";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Script from "next/script";
const About = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6XXC586WZQ"
        async
      />
      <Script>
        window.dataLayer = window.dataLayer || []; window.dataLayer.push('js',
        new Date()) window.dataLayer.push('config', 'G-6XXC586WZQ')
      </Script>
      <title>من نحن</title>
      {/* <AnimateSection title={`من نحن`}> */}
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
      {/* </AnimateSection> */}
      <Footer />
    </>
  );
};

export default About;
