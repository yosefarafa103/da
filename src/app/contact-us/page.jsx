import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const Contact = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6XXC586WZQ"
        async
      />
      <Script>
        window.dataLayer = window.dataLayer || []; dataLayer.push('js', new
        Date()) dataLayer.push('config', 'G-6XXC586WZQ')
      </Script>
      {/* <SocialMedia /> */}
      <title>تواصل معنا</title>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
