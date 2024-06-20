import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
const SocialMedia = ({ dir = "rtl" }) => {
  const social = [
    "https://vt.tiktok.com/ZSYUX3YQy/",
    "https://x.com/dabous_co",
    "https://www.linkedin.com/company/piiin/",
    "https://www.instagram.com/dabous.co",
    "https://api.whatsapp.com/send?phone=966544173484",
  ];
  return (
    <>
      <section
        className={`flex ${
          dir === "rtl"
            ? "flex-col top-1/2 bg-black border-solid border-[2px] border-[#fff]   left-0 fixed -translate-y-1/2 w-[60px] z-[9999]"
            : "sm:w-[60%] mx-auto max-sm:w-[90%]"
        }  `}
      >
        {[
          <FaTiktok />,
          <FaXTwitter />,
          <FaLinkedin />,
          <FaInstagram />,
          <FaWhatsapp />,
        ].map((icon, index) => (
          <a
            href={social[index]}
            target="_blank"
            className="size-[70px] flex  items-center text-white justify-center text-[26px] p-[20px] max-sm:!text-[20px] w-full cursor-pointer hover:bg-[#333] transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </section>
    </>
  );
};

export default SocialMedia;
