"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useInView } from "framer-motion";

const TextAniamtionAbout = () => {
  const ref1 = useRef(null);
  const isSectionInView = useInView(ref1, { once: true });
  useGSAP(() => {
    gsap.from(".text", {
      y: 100,
      stagger: 0.09,
      duration: 1.5,
      delay: 3.4,
    });
    if (isSectionInView) {
      gsap.from(".title", {
        y: 100,
        duration: 1,
      });
      gsap.fromTo(
        ".wraper1",
        {
          xPercent: -100,
        },
        {
          duration: 90,
          repeat: -1,
          xPercent: 100,
        }
      );
      gsap.fromTo(
        ".wraper2",
        {
          xPercent: 100,
        },
        {
          duration: 90,
          repeat: -1,
          xPercent: -100,
        }
      );
      gsap.fromTo(
        ".cont div",
        {
          xPercent: 100,
        },
        {
          duration: 100,
          xPercent: -100,
          repeat: -1,
        }
      );
    }
    //
  }, [isSectionInView]);
  return (
    <>
      {/* <div className="h-[70vh]  px-[3.2vw] text-[22px] md:text-[3vw] flex-col text-white font-[helveticaNeue] flex items-center text-center justify-center bg-[#a8a8a8]">
        <section className="w-[70%]">
          <div className="overflow-hidden">
            <div className="relative text">
              خلقنا لننطلق بجانبك من خلال تصميم العلامة التجارية
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
      </div> */}
      <div className="h-[50vh] text-white px-[2vw] pt-[1.5vw] flex  justify-center flex-col text-right font-[helveticaNeue] bg-[#000]">
        <div className="overflow-hidden">
          <h3 className="md:text-[2.5vw] title text-[26px] whitespace-nowrap relative font-bold">
            نبذه حول ”دبـــــــــــــــــــــــــــــــــــوس
          </h3>
        </div>
        <div
          ref={ref1}
          className="text-[#f7f7f7] txts mt-[20px] text-[18px] w-[300px] ml-auto"
        >
          <div className="whitespace-nowrap overflow-hidden">
            <div className="title">
              فريق سعودي, وخبرات سعوديه متمكنة وقوية, "
            </div>
          </div>
          <div className="overflow-hidden">
            <span className="text-gradient block title">
              ويا عز مين قصد ربعه ", همك همنا
            </span>
          </div>
          <div className="overflow-hidden">
            <div className="title">
              وطموحك هو طموحنا, انت سلمنا الفكرة وطريقة اخراج مشروعك علينا
            </div>
          </div>
        </div>
      </div>
      <div className="h-[90vh] overflow-x-hidden relative mt-[50px] md:items-center md:justify-end flex text-white bg-[#000]">
        <section className="flex h-[60%]  md:border-t-[1px] md:border-b-[1px] w-full md:border-b-[#bbbbbb26] md:border-b-solid pb-[25px] border-t-[#bbbbbb26] border-t-solid overflow-hidden flex-row-reverse justify-between items-end">
          <section className="flex flex-1 flex-col gap-3">
            <div className="flex flex-col gap-3 max-md:items-center">
              <h3 className="font-bold text-[28px] md:text-[2.3vw]">الرؤية</h3>
              <p className="w-[70%] leading-[2] font-semibold ">
                نسعى جاهدين لتقديم خدمات كاملة متميزة تلبي تطلعاتكم وتفوق
                توقعاتكم.
              </p>
            </div>
            <div className="flex flex-col gap-3 max-md:items-center">
              <h3 className="font-bold text-[28px] md:text-[2.3vw]">المهمة</h3>
              <p className="w-[70%] leading-[2] font-semibold">
                نجمع بين المنهجية والخبرة. الابداع واإلاتقان والحروف والكلام.
                الي أن تصل بك الي النجاح بإتمام.
              </p>
            </div>
          </section>
          <section className="flex max-md:hidden flex-col flex-1 rotate-[90deg]">
            <div
              className="uppercase mx-[2vw] text-[30px] wraper1 md:text-[8vw] rotate-[180deg] !text-transparent font-[900]"
              style={{ WebkitTextStroke: "1px #fff " }}
            >
              Dabous
            </div>
            <div
              className="uppercase text-[30px] md:text-[8vw] wraper2 !text-transparent font-[900]"
              style={{ WebkitTextStroke: "1px #fff " }}
            >
              Dabous
            </div>
          </section>
          <section className="flex md:hidden absolute top-0 items-center cont gap-[30px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={Math.random() * item}
                className="uppercase text-[85px] leading-[1] !text-transparent transition-all  hover:!text-white font-[900]"
                style={{ WebkitTextStroke: "1px #fff " }}
              >
                Dabous
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default TextAniamtionAbout;
