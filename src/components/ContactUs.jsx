"use client";
import { useState } from "react";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = () => {
    console.log(username, message);
  };
  return (
    <div className="text-white px-[4vw] py-[3vw]">
      <form
        onSubmit={onSubmit}
        style={{ direction: "rtl" }}
        className="md:w-[600px] min-h-[70vh] rounded-[10px] font-[helveticaNeue] p-[2vw] border-[1px] border-solid  border-white md:mx-auto"
      >
        <section className="flex input-form flex-col gap-3">
          <label htmlFor="" className="font-bold text-[20px]">
            اسمك الكامل
          </label>
          <input
            required
            type="text"
            className="w-full px-[10px] py-[5px] rounded-[5px] outline-none text-black"
            placeholder="الاسم بالكامل"
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className="flex input-form flex-col gap-3 mt-[10px]">
          <label htmlFor="" className="font-bold text-[20px]">
            الايميل
          </label>
          <input
            required
            type="email"
            className="w-full py-[5px] px-[10px] rounded-[5px] outline-none text-black"
            placeholder="اكتب عنوان بريدك الالكتروني"
          />
        </section>
        <section className="flex input-form flex-col gap-3 mt-[10px]">
          <label htmlFor="" className="font-bold text-[20px]">
            رقم الهاتف
          </label>
          <input
            type="number"
            required
            className="w-full py-[5px] rounded-[5px] outline-none text-black px-[10px]"
            placeholder="+966 xxx xxx xxx"
          />
        </section>
        <section className="flex input-form flex-col gap-3 mt-[10px]">
          <label htmlFor="" className="font-bold text-[20px]">
            وصف الخدمة
          </label>
          <textarea
            name=""
            className="w-full min-h-[200px] p-[10px] rounded-[5px] outline-none text-black"
            id=""
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" اكتب وصف بسيط للخدمة يلي تبيها"
          />
        </section>
        <button className="bg-white text-black block mx-auto px-[24px] py-[7px] mt-[20px] font-bold">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
