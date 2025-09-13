import React from "react";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <motion.section
      className="mt-[-10%]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full container mx-auto px-6 pb-16 max-w-[1300px]">
        <div className="space-y-5 lg:space-y-10 mb-10 lg:mb-28 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join Us
          </motion.h1>
          <motion.h2
            className="w-full max-w-[700px] mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The jungle is calling. Grab your bunch and swing with us:
          </motion.h2>
        </div>
        <motion.div
          className="w-full flex justify-center items-center gap-5 lg:gap-16"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-full object-cover max-w-[100px] md:max-w-[150px] lg:max-w-[220px]"
              src="join_tele.png"
              alt=""
            />
          </motion.a>
          <motion.a
            href="/"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-full object-cover max-w-[100px] md:max-w-[150px] lg:max-w-[220px]"
              src="join_x.png"
              alt=""
            />
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="w-full flex justify-between mt-[-7%]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-full object-contain max-w-[100px] md:max-w-[200px] lg:max-w-[300px]"
          src="left_leaf.png"
          initial={{ x: -50, rotate: -10 }}
          whileInView={{ x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.img
          className="w-full object-contain mt-[-11%] max-w-[100px] md:max-w-[200px] lg:max-w-[300px]"
          src="right_leaf.png"
          initial={{ x: 50, rotate: 10 }}
          whileInView={{ x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        />
      </motion.div>
      <motion.h2
        className="w-full max-w-[1100px] mx-auto text-center px-6 tracking-widest mt-8 md:mt-16 text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white pb-14 lg:pb-28"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        The fruit of the future, ripe on the X Layer.
      </motion.h2>
    </motion.section>
  );
};

export default Join;
