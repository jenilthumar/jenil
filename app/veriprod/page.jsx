"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations";
import { useRouter } from "next/navigation";

import { Footer } from "@/components/footer";

const VeriprodPage = () => {
  
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
          <Link href={"/about"}>
            <motion.span
              whileHover={{ color: "#666" }}
              transition={{ duration: 0.2 }}
            >
              about me
            </motion.span>
          </Link>
          <Link href={"/"} className="ms-[1.5rem]">
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
          className="mt-[2.25rem] text-[2rem] font-[500] tracking-tight text-[#1a1a1a]"
          style={{ lineHeight: "normal" }}
          variants={fadeInUp}
        >
          what if you never have to remember when your products are expiring?
        </motion.p>
        <motion.div
          className="mt-[1.5rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`p-[0.75rem] bg-[#E6E6E6] rounded-[3.125rem] text-[#464646] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            product design
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#E6E6E6] rounded-[3.125rem] text-[#464646] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            showcase
          </motion.div>
        </motion.div>
        <div className="mt-[2rem]">
          <div className="flex justify-between lg:pe-[4rem] text-[1.125rem]">
            <div>
              <div className="text-[#464646]">client</div>
              <div className="text-[#1a1a1a]">concept project</div>
            </div>
            <div>
              <div className="text-[#464646]">model</div>
              <div className="text-[#1a1a1a]">app</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4rem]">
        <img
          src="vp/veriprod-c-i.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
        <div className="text-[#1a1a1a] text-[2rem] font-[500]">context</div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          Veriprod was created because I was constantly forgetting about the
          expiry dates of products I bought and then forgetting about it after
          purchasing, and it&apos;s not just me; it&apos;s a universal problem; no one can
          actually keep track of product expiry dates when there are dozens of
          things we buy every now and then.
        </div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          My main focus in this project was to create minimal and to-the-point
          UI/UX. ZERO BLUFF! Keeping the app as simple to use as possible for
          all types of users. When developing the app, I kept time in mind at
          all times.
        </div>
      </div>
      <div className="mt-[4rem]">
        <img
          src="vp/s1.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
        <div className="text-[#1a1a1a] text-[2rem] font-[500]">goal</div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          The main and only goal was to create an app that keep track of the
          expiry date of a product with minimal effort.{" "}
        </div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          Veriprod&apos;s main goal, broken down into small steps:{" "}
        </div>
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full">
        <img
          src="vp/s2.webp"
          className="max-h-[33rem] h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
        <div className="text-[#1a1a1a] text-[2rem] font-[500]">
          user flow & information architecture
        </div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          The goal of this exercise is to comprehend the user journey from the
          beginning to the end of the process. It also aided us in the creation
          of the information architecture.{" "}
        </div>
        <div className="text-[#1a1a1a] text-[1.25rem] font-[400] mt-[1.5rem]">
          Add a product {" -> "} Add photo of product {" -> "} Add name {" -> "} Add expiry date{" "}
        </div>
      </div>
      <div className="mt-[4rem] max-w-[45rem] mx-auto w-full">
        <img
          src="vp/s3.webp"
          className="max-h-[33rem] h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="mt-[4rem]">
        <img
          src="vp/s4.webp"
          className="max-h-[56rem] w-full object-cover"
          alt=""
        />
      </div>
      <div className="lg:w-[45rem] mx-auto px-2 lg:px-0">
        <div className="mt-[6rem]" onClick={() => router.push("/wheatsville")}>
          <div
            className="text-[#1a1a1a] font-[500] text-[2rem] mt-[6rem]"
            style={{ lineHeight: "normal" }}
          >
            next project
          </div>
          <img src="vp/s5.webp" className="mt-[2rem]" alt="" />
          <div
            className="mt-[2rem] text-[2rem] font-[500] tracking-tight px-[1.5rem]"
            style={{ lineHeight: "normal" }}
          >
            wheatsville coop
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
            className={`p-[0.75rem] bg-[#E6E6E6] rounded-[3.125rem] text-[#464646] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            website design
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#E6E6E6] rounded-[3.125rem] text-[#464646] inline`}
            whileHover={{ backgroundColor: "#d6d6d6" }}
            transition={{ duration: 0.2 }}
          >
            showcase
          </motion.div>
          <motion.div
            className={`ms-[1rem] p-[0.75rem] bg-[#E6E6E6] rounded-[3.125rem] text-[#464646] inline`}
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

export default VeriprodPage;
