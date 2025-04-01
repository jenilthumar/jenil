"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations"; // Assuming animations defined
import { useRouter } from "next/navigation";

import { Footer } from "@/components/footer"; // Assuming responsive Footer

const VeriprodPage = () => {
  const router = useRouter();

  // Consistent padding for mobile sections
  const mobilePadding = "px-6";
  const desktopPadding = "lg:px-0"; // No padding needed inside max-width container

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
          {/* Use appropriate tag (a for external/mailto, Link for internal) */}
          <a href="mailto:jenilthummar3108@gmail.com" className="ms-[1.5rem] bg-[#1a1a1a] text-white py-[0.6rem] px-[1.25rem] rounded-[0.5rem] hover:opacity-80 transition-all text-[1.1rem] font-[550]">
            send mail
          </a>
        </motion.div>
      </div>

      {/* ----- Title Block ----- */}
      <div className={`mt-12 lg:mt-[3.88rem] lg:max-w-[45rem] w-full mx-auto ${mobilePadding} ${desktopPadding}`}>
        <motion.p
          // Adjust font size and margin for mobile
          className="mt-6 lg:mt-[2.25rem] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          style={{ lineHeight: "normal" }}
          variants={fadeInUp}
        >
          what if you never have to remember when your products are expiring?
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
            product design
          </motion.div>
          <motion.div
            className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
            whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
          >
            showcase
          </motion.div>
        </motion.div>
        {/* Client/Model Info */}
        <div className="mt-8 lg:mt-[2rem]">
          {/* Stack vertically on mobile */}
          <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:pe-[4rem] text-base lg:text-[1.125rem]">
            <div>
              <div className="text-[#464646] font-[500]">client</div>
              <div className="text-[#1a1a1a] font-[500]">concept project</div>
            </div>
            <div>
              <div className="text-[#464646] font-[500]">model</div>
              <div className="text-[#1a1a1a] font-[500]">app</div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Cover Image ----- */}
      <div className="mt-12 lg:mt-[4rem]">
         {/* Reduce max-height on mobile */}
        <img
          src="/vp/veriprod-c-i.webp"
          className="max-h-[30rem] lg:max-h-[56rem] w-full object-cover"
          alt="Veriprod Cover Image"
        />
      </div>

      {/* ----- Context Section ----- */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopPadding}`}>
        <div className="text-[#1a1a1a] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight">context</div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          Veriprod was created because I was constantly forgetting about the
          expiry dates of products I bought and then forgetting about it after
          purchasing, and it's not just me; it's a universal problem; no one can
          actually keep track of product expiry dates when there are dozens of
          things we buy every now and then.
        </div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          My main focus in this project was to create minimal and to-the-point
          UI/UX. ZERO BLUFF! Keeping the app as simple to use as possible for
          all types of users. When developing the app, I kept time in mind at
          all times.
        </div>
      </div>

      {/* ----- Image Section 1 ----- */}
      <div className="mt-12 lg:mt-[4rem]">
         {/* Reduce max-height on mobile */}
        <img
          src="/vp/s1.webp"
          className="max-h-[30rem] lg:max-h-[56rem] w-full object-cover"
          alt="Veriprod Screenshot 1"
        />
      </div>

      {/* ----- Goal Section ----- */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopPadding}`}>
        <div className="text-[#1a1a1a] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight">goal</div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          The main and only goal was to create an app that keep track of the
          expiry date of a product with minimal effort.{" "}
        </div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          Veriprod's main goal, broken down into small steps:{" "}
        </div>
      </div>

      {/* ----- Image Section 2 ----- */}
       {/* Use w-full h-auto within constrained parent */}
      <div className={`mt-8 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopPadding}`}>
        <img
          src="/vp/s2.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg for consistency
          alt="Veriprod Goals"
        />
      </div>

      {/* ----- User Flow Section ----- */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopPadding}`}>
        <div className="text-[#1a1a1a] text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight">
          user flow & information architecture
        </div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-base lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          The goal of this exercise is to comprehend the user journey from the
          beginning to the end of the process. It also aided us in the creation
          of the information architecture.{" "}
        </div>
         {/* Adjust font size, margin, and leading */}
        <div className="text-[#1a1a1a] text-sm lg:text-[1.25rem] font-[500] mt-4 lg:mt-[1.5rem] leading-normal">
          Add a product {" -> "} Add photo of product {" -> "} Add name {" -> "} Add expiry date{" "}
        </div>
      </div>

      {/* ----- Image Section 3 ----- */}
      {/* Use w-full h-auto within constrained parent */}
      <div className={`mt-8 lg:mt-[4rem] max-w-[45rem] mx-auto w-full ${mobilePadding} ${desktopPadding}`}>
        <img
          src="/vp/s3.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="Veriprod User Flow"
        />
      </div>

      {/* ----- Image Section 4 ----- */}
      <div className="mt-12 lg:mt-[4rem]">
         {/* Reduce max-height on mobile */}
        <img
          src="/vp/s4.webp"
          className="max-h-[30rem] lg:max-h-[56rem] w-full object-cover"
          alt="Veriprod Screenshot 4"
        />
      </div>

      {/* ----- Next Project ----- */}
      <div className={`lg:w-[45rem] mx-auto ${mobilePadding} ${desktopPadding}`}>
        <div className="mt-16 lg:mt-[6rem] cursor-pointer" onClick={() => router.push("/wheatsville")}>
          <div
            className="text-[#1a1a1a] font-[600] tracking-tight text-[1.75rem] lg:text-[2rem] mt-12 lg:mt-[6rem]" // Adjusted margin
            style={{ lineHeight: "normal" }}
          >
            next project
          </div>
           {/* Image - use w-full h-auto */}
          <img src="/vp/s5.webp" className="mt-6 lg:mt-[2rem] w-full h-auto rounded-lg" alt="Wheatsville Coop Project" /> {/* Added rounded-lg */}
          {/* Title */}
          <div
            className="mt-6 lg:mt-[2rem] text-[1.5rem] lg:text-[2rem] font-[600] tracking-tight" // Removed px
            style={{ lineHeight: "normal" }}
          >
            wheatsville coop
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
            <motion.div
              className={`ms-2 lg:ms-[1rem] p-2 lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] text-sm lg:text-base font-[500] inline-block`}
              whileHover={{ backgroundColor: "#d6d6d6" }} transition={{ duration: 0.2 }}
            >
              showcase
            </motion.div>
             {/* Removed third tag as it wasn't in the original code */}
          </motion.div>
        </div>
      </div>

      {/* ----- Footer ----- */}
      <Footer />
    </div>
  );
};

export default VeriprodPage;