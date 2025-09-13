import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full container mx-auto px-6 md:mt-[-5%] max-w-[1300px]">
        <div className="w-full space-y-6 lg:space-y-12 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider w-full max-w-[800px] mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Born on the X Layer chain, we're peeling away the boring side of
            crypto and serving potassium-powered profits. Think of us as your
            jungle crew: wild, unstoppable, and always ripe for growth.
          </motion.p>
          <motion.div
            className="w-full flex justify-center items-center gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className="w-full object-cover max-w-[60px] md:max-w-[100px]"
                src="scr.png"
              />
            </motion.a>
            <motion.a
              href="/"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className="w-full object-cover max-w-[60px] md:max-w-[100px]"
                src="tools.png"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.img
        className="w-full object-cover mt-[-10%]"
        src="l2.png"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
};

export default About;
