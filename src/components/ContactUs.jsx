"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);
  const form = useRef();
  const inp = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  const inp5 = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(inp.current?.value);
    inp2.current.value = "";
    inp3.current.value = "";
    inp4.current.value = "";
    inp5.current.value = "";
    setIsSend(true);
    // console.log(
    //   `username: ${username}\n email: ${email}\n phone: ${phone}\n message: ${message}`
    // );
    try {
      emailjs
        .sendForm("service_twcn0da", "template_h0skuok", form.current, {
          publicKey: "s5gIhoSR1r2L4RLa0",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsSend(false);
    }, 5000);
  }, [isSend]);
  return (
    <>
      <div className="text-white relative px-[4vw] py-[3vw]">
        <AnimatePresence mode="popLayout">
          {isSend && (
            <motion.section
              layout
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="border-solid border-[#eee] w-[85%] p-[20px] bg-black border-[2px] flex items-center justify-center py-[14px] left-1/2  fixed !-translate-x-1/2 top-[100px] md:w-[600px] px-[20px] mx-auto mb-[30px] rounded-[10px] font-[helveticaNeue]"
            >
              <motion.div
                className="w-[100%] absolute h-[5px] bg-white left-0 -bottom-3"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5 }}
              />
              تم ارسال الرسالة بنجاح
            </motion.section>
          )}
        </AnimatePresence>
        <form
          ref={form}
          onSubmit={(e) => onSubmit(e)}
          style={{ direction: "rtl" }}
          className="md:w-[600px] px-[20px] min-h-[70vh] rounded-[10px] font-[helveticaNeue] p-[2vw] border-[1px] border-solid  border-white md:mx-auto"
        >
          <section className="opacity-0">
            <input
              ref={inp}
              type="text"
              name="message"
              className="text-black w-full"
              value={`username: ${username}\n email: ${email}\n phone: ${phone}\n message: ${message}`}
            />
            <input
              type="text"
              name="from_name"
              className="text-black w-full"
              value={username}
            />
          </section>
          <section className="flex input-form flex-col gap-3">
            <label htmlFor="" className="font-bold text-[20px]">
              اسمك الكامل
            </label>
            <input
              required
              type="text"
              ref={inp2}
              name="from_name"
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
              type="email"
              required
              ref={inp3}
              onChange={(e) => setEmail(e.target.value)}
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
              ref={inp4}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full py-[5px] rounded-[5px] outline-none text-black px-[10px]"
              placeholder="+966 xxx xxx xxx"
            />
          </section>
          <section className="flex input-form flex-col gap-3 mt-[10px]">
            <label htmlFor="" className="font-bold text-[20px]">
              وصف الخدمة
            </label>
            <textarea
              className="w-full min-h-[200px] p-[10px] rounded-[5px] outline-none text-black"
              id=""
              ref={inp5}
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب وصف بسيط للخدمة"
            />
          </section>
          <button
            onClick={onSubmit}
            className={`bg-white text-black block mx-auto px-[24px] py-[7px] mt-[20px] font-bold ${
              isSend && "pointer-events-none bg-white/15"
            }`}
          >
            ارسال
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactUs;
