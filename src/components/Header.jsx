"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/Dabous-01.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import F from "../hooks/toggleHeader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [a, setA] = F();
  useGSAP(() => {
    const tl = gsap.timeline();
    if (!a) {
      tl.to(".nav-bar", {
        height: "100vh",
        duration: 1,
      });
      tl.from(".lnk", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });
      // lnk
    } else {
      tl.to(".nav-bar", {
        height: 0,
        duration: 1,
      });
      tl.from(".lnk", {
        x: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
      });
    }
  }, [a]);
  const linksEn = [
    "/",
    "/about-us",
    "/our-services",
    "contact-us",
    "/our-customer",
  ];
  return (
    <header
      style={{ direction: "rtl" }}
      className="flex fixed w-full justify-between left-0 top-0 z-[99999999999999999999] items-center justify-between bg-[#000] px-[22px] md:px-[2.1vw]"
    >
      <Link href={`/`} className="block w-fit overflow-hidden">
        <img
          src={logo.src}
          loading="lazy"
          className="!h-[100px] !w-[200px] scale-[1.5] object-cover rotate-[90deg]"
          alt="logo"
        />
      </Link>
      <section className="gap-[30px] text-[22px] md:text-[1.5vw] md:flex hidden font-[helveticaNeue] text-white">
        {["الرئيسية", "من نحن", "خدماتنا", "اتصل بنا", "  شركاء النجاح"].map(
          (l, i) => (
            <motion.div key={l} whileTap={{ scale: 0.8 }}>
              <Link
                className="hover:text-[#808080] transition-all duration-300"
                href={linksEn[i]}
              >
                {l}
              </Link>
            </motion.div>
          )
        )}
      </section>
      <section className="text-white flex gap-[15px] items-center md:hidden">
        <section className="block md:hidden">
          <div
            className="text-[20px] cursor-pointer"
            onClick={() => setA((prev) => !prev)}
          >
            {a ? (
              <span>
                <FaBars />
              </span>
            ) : (
              <span>
                <IoClose />
              </span>
            )}
          </div>
        </section>
      </section>
      {/* Header Mobile */}
      <AnimatePresence>
        {!a && (
          <motion.section className="nav-bar origin-top absolute  border-[1px] border-[#bbb] border-solid  md:hidden  h-0 bg-black z-[1000] w-[99.5%] top-full left-1/2 -translate-x-1/2">
            <div className="flex py-[15px] gap-[15px] flex-col pr-[12vw]">
              {[
                "الرئيسية",
                "من نحن",
                "خدماتنا",
                "اتصل بنا",
                "  شركاء النجاح",
              ].map((l, i) => (
                <motion.div
                  key={l}
                  className="lnk"
                  onClick={() => setA((p) => !p)}
                >
                  <Link
                    className="text-white font-[helveticaNeue] hover:text-[#808080] transition-all duration-300 font-bold text-[20px]"
                    href={linksEn[i]}
                  >
                    {l}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Header Mobile */}
    </header>
  );
};

export default Header;
