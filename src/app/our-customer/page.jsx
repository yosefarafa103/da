import img from "@/assets/imgs/Screenshot_5.png";
import AnimateSection from "@/components/AnimateSection";
const Customer = () => {
  return (
    <>
      <title>عملائنا</title>
      <AnimateSection title={`عملائنا`}>
        <div className="min-h-[90vh] bg-black py-[40x]">
          <h3 className="text-[5vw] pt-[20px] text-white font-[helveticaNeue] font-[900] text-center">
            شركاء النجاح
          </h3>
          <img
            loading="lazy"
            src={img.src}
            alt="Partners"
            className="w-[90%] mx-auto rounded-[10px] mt-[30px] object-cover md:h-[80vh] h-[70vh]"
          />
        </div>
      </AnimateSection>
    </>
  );
};

export default Customer;
