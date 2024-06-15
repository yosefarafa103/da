"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
const AnimateSection = ({ children, title }) => {
  useGSAP(() => {
    gsap.from(".page-t", {
      top: -500,
      ease: "power3.out",
      duration: 1.4,
    });
    gsap.to(".page-t", {
      top: 500,
      ease: "power3.out",
      delay: 2,
      duration: 1,
    });
    gsap.to(".page-content", {
      scaleY: 0,
      duration: 1,
      delay: 3,
    });
  });
  return (
    <motion.section>
      <div className="bg-[#a8a8a8] page-content w-full z-[10000] origin-top fixed top-[100px] flex items-center justify-center h-[90vh] font-[helveticaNeue] text-[10vw]">
        <div className="overflow-hidden">
          <h3 className="font-[900] page-t relative text-white">{title}</h3>
        </div>
      </div>
      <AnimatePresence>
        <motion.section exit={{ scale: 0.5 }}>{children}</motion.section>
      </AnimatePresence>
    </motion.section>
  );
};

export default AnimateSection;
