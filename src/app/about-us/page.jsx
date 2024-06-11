"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
const About = () => {
  useGSAP(() => {
    gsap.from(".text", {
      y: 100,
      stagger: 0.09,
      duration: 1,
    });
  });
  return (
    <>
      <div className="h-[50vh] px-[3.2vw] text-[22px] md:text-[3vw] flex-col text-white font-[helveticaNeue] flex items-center text-center justify-center bg-[#f55048]">
        <section className="w-[70%]">
          <div className="overflow-hidden">
            <div className="relative text">
              خلقنا لننطلق بجانبك من خلال تصميم العلامة التجارية وبنائها
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="relative text">
              واداره صفحات السوشيال ميديا وخدماتها وتصاميمها, لنكون الحليف
              المثالي
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="relative text">للتحول الرقمي الذي تطمح الية</div>
          </div>
        </section>
      </div>
      <div className="h-[50vh] text-white px-[2vw] pt-[1.5vw] text-right font-[helveticaNeue] bg-[#000]">
        <h3 className="md:text-[2.5vw] text-[26px] font-bold">
          {" "}
          نبذه حول ”دبـــــــــــــــــــــــــــــــــــوس{" "}
        </h3>
        <p className="text-[#f7f7f7] mt-[20px] text-[18px] w-[300px] ml-auto">
          فريق سعودي, وخبرات سعوديه متمكنة وقوية, "
          <span>ويا عز مين قصد ربعه</span>", همك همنا وطموحك هو طموحنا, انت
          سلمنا الفكرة وطريقة اخراج مشروعك علينا
        </p>
      </div>
    </>
  );
};

export default About;
