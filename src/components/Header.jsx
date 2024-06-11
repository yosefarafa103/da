import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/Dabous-01.png";
import React from "react";
import ToggleBars from "./ToggleBars";
const Header = () => {
  const linksEn = ["/", "/about-us", "/our-services", "contact-us"];
  return (
    <header
      style={{ direction: "rtl" }}
      className="flex items-center justify-between bg-[#000] px-[22px] md:px-[2.1vw]"
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
          <span className='font-[helveticaNeue]'>عربي</span> / EN
        </Link>
        <section>
          <ToggleBars />
        </section>
      </section>
    </header>
  );
};

export default Header;
