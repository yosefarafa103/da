"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/Dabous-01.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import F from "../hooks/toggleHeader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const [a, setA] = F();
  useGSAP(() => {
    const tl = gsap.timeline();
    if (!a) {
      tl.to(".nav-bar", {
        height: 230,
        duration: 1,
      });
      tl.from(".lnk", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
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
  const linksEn = ["/", "/about-us", "/our-services", "contact-us"];
  console.log(a);
  return (
    <header
      style={{ direction: "rtl" }}
      className="flex relative items-center justify-between bg-[#000] px-[22px] md:px-[2.1vw]"
    >
      <Link href={`/`} className="block w-fit overflow-hidden">
        <Image
          src={logo.src}
          loading="lazy"
          width={300}
          height={100}
          className="!h-[100px] !w-[200px] scale-[1.5] object-cover rotate-[90deg]"
          alt="logo"
        />
      </Link>
      <section className="gap-[30px] text-[22px] md:text-[1.5vw] md:flex hidden font-[helveticaNeue] text-white">
        {["الرئيسية", "من نحن", "خدماتنا", "اتصل بنا"].map((l, i) => (
          <Link key={l} href={linksEn[i]}>
            {l}
          </Link>
        ))}
      </section>
      <section className="text-white flex gap-[15px] items-center">
        <Link href={`/en`} className="font-[montserrat] text-[22px] font-bold">
          <span className="font-[helveticaNeue]">عربي</span> / EN
        </Link>
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
      {!a && (
        <section className="nav-bar origin-top absolute  border-[1px] border-[#bbb] border-solid  md:hidden  h-0 bg-black z-[1000] w-[99.5%] top-full left-1/2 -translate-x-1/2">
          <div className="flex py-[15px] gap-[15px] flex-col pr-[12vw]">
            {["الرئيسية", "من نحن", "خدماتنا", "اتصل بنا"].map((l, i) => (
              <div key={l} className="lnk" onClick={() => setA((p) => !p)}>
                <Link
                  className="text-white hover:text-[#808080] transition-all duration-300 font-bold text-[20px]"
                  href={linksEn[i]}
                >
                  {l}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Header Mobile */}
    </header>
  );
};

export default Header;
