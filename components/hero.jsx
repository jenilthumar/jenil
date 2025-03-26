import { motion, useScroll } from "framer-motion";


export const Hero = () => {

  const childVariants={
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0,transition:{duration:0.5}}
}

    return (
      <div className="w-full">
        {/* Navigation - smaller text on mobile */}
        <div className="flex justify-between items-center pl-2 pr-2 pb-2 text-black text-xs md:text-lg">
          <p>jenil Thummar</p>
          <motion.div  variants={childVariants}>
            <p>Product design</p>
            <p>Visual design</p>
          </motion.div>
          <div>
            <p>→ about me</p>
            <p>→ resume</p>
          </div>
          <p className="text-red-400">→ send mail</p>
        </div>
        
        {/* Content text - centered on mobile, float-right on larger screens */}
        <motion.div className="text-center md:text-left md:float-right md:pr-20 pt-8 md:pt-16 text-2xl md:text-4xl pb-12 md:pb-24 px-4 md:px-0"
        height={650} width={650}
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,delay:1}}
        >
          <p className="inline-block whitespace-normal md:whitespace-nowrap">
            Namaste — I'm a Product<br /> & Visual Designer based <br />in Surat, India. I shape <br />functional & visually <br />delight digital products.{" "}
          </p>
        </motion.div>
      </div>
    );
  };