import Header from "./Header";
import Image from "next/image";

import im from "../assets/imgs/Vector-Smart-Object.png";
const HomePage = () => {
  return (
    <>
      {/* <head> */}
      <title>الرئيسية</title>
      {/* </head> */}
      <div className="h-screen px-[4vw] bg-[#000000] p-[1vw] text-white font-[montserrat]">
        <section
          className="mt-[2vw] md:flex items-center gap-1"
          style={{ direction: "rtl" }}
        >
          <div className="font-[helveticaNeue] flex-[1]">
            <div className="my-[20px]">
              <Image
                src={im.src}
                width={150}
                height={100}
                loading="lazy"
                alt=""
              />
            </div>
            <p className="text-[16px]">
              فــي قلــب مدينة عنيــزة ،إحدى المــدن الجميلة في منطقــة القصيــم
              بالمملكــة العربيــة الســعودية، انطلقــت فكــرة مؤسســة دبــوس
              للخدمــات التسويقية.تأسست هذه المؤسسة على يد فريق ً مــن
              المبدعيــن الذيــن يحملون شغفا كبيرا بالعالم
            </p>
            <a
              href=""
              className="mt-[50px] relative font-bold overflow-hidden z-[100] group flex items-center duration-500 transition-all  hover:text-black justify-center w-fit px-[32px] py-[10px] border-solid border-[1px] border-[#fff] rounded-[50px] font-[helveticaNeue]"
            >
              تواصل معنا !
              <span className="absolute block rounded-[inherit] size-[10px] group-hover:size-[100%] left-0 bottom-0  duration-500 transition-all bg-white  -z-[1]"></span>
            </a>
          </div>
          <div className=" flex-[2]"></div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
