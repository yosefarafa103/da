"use client";
import AnimateSection from "@/components/AnimateSection";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <section className="font-[helveticaNeue]">
        {/* <AnimateSection title={`الرئيسية`}> */}
        <HomePage />
        <Footer />

        {/* </AnimateSection> */}
      </section>
    </>
  );
}
