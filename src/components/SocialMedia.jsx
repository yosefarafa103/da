import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <section className="flex flex-col top-1/2 left-0 border-solid border-[2px] border-[#fff] -translate-y-1/2 bg-black fixed w-[60px]  z-[9999]">
      {[<FaTiktok />, <FaXTwitter />, <FaLinkedin />, <FaInstagram />].map(
        (icon) => (
          <span className="size-[60px] flex  items-center text-white justify-center !text-[33px] p-[20px] w-full cursor-pointer hover:bg-[#333] transition-all duration-300">
            {icon}
          </span>
        )
      )}
    </section>
  );
};

export default SocialMedia;
