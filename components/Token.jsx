import React, { useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Token = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full container mx-auto px-6 pt-16 pb-9  mt-[-10%] md:mt-[-15%]">
        <motion.h1
          className="text-5xl md:text-7xl text-white text-center lg:text-8xl xl:text-9xl tracking-widest mb-10 lg:mb-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tokenomics
        </motion.h1>
        <div className="w-full space-y-7 lg:space-y-14 text-white">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Banana Info:
          </motion.h2>
          <div className="w-full space-y-4 lg:space-y-7 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <motion.h2
              className=" tracking-[3px]"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              🟡 Name & Ticker: XBANANAX
            </motion.h2>
            <motion.h2
              className=" tracking-[3px]"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              🟡 Supply: 1 Billion Bananas
            </motion.h2>
            <motion.h2
              className=" tracking-[3px]"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              🍌 Reflection Rewards: 2% — because sharing bananas is caring
            </motion.h2>
            <motion.h2
              className=" tracking-[3px]"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              🌴 Marketing & Memes: 4% — fueling jungle billboards and viral fun
            </motion.h2>
          </div>
        </div>
      </div>
      <motion.div
        className="w-full relative lg:pt-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full bg-white py-3 flex justify-center items-center gap-2 md:gap-6 relative z-20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-sm md:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            0xc6200E4555948C5c6395b255a64732a672f647cD
          </motion.h1>
          <CopyToClipboard
            text="0xc6200E4555948C5c6395b255a64732a672f647cD"
            onCopy={handleCopy}
          >
            <button>
              {copied ? (
                "Copied"
              ) : (
                <motion.img
                  className="w-full object-cover max-w-[20px] md:max-w-[45px]"
                  src="copy.png"
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              )}
            </button>
          </CopyToClipboard>
        </motion.div>
        <motion.h1
          className="text-white/10 text-center tracking-widest text-6xl md:text-9xl lg:text-[150px] xl:text-[230px] mt-[-5%]"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          CONTRACT
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default Token;
