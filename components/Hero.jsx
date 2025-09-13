import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        className="w-full object-cover max-md:min-h-[300px]"
        src="hero.png"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <div className="w-full px-6 pt-10 max-md:pb-10 max-w-[1300px] container mx-auto">
        <div className="w-full flex flex-col items-center gap-6">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Go Bananas on the X Layer
          </motion.h1>
          <a  href="https://potatoswap.finance/swap?inputCurrency=OKB&outputCurrency=0xc6200E4555948C5c6395b255a64732a672f647cD" target="_blank" className="w-full max-w-[350px] flex justify-center items-center min-h-[40px] md:min-h-[70px] bg-white relative">
            <motion.h2
              className="tracking-widest text-cener text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              APE
            </motion.h2>
            <div className="w-[20px] h-[90px] absolute top-1/2 -translate-y-1/2 left-[15%] bg-black rotate-[-28deg]" />
            <div className="w-[20px] h-[90px] absolute top-1/2 -translate-y-1/2 right-[15%] bg-black rotate-[-28deg]" />
          </a>
        </div>
      </div>
      <motion.img
        className="w-full object-cover md:mt-[-8%]"
        src="l1.png"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
};

export default Hero;
