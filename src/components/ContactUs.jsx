const ContactUs = () => {
  return (
    <div className="text-white px-[4vw] py-[3vw]">
      <section
        style={{ direction: "rtl" }}
        className="md:w-[600px] min-h-[70vh] rounded-[10px] font-[helveticaNeue] p-[2vw] border-[1px] border-solid  border-white md:mx-auto"
      >
        <section className="flex flex-col gap-3">
          <label htmlFor="" className="font-bold text-[20px]">
            اسمك الكامل
          </label>
          <input
            type="text"
            className="w-full px-[10px] py-[5px]"
            placeholder="الاسم بالكامل"
          />
        </section>
        <section className="flex flex-col gap-3">
          <label htmlFor="" className="font-bold text-[20px]">
            الايميل
          </label>
          <input
            type="text"
            className="w-full py-[5px] px-[10px]"
            placeholder="اكتب عنوان بريدك الالكتروني"
          />
        </section>
        <section className="flex flex-col gap-3">
          <label htmlFor="" className="font-bold text-[20px]">
            رقم الهاتف
          </label>
          <input
            type="text"
            className="w-full py-[5px] px-[10px]"
            placeholder="رقم الهاتف"
          />
        </section>
        <section className="flex flex-col gap-3">
          <label htmlFor="" className="font-bold text-[20px]">
            وصف الخدمة
          </label>
          <textarea
            name=""
            className="w-full min-h-[200px] p-[10px]"
            id=""
            placeholder="اكتب وصف بسيط للخدمة"
          />
        </section>
        <button className="bg-white text-black block mx-auto px-[24px] py-[7px] mt-[20px] font-bold">
          ارسال
        </button>
      </section>
    </div>
  );
};

export default ContactUs;
