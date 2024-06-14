"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurServices = () => {
  useGSAP(() => {
    gsap.from(".page-t", {
      top: -500,
      ease: "power3.out",
      duration: 1.4,
    });
    gsap.to(".page-t", {
      top: 500,
      ease: "power3.out",
      delay: 2,
      duration: 1,
    });
    gsap.to(".page-content", {
      scaleY: 0,
      duration: 1,
      delay: 3,
    });
  }, []);
  return (
    <>
      <div className="bg-[#a8a8a8] page-content w-full z-[10000] origin-top fixed top-[100px] flex items-center justify-center h-[90vh] font-[helveticaNeue] text-[10vw]">
        <div className="overflow-hidden">
          <h3 className="font-[900] page-t relative text-white">خدماتنا</h3>
        </div>
      </div>
      <section
        style={{ direction: "rtl" }}
        className="min-h-[60vh] px-[5vw] text-white"
      >
        <div className="py-[45px] ">
          <h3 className="my-[20px]  font-[900]  font-[helveticaNeue] text-[30px]">
            مــجــالات دبـــــــــــــــــــوس
          </h3>
          <section className="grid grid-cols-4 mt-[50px] md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 gap-[30px]">
            {[
              {
                t: `تصميم الهويات التــــجـــــاريـــــــــــــــة`,
                des: ` يتم تصميمها حسب المجال والتخصص، هوية تتميز بها عن غيرك من المنافسين`,
              },
              {
                t: ` الخطط التسويقية
و الحملات إلاعلانية`,
                des: `الابتكار والإبداع من أهم ركائزنا في الخطط التسويقية والحملات الإعلانية لتصل إلى جمهورك المستهدف.`,
              },
              {
                t: `  التصوير الفوتوغرافي
وتــصــــــــويــــر الفيديــــو`,
                des: `يوجد فريق متخصص في تصوير المنتجات وتصوير مقاطع الفيديو الإعلانية بجودة واحترافية عالية، لنكمِّل جمالية البرواز وتظهر في أبهى حُلَّة.`,
              },
              {
                t: `كتابة المحتوى`,
                des: `كتابة محتوى إبداعي من دون
هدر للوقت والجهد، تعبرعن
فكرتك بشكل صحيح ونعرضها
باسلوب جذاب بما يتناسب مع
معايير شكل المحتوى الخاص.`,
              },
              {
                t: `التواصل الداخلي
للـــــــشــــــركـــــــــات`,
                des: `نسعى إلي ايجاد أفكار مبتكرة ومميزة لتعزيز روح الفريق وتعزيز التواصل الداخلي في الشركة، نحن نضمن تنظيم فعاليات تجمع بين الترفيه والتفاعل الاجتماعي لضمان تجربة لا تنسى للموظفين، اعتمد علينا لجعل تجارب التواصل الداخلي في شركتك تحقق أهدافك وتعزز روح العمل الجماعية.`,
              },
              {
                t: `الافتتاحات
والفعاليات`,
                des: `نفخر بكوننا شركة سعودية رائدة ذات منظور تطويري في مجال صناعة الفعاليات وإدارتها. نبني الحدث ابتداءً من الفكرة، التصميم، وصولاً إلى البناء والتنفيذ، ونهتم بإبراز الهوية لكل عميل من خلال تصميم فعاليات مميزة تعكس طابع المكان وتجذب الجمهور المستهدف. نخلق تجربة زائر ورحلة متكاملة مذهلة للحضور، ونصنع ذكرى تدوم في أذهانهم طويلاً.`,
              },
              {
                t: `إدارة حسابات السوشيال ميديا`,
                des: `سـيـكون فــــريق دبــــوس البوابــــــــــــة الواســــــــــــعة لحصولــــــــــــك على جمـــهـورك الحقيقـي مـــــن خلال التصاميـم الملهمـة والإبداعيـة.`,
              },
            ].map((item) => (
              <div className="flex flex-col gap-[10px]  font-[helveticaNeue]">
                <h3 className="font-[900] text-center text-[20px] mb-[15px] ">
                  {item.t}
                </h3>
                <p className="text-[14px] text-center">{item.des}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default OurServices;
