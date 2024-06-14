import Header from "./Header";
import Image from "next/image";

import im from "../assets/imgs/Vector-Smart-Object.png";
import img1 from "@/assets/imgs/1+++.png";
import img2 from "@/assets/imgs/1.png";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <title>الرئيسية</title>
      <meta name="description" content="دبوس, وكالة دبوس , تسويق" />
      <meta
        name="description"
        content="كتابة المحتوي, تصميم الهوية التجارية , والتصوير الفوتوغرافي"
      />
      <div className="min-h-screen pr-[4vw] bg-[#000000] p-[1vw] text-white font-[montserrat]">
        <section
          className="mt-[2vw] md:flex  items-center gap-10"
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
              {/* فــي قلــب مدينة عنيــزة ،إحدى المــدن الجميلة في منطقــة القصيــم
              بالمملكــة العربيــة الســعودية، انطلقــت فكــرة مؤسســة دبــوس
              للخدمــات التسويقية.تأسست هذه المؤسسة على يد فريق ً مــن
              المبدعيــن الذيــن يحملون شغفا كبيرا بالعالم */}
              احنا وكالة تسويق انطلقنا عام 2023 ودخلنا هذا المجال من اوسع ابوابة
              نعمل علي تصميم الهوية التجارية وكتابة المحتوي وتنظيم الفعاليات
              الداخليه للشركات والتصوير الفوتوغرافي لنجعل من صور منتجاتك قصه
              تحكي بفريق من مصوري ومخرجي دبوس حيث نجمع بين التوثيق والابداع
              بجانب من اعداد الافتتاحات والفعاليات .. يعني مزيج من العصف الذهني,
              من الاخذ بعين الاعتبار ان رضا عميلنا هو الاهم
            </p>
            <Link
              href="/contact-us"
              className="mt-[50px] relative font-bold overflow-hidden z-[100] group flex items-center duration-500 transition-all  hover:text-black justify-center w-fit px-[32px] py-[10px] border-solid border-[1px] border-[#fff] rounded-[50px] font-[helveticaNeue]"
            >
              تواصل معنا !
              <span className="absolute block rounded-[inherit] size-[10px] group-hover:size-[100%] left-0 bottom-0  duration-500 transition-all bg-white  -z-[1]"></span>
            </Link>
          </div>
          <div className="relative min-h-[50vh] md:min-h-[90vh] flex-[2]">
            <Image
              width={100}
              height={100}
              className="absolute object-cover w-[60%] h-full left-0 top-0"
              src={img1.src}
              alt="land_img_1"
            />
            <img
              loading="lazy"
              className="absolute w-[60%] left-[30%] h-[80%] top-1/2 object-cover -translate-y-1/2"
              src={img2.src}
              alt="land_img_2"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
