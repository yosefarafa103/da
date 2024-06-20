import { CiMail } from "react-icons/ci";

const ContactMail = () => {
  return (
    <div>
      <a
        href="mailto:contact@dabous.co"
        className="bg-white px-[30px] py-[8px] font-bold hover:bg-[#ddd] mx-auto my-[15px] w-fit flex items-center gap-4 rounded-[40px]"
        target="_blank"
      >
        <CiMail className="text-black text-[22px]" />
        توصلو معنا عبر الايميل
      </a>
    </div>
  );
};

export default ContactMail;
