"use client";

import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import AnnouncementBanner from "@/components/announcement-banner";
import { fadeInUp } from './animations'; // Assuming animations are defined elsewhere

export default function Home() {
  const imageRef = useRef(null);
  const router = useRouter();

  const projects = [
    // ... (project data remains the same)
    {
        id: 1,
        image: "/sitenote.png",
        title:
          "how can real estate businesses streamline management and communication?",
        tags: ["product design", "case study"],
        href: "/sitenote",
      },
      {
        id: 2,
        image: "/veriprod.png",
        title:
          "what if you never have to remember when your products are expiring?",
        tags: ["app design", "showcase", "hobby project"],
        href: "/veriprod",
      },
      {
        id: 3,
        image: "/3.png",
        title: "wheatsville coop",
        tags: ["website design", "showcase"],
        href: "/wheatsville",
      },
      {
        id: 4,
        image: "/shilp.webp",
        title: "shilp",
        tags: ["website design", "showcase"],
        href: "/shilp",
      },
      {
        id: 5,
        image: "/fractionally.png",
        title: "fractionally",
        tags: ["website design", "showcase"],
        href: "/fractionally",
      },
      {
        id: 6,
        image: "/ripen.png",
        title: "ripen",
        tags: ["deck design", "showcase"],
        href: "/ripen",
      },
  ];

  return (
    <div>
      {/* ----- Announcement Banner ----- */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <AnnouncementBanner />
      </motion.div>

      {/* ----- Hero Section ----- */}
      <motion.div
        // Mobile: Increased padding to px-8. Desktop: centered with max-w, px-2 applied within max-w context.
        className="lg:max-w-[45rem] w-full mx-auto mt-[2.36rem] px-8 lg:px-2" // Changed px-6 to px-8
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        {/* Name */}
        <motion.h2
          className="text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          variants={fadeInUp}
        >
          Jenil H.T
        </motion.h2>

        {/* Links */}
        <motion.div
          className="mt-[0.5rem] text-[1.1rem] lg:text-[1.25rem] font-[440]"
          variants={fadeInUp}
        >
          <Link href="/aboutme">
            <motion.span
              whileHover={{ color: "#666" }}
              transition={{ duration: 0.2 }}
            >
              about me
            </motion.span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1QBjx9aQ_Ioo_DX_yH7EhKnLzRNFx6zXT/view?usp=drive_link"
            className="ms-[1rem] lg:ms-[1.5rem]"
          >
            <motion.span
              whileHover={{ color: "#666" }}
              transition={{ duration: 0.2 }}
            >
              resume
            </motion.span>
          </Link>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="mt-[1.5rem] lg:mt-[2rem] text-[#1a1a1a] font-[550] tracking-normal text-[1.15rem] lg:text-[1.30rem]"
          variants={fadeInUp}
        >
          20, a product/visual designer who emphasizes on creating experiences
          that are feasible, functional, and visually delightful.
        </motion.p>

        {/* Mail Button */}
        <motion.a
          href="mailto:jenilthummar3108@gmail.com"
          className="mt-[1.5rem] inline-block px-[1rem] lg:px-[1.25rem] py-[0.6rem] lg:py-[0.7rem] bg-[#1a1a1a] hover:opacity-80 transition-all text-[#FAFAFA] text-[1.1rem] lg:text-[1.25rem] font-[550] rounded-[0.5rem]"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          send mail
        </motion.a>
      </motion.div>

      {/* ----- Video Section ----- */}
      <motion.div
        className="w-full max-w-full mt-[3rem] lg:mt-[4rem]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <video
          className="w-full aspect-[16/9] object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/content-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* ----- Selected Work Title ----- */}
      {/* Mobile: Increased padding to px-8 */}
      <div className="lg:max-w-[45rem] w-full mx-auto mt-[3rem] lg:mt-[4rem] px-8 lg:px-2">
        <motion.h2
          className="text-[1.75rem] lg:text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>
      </div>

      {/* ----- Projects List ----- */}
      <motion.div
         // Mobile: Increased padding to px-8. Desktop: centered with max-w, px-2.
        className="lg:max-w-[45rem] w-full mx-auto mt-[2rem] px-8 lg:px-2" // Changed px-6 to px-8
        variants={fadeInUp} // Assuming this variant is for the container itself
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project ${
              index > 0 ? "mt-[3rem] lg:mt-[4.5rem]" : ""
            } cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => router.push(project.href)}
          >
            {/* Project Image Container - Ensure classes are correct */}
            <motion.div
              className="relative w-full h-[20rem] lg:h-[30rem] rounded-[0.5rem] overflow-hidden" // Keep these classes
              ref={index === 0 ? imageRef : null}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Next.js Image Component - REMOVED priority prop */}
              <Image
                src={project.image}
                layout="fill"
                objectFit="cover" // This makes the image cover the container
                className="transition-all duration-700 object-center" // Keep object-center
                alt={project.title}
                // Removed: priority={index < 2}
                sizes="(max-width: 1024px) 100vw, 45rem" // Keep sizes
              />
            </motion.div>

            {/* Project Title */}
            <motion.div
              className="mt-[1rem] lg:mt-[2rem] text-[1.5rem] lg:text-[2rem] font-[600] tracking-tight px-0 lg:px-[1.5rem]"
              style={{ lineHeight: "normal" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.div>

            {/* Project Tags */}
            <motion.div
              className="mt-[1rem] lg:mt-[2rem] px-0 lg:px-[1.5rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  className={`${
                    tagIndex > 0 ? "ms-[0.5rem] lg:ms-[1rem]" : ""
                  } p-[0.5rem] lg:p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] font-[500] text-[#505050] inline-block text-sm`}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ----- Footer ----- */}
      <Footer />
    </div>
  );
}