import React from "react";
import SocialMedia from "./SocialMedia";
import ContactMail from "./ContactMail";
const Footer = () => {
  return (
    <footer className="min-h-[20vh] py-[20px] bg-[#222]">
      <section className="relative">
        <SocialMedia dir="asdasds" />
        <ContactMail />
        <div>
          <h3 className="font-bold text-white text-center mt-[20px]">
            جميع الحقوق محفوظة | دبوس {new Date().getFullYear()}
          </h3>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
