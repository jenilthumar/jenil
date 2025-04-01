"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations"; // Assuming animations defined
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer"; // Assuming responsive Footer

const FractionallyPage = () => {
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
          className="hidden lg:flex items-center text-[1.25rem] font-[400] tracking-tight" // Adjusted font weight to match other pages
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
          fractionally
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
          {/* Removed showcase tag */}
          <motion.div
            className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
            whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
          >
            visual design
          </motion.div>
        </motion.div>
        {/* Client Info */}
        <div className="mt-8 lg:mt-[2.5rem]"> {/* Adjusted margin to match original */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:pe-[4rem] text-base lg:text-[1.125rem]">
            <div>
              <div className="text-[#505050] font-[500]">client</div>
              <div className="text-[#1a1a1a] font-[500]">slingshot design (agency work)</div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Cover Image (fn-1) ----- */}
      <div className="mt-12 lg:mt-[4rem]">
         {/* Reduce max-height on mobile */}
        <img
          src="/fn/fn-1.webp"
          className="max-h-[30rem] lg:max-h-[56rem] w-full object-cover"
          alt="Fractionally Cover"
        />
      </div>

      {/* ----- Main Content Image (fn-2) ----- */}
      {/* Use w-full h-auto for this image */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/fn/fn-2.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="Fractionally Main Content"
        />
      </div>

      {/* ----- Next Project ----- */}
      <div className={`lg:w-[45rem] mx-auto ${mobilePadding} ${desktopContentPadding}`}>
        <div className="mt-16 lg:mt-[6rem] cursor-pointer" onClick={() => router.push("/ripen")}>
          <div
            className="text-[#1a1a1a] font-[600] tracking-tight text-[1.75rem] lg:text-[2rem] mt-12 lg:mt-[6rem]" // Adjusted margin
            style={{ lineHeight: "normal" }}
          >
            next project
          </div>
           {/* Image - use w-full h-auto */}
          <img src="/fn/fn-3.webp" className="mt-6 lg:mt-[2rem] w-full h-auto rounded-lg" alt="Ripen Project" /> {/* Added rounded-lg */}
          {/* Title */}
          <div
            className="mt-6 lg:mt-[2rem] text-[1.5rem] lg:text-[2rem] font-[600] tracking-tight" // Removed px
            style={{ lineHeight: "normal" }}
          >
            ripen
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
              deck design
            </motion.div>
            <motion.div
              className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
              whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
            >
              showcase
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ----- Footer ----- */}
      <Footer />
    </div>
  );
};

export default FractionallyPage;