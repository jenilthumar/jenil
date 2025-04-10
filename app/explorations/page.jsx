"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations"; // Assuming animations defined
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer"; // Assuming responsive Footer

const ExplorationsPage = () => {
  const router = useRouter();

  // Consistent padding for mobile sections
  const mobilePadding = "px-6";
  const desktopContentPadding = "lg:px-0"; // No padding needed inside max-width container
  const desktopImagePadding = "lg:px-2"; // Slight padding for wider images if needed
  const desktopPadding = "lg:px-0";
  return (
    <div>
      {/* ----- Header ----- */}
      <div className={`flex justify-between items-center lg:max-w-[45rem] w-full mx-auto mt-[2.36rem] ${mobilePadding} ${desktopPadding}`}>
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
          <Link href="/jenil_resume.pdf" target="_blank" rel="noopener noreferrer" className="ms-[1.5rem]">
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
          Some works (or stuff) I do in my free time, personal projects and practices.
        </motion.p>
      </div>

      {/* ----- Main Content Image (fn-2) ----- */}
      {/* Use w-full h-auto for this image */}
      <div className={`mt-12 lg:mt-[4rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Sitenote landing.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/acreshub app.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/university dashboard design.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/B2B saas linkedin ad.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/sparksifter.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Elixir.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Shilpboard landing.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Testimonial.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/B2B SaaS email header.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Portfolio concept.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Community landing.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Restaurant finder app.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Tech landing concept.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`grid grid-cols-2 gap-6 mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <div>
            <img
          src="/ep/B2B SaaS Post.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
            />
        </div>
        <div>
            <img
          src="/ep/Testimonial.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
            />
        </div>
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/streaming app design.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      <div className={`mt-12 lg:mt-[3rem] max-w-[65rem] mx-auto w-full ${mobilePadding} ${desktopImagePadding}`}>
        <img
          src="/ep/Christopher nolan landing.webp"
          className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          alt="acreshub app"
        />
      </div>
      {/* ----- Footer ----- */}
      <Footer />
    </div>
  );
};

export default ExplorationsPage;