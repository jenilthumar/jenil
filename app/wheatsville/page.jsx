"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations";
import { useRouter } from "next/navigation";

import { Footer } from "@/components/footer";

const WheatsvillePage = () => {

  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center lg:max-w-[45rem] w-full mx-auto mt-[2.36rem]">
        <motion.h2
          className="text-[2rem] font-[700] tracking-tight text-[#1a1a1a] cursor-pointer pl-2 lg:pl-0"
          variants={fadeInUp}
          onClick={() => router.push("/")}
        >
          Jenil
        </motion.h2>
        <motion.div
          className="mt-[0.5rem] text-[1.25rem] font-[400] tracking-tight"
          variants={fadeInUp}
        >
          <Link href={"/aboutme"}>
            <motion.span
              whileHover={{ color: "#666" }}
              transition={{ duration: 0.2 }}
            >
              about me
            </motion.span>
          </Link>
          <Link href={"https://drive.google.com/file/d/1QBjx9aQ_Ioo_DX_yH7EhKnLzRNFx6zXT/view?usp=drive_link"} className="ms-[1.5rem]">
            <motion.span
              whileHover={{ color: "#666" }}
              transition={{ duration: 0.2 }}
            >
              resume
            </motion.span>
          </Link>
          <Link
            href={"/"}
            className="ms-[1.5rem] bg-[#1a1a1a] text-white py-[0.6rem] px-[1.25rem] rounded-[0.5rem] hover:opacity-80 transition-all"
          >
            <motion.span transition={{ duration: 0.2 }}>send mail</motion.span>
          </Link>
        </motion.div>
      </div>
      <div className="mt-[3.88rem] lg:max-w-[45rem] w-full mx-auto px-2 lg:px-0">
        <motion.p
          className="mt-[2.25rem] text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          style={{ lineHeight: "normal" }}
          variants={fadeInUp}
        >
wheatsville co-op        </motion.p>
        <motion.div
          className="mt-[1.5rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            website design
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            showcase
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            visual design
          </motion.div>
        </motion.div>
        <div className="mt-[2rem]">
          <div className="flex justify-between lg:pe-[4rem] text-[1.125rem]">
            <div>
              <div className="text-[#464646] font-[500]">client</div>
              <div className="text-[#1a1a1a] font-[500]">wheatsville co-op, texas</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4rem]">
        <img
          src="wv/wv-1.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
        <div className="text-[#1a1a1a] text-[2rem] font-[600] tracking-tight">context</div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[500] mt-[1.5rem] ">
        Wheatsville Co-op is a community-owned food cooperative in Austin, Texas.
        </div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[500] mt-[1.5rem]">
        Their previous website was outdated. They wanted a fresh look and experience while keeping their brand touch there, It was collaboration with my friend Taylor. He guided me with design and brand direction and I designed new wireframes.
        </div>
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-2.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-3.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-4.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-5.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-6.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[65rem] mx-auto w-full px-2 lg:px-0">
        <img
          src="wv/wv-7.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
        <div className="text-[#1a1a1a] text-[1.25rem] font-[500] mt-[1.5rem]">
        I&apos;ve come to realize that while working on concept projects, it&apos;s tempting to focus on creating visually stunning designs that catch the eye. However, in real-world projects for actual businesses, prioritizing user experience and ensuring a smooth flow through the user interface becomes essential. It&apos;s important to understand that a website should serve its purpose and meet its goals, rather than just being aesthetically pleasing. This valuable insight has been my key takeaway from this project. 
        </div>
      </div>
      <div className="lg:w-[45rem] mx-auto px-2 lg:px-0">
        <div className="mt-[6rem]" onClick={() => router.push("/shilp")}>
          <div
            className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem] mt-[6rem]"
            style={{ lineHeight: "normal" }}
          >
            next project
          </div>
          <img src="wv/wv-8.webp" className="mt-[2rem]" alt="" />
          <div
            className="mt-[2rem] text-[2rem] font-[600] tracking-tight px-[1.5rem]"
            style={{ lineHeight: "normal" }}
          >
            Shilp
          </div>
        </div>
        <motion.div
          className="mt-[1.5rem] px-[1.5rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            website design
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            showcase
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            visual design
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default WheatsvillePage;
