"use client";

import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { fadeInUp } from './animations';

export default function Home() {
  const imageRef = useRef(null);
  const router = useRouter();

  // Projects array
  const projects = [
    {
      id: 1,
      image: "/sitenote.webp",
      title:
        "Sitenote",
      tags: ["product design", "case study"],
      href: "/sitenote",
    },
    {
      id: 2,
      image: "/3.png",
      title: "Wheatsville coop",
      tags: ["website design", "showcase"],
      href: "/wheatsville",
    },
    {
      id: 3,
      image: "/veriprod.png",
      title:
        "Veriprod?",
      tags: ["app design", "showcase"],
      href: "/veriprod",
    },
    {
      id: 4,
      image: "/shilp.webp",
      title: "Shilp",
      tags: ["website design", "showcase"],
      href: "/shilp",
    },
    {
      id: 5,
      image: "/fractionally.png",
      title: "Fractionally",
      tags: ["website design", "showcase"],
      href: "/fractionally",
    },
    {
      id: 7,
      image: "/shubham-tech-cover.webp",
      title: "Shubham Technology",
      tags: ["website design", "showcase"],
      href: "https://www.shubhamtechnology.in/",
    },
    {
      id: 6,
      image: "/ripen.png",
      title: "Ripen",
      tags: ["deck design", "showcase"],
      href: "/ripen",
    },
  ];

  return (
    <div>
      <motion.div
        className="lg:max-w-[45rem] w-full mx-auto mt-[3rem] px-8 lg:px-2"
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
        <motion.h2
          className="text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
          variants={fadeInUp}
        >
          Jenil H.T
        </motion.h2>

        <motion.div
          className="mt-[0.5rem] text-[1.25rem] font-[440] text-[#1d4ed8] underline underline-offset-[0.2rem] decoration-[#1d4ed8] decoration-[0.1rem]"
          variants={fadeInUp}
        >
          
          <Link href="/aboutme">
            <motion.span
              whileHover={{ color: "#1842b5" }}
              transition={{ duration: 0.2 }}
            >
              about
            </motion.span>
          </Link>
          <Link
            href="/jenil_resume.pdf" target="_blank" rel="noopener noreferrer"
            className="ms-[1.5rem]"
          >
            <motion.span
              whileHover={{ color: "#1842b5" }}
              transition={{ duration: 0.2 }}
            >
              resume
            </motion.span>
          </Link>
          <Link href="/explorations" className="ms-[1.5rem]">
            <motion.span
              whileHover={{ color: "#1842b5" }}
              transition={{ duration: 0.2 }}
            >
              explorations
            </motion.span>
          </Link>
        </motion.div>

        <motion.p
          className="mt-[2rem] text-[#1a1a1a] font-[550] tracking-normal text-[1.30rem]"
          variants={fadeInUp}
        >
          Hey, I'm Jenil! A product/visual designer. I shape functional & visually delight digital products.
        </motion.p>

        <motion.a
          href="mailto:jenilthummar3108@gmail.com"
          className="mt-[1.5rem] inline-block px-[1.25rem] py-[0.7rem] bg-[#1a1a1a] hover:opacity-80 transition-all text-[#FAFAFA] text-[1.25rem] font-[550] rounded-[0.5rem]"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          send mail
        </motion.a>
      </motion.div>


      
      <motion.div
        className="w-full max-w-full mt-[4rem]"
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

      <div id="worksection" className="lg:max-w-[45rem] w-full mx-auto mt-[4rem] px-2">
        <motion.h2
          className="text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
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

      <motion.div
        className="lg:max-w-[45rem] w-full mx-auto mt-[2rem] px-2"
        variants={fadeInUp}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project ${
              index > 0 ? "mt-[4.5rem]" : ""
            } cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => {
              if (project.href.startsWith('http')) {
                // External URL - open in new tab
                window.open(project.href, '_blank', 'noopener,noreferrer');
              } else {
                // Internal route - use router
                router.push(project.href);
              }
            }}
          >
            <motion.div
              // Mobile: Use aspect-[3/2]. Desktop: Use fixed h-[30rem].
              className="relative w-full aspect-[3/2] lg:aspect-auto lg:h-[30rem] rounded-[0.5rem] overflow-hidden"
              ref={index === 0 ? imageRef : null}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Next.js Image Component - Keep object-cover */}
              <Image
                src={project.image}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-700 object-center"
                alt={project.title}
                sizes="(max-width: 1024px) 100vw, 45rem"
              />
            </motion.div>

            <motion.div
              className="mt-[2rem] text-[2rem] font-[600] tracking-tight px-[1.5rem]"
              style={{ lineHeight: "normal" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.div>

            <motion.div
              className="mt-[2rem] px-[1.5rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  className={`${
                    tagIndex > 0 ? "ms-[1rem]" : ""
                  } p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] font-[500] text-[#505050] inline`}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
}
