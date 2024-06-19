import img from "@/assets/imgs/Screenshot_5.png";
import img2 from "@/assets/imgs/d.png";
import img3 from "@/assets/imgs/MATN - LOGO -01.jpg";
import i1 from "@/assets/partners/2BA6643A-ABF9-48E8-97A8-9916DC29422B.png";
import i2 from "@/assets/partners/6F02FB9F-ECF7-44FF-95B7-894EC9C2E662.png";
import i3 from "@/assets/partners/7A31B3FF-AC59-4AF9-AA9B-B3E58F6471F1.png";
import i4 from "@/assets/partners/7F072173-6958-42C8-8586-1F44E7846F7A.png";
import i5 from "@/assets/partners/31BE3356-F318-4777-9E1E-D544BDDCF0E8.png";
import i6 from "@/assets/partners/55B4519F-EB27-4402-8A59-C57FA1B2615F.png";
import i7 from "@/assets/partners/992EF0FD-B9DE-4AA9-B800-E697E889874B.png";
import i8 from "@/assets/partners/1558C788-81ED-4FF9-A7C8-9A2ABE82A4F7.png";
import i9 from "@/assets/partners/4070B8DB-3579-432F-907E-E43704BFBCE6.png";
import i10 from "@/assets/partners/7480A545-DA04-4C67-9E8A-03E41B7B49A4.png";
import i11 from "@/assets/partners/9001C085-CF9D-4857-8492-D4D28A4E182D.png";
import i12 from "@/assets/partners/A5AFF096-511D-4FEE-957D-1EB28D2EFEDD.png";
import i13 from "@/assets/partners/B6A04BC2-0B16-4981-90EB-A96168B7DA2F.png";
import i14 from "@/assets/partners/BCC45F7D-E59F-40B8-86CC-49FF012AE832.png";
import i15 from "@/assets/partners/CE83E967-37D4-42D3-ACD5-902A743EB601.png";
import i16 from "@/assets/partners/CEE2C68D-19B2-467E-94A8-A5CB0A03077F.png";
import i17 from "@/assets/partners/E134A1D0-D9A4-4A27-9F77-0195B35F3252.png";
import i18 from "@/assets/partners/EA97E325-5496-4250-BEC4-85AE1E56A821.png";
import i19 from "@/assets/partners/FAEBA281-F45B-4232-A178-B48687A40573.png";
const Customer = () => {
  return (
    <>
      <title>شركاء التواصل</title>
      {/* <AnimateSection title={`عملائنا`}> */}
      <div className="min-h-[90vh] bg-black py-[40x]">
        <h3 className="text-[5vw] pt-[20px] text-white font-[helveticaNeue] font-[900] text-center">
          شركاء النجاح
        </h3>
        <section className="grid gap-4 sm-[576px]:pl-[100px] grid-partners">
          {[
            i1,
            i2,
            i3,
            i4,
            i5,
            i6,
            i7,
            i8,
            i9,
            i10,
            i11,
            i12,
            i13,
            i14,
            i15,
            i16,
            i17,
            i18,
            i19,
          ].map((el) => (
            <img
              src={el.src}
              className="h-[100px] max-[576px]:mx-auto"
              loading="lazy"
              alt=""
            />
          ))}
        </section>
      </div>
      {/* </AnimateSection> */}
    </>
  );
};

export default Customer;
