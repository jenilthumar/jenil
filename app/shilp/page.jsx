"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations"; // Assuming animations defined
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer"; // Assuming responsive Footer

const ShilpPage = () => {
  const router = useRouter();

  // Consistent padding for mobile sections
  const mobilePadding = "px-6";
  const desktopContentPadding = "lg:px-0"; // No padding needed inside max-width container
  const desktopImagePadding = "lg:px-2"; // Slight padding for wider images if needed

  return (
    <div>
      {/* ----- Header ----- */}
      <div className={`flex justify-between items-center lg:max-w-[45rem] w-full mx-auto mt-[2.36rem] ${mobilePadding} lg:px-2`}>
        <motion.h2
          // Adjust font size for mobile
          className="text-[1.75rem] lg:text-[2rem] font-[700] tracking-tight text-[#1a1a1a] cursor-pointer"
          variants={fadeInUp}
          onClick={() => router.push("/")}
        >
          Jenil
        </motion.h2>
        {/* Hide links on mobile */}
        <motion.div
          className="hidden lg:flex items-center text-[1.25rem] font-[400] tracking-tight"
          variants={fadeInUp}
        >
          <Link href={"/aboutme"}>
            <motion.span whileHover={{ color: "#666" }} transition={{ duration: 0.2 }}>
              about me
            </motion.span>
          </Link>
          <Link href={"https://drive.google.com/file/d/1QBjx9aQ_Ioo_DX_yH7EhKnLzRNFx6zXT/view?usp=drive_link"} className="ms-[1.5rem]">
            <motion.span whileHover={{ color: "#666" }} transition={{ duration: 0.2 }}>
              resume
            </motion.span>
          </Link>
          <a href="mailto:jenilthummar3108@gmail.com" className="ms-[1.5rem] bg-[#1a1a1a] text-white py-[0.6rem] px-[1.25rem] rounded-[0.5rem] hover:opacity-80 transition-all text-[1.1rem] font-[550]">
            send mail
          </a>
        </motion.div>
      </div>

      {/* ----- Title Block ----- */}
      <div className={`mt-12 lg:mt-[3.88rem] lg:max-w-[45rem] w-full mx-auto ${mobilePadding} ${desktopContentPadding}`}>
        <motion.p
          // Adjust font size and margin for mobile
          className="mt-6 lg:mt-[2.25rem] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          style={{ lineHeight: "normal" }}
          variants={fadeInUp}
        >
          shilp
        </motion.p>
        {/* Tags */}
        <motion.div
          // Adjust margin and tag size/padding for mobile
          className="mt-4 lg:mt-[1.5rem]"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
        >
          <motion.div
            className={`p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
            whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
          >
            website design
          </motion.div>
          {/* Removed showcase tag as it wasn't in the code */}
          <motion.div
            className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
            whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
          >
            visual design
          </motion.div>
        </motion.div>
        {/* Client Info */}
        <div className="mt-8 lg:mt-[2rem]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:pe-[4rem] text-base lg:text-[1.125rem]">
            <div>
              <div className="text-[#464646] font-[500]">client</div>
              <div className="text-[#1a1a1a] font-[500]">shilp</div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Cover Image (sh-1) ----- */}
      <div className="mt-12 lg:mt-[4rem]">
         {/* Reduce max-height on mobile */}
        <img
          src="/shilp/sh-1.webp"
          className="max-h-[30rem] lg:max-h-[56rem] w-full object-cover"
          alt="Shilp Cover"
        />
      </div>

      {/* ----- Context Section ----- */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopContentPadding}`}>
        {/* Adjusted font weight on title */}
        <div className="text-[#1a1a1a] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight">context</div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          Shilp is a digital product agency.
        </div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          The concept revolves around creating a website that represents the company's vision, providing prospective clients with insights into the services offered and the work accomplished. This is a marketing website designed with user-friendly navigation in mind, utilizing a grid design to effectively present the content. The desired aesthetic is bold and precise.
        </div>
      </div>

      {/* ----- Image Sections (sh-2 to sh-7) ----- */}
      {/* Use w-full h-auto for these as they seem like full screenshots */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-2.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 2" />
      </div>
      <div className={`mt-8 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-3.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 3" />
      </div>
      <div className={`mt-8 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-4.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 4" />
      </div>
      <div className={`mt-8 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-5.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 5" />
      </div>
      <div className={`mt-8 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-6.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 6" />
      </div>
      <div className={`mt-8 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img src="/shilp/sh-7.webp" className="w-full h-auto object-cover rounded-lg" alt="Shilp Screenshot 7" />
      </div>

      {/* ----- Conclusion Paragraph ----- */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopContentPadding}`}>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          Learned a lot about user experience(UX), navigation, website design and design system. Collaborated with a developer and got good insights of developers' perspective on website design and development, overall amazing experience and insights crafting this website and content.
        </div>
      </div>

      {/* ----- Next Project ----- */}
      <div className={`lg:w-[45rem] mx-auto ${mobilePadding} ${desktopContentPadding}`}>
        <div className="mt-16 lg:mt-[6rem] cursor-pointer" onClick={() => router.push("/fractionally")}>
          <div
            className="text-[#1a1a1a] font-[600] tracking-tight text-[1.75rem] lg:text-[2rem] mt-12 lg:mt-[6rem]" // Adjusted margin
            style={{ lineHeight: "normal" }}
          >
            next project
          </div>
           {/* Image - use w-full h-auto */}
          <img src="/shilp/sh-8.webp" className="mt-6 lg:mt-[2rem] w-full h-auto rounded-lg" alt="Fractionally Project" /> {/* Added rounded-lg */}
          {/* Title */}
          <div
            className="mt-6 lg:mt-[2rem] text-[1.5rem] lg:text-[2rem] font-[600] tracking-tight" // Removed px
            style={{ lineHeight: "normal" }}
          >
            fractionally
          </div>
          {/* Tags */}
          <motion.div
            className="mt-4 lg:mt-[1.5rem]" // Removed px
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
          >
             {/* Adjust tag size/padding for mobile */}
            <motion.div
              className={`p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
              whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
            >
              website design
            </motion.div>
            {/* Removed showcase tag */}
            <motion.div
              className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
              whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
            >
              visual design
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ----- Footer ----- */}
      <Footer />
    </div>
  );
};

export default ShilpPage;