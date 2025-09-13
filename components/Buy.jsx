import React from "react";
import { motion } from "framer-motion";

const Buy = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full space-y-5 pt-16 max-lg:pb-10 ">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-white text-center xl:text-9xl tracking-widest mb-16 lg:mb-60"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          How To Buy
        </motion.h1>
        <div className="w-full max-lg:space-y-20">
          <motion.div
            className="w-full flex justify-start items-end"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-5 lg:p-10 space-y-10 bg-white relative z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl xl:text-9xl mt-[-13%] md:mt-[-8%] lg:mt-[-13%] text-white ts">
                Step 1
              </h1>
              <p className="tracking-widest text-xl md:text-3xl lg:text-3xl xl:text-4xl">
                Download metamask or your wallet of choice from the app store or
                google play store for free. Desktop users, download the google
                chrome extension by going to metamask.io.
              </p>
            </motion.div>
            <motion.img
              className="w-full max-lg:hidden object-cover max-w-[800px] ml-[-15%] mt-[-25%]"
              src="b1.png"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div
            className="w-full flex justify-end items-end"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="w-full object-cover max-lg:hidden max-w-[800px] mr-[-15%] mt-[-12%]"
              src="b2.png"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="p-5 lg:p-10 space-y-10 bg-white relative z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl xl:text-9xl text-white ts mt-[-13%] md:mt-[-8%] lg:mt-[-13%]">
                Step 2
              </h1>
              <p className="tracking-widest text-xl md:text-3xl lg:text-3xl xl:text-4xl">
                Have BNB in your wallet to switch to XBANANAX. If you don't have
                any BNB, you can buy directly on metamask, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex justify-start items-end"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-5 lg:p-10 space-y-10 bg-white relative z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl xl:text-9xl text-white ts mt-[-13%] md:mt-[-8%] lg:mt-[-13%]">
                Step 3
              </h1>
              <p className="tracking-widest text-xl md:text-3xl lg:text-3xl xl:text-4xl">
                Go to pancakeswap.finance in google chrome or on the browser
                inside your Metamask app. Connect your wallet. Paste the
                XBANANAX token address into Pancakeswap, select XBANANAX COIN,
                and confirm. When Metamask prompts you for a wallet signature,
                sign.
              </p>
            </motion.div>
            <motion.img
              className="w-full max-lg:hidden object-cover max-w-[800px] ml-[-15%] mt-[-12%]"
              src="b1.png"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div
            className="w-full flex justify-end items-end"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="w-full object-cover max-lg:hidden max-w-[800px] mr-[-15%] mt-[-12%]"
              src="b2.png"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="p-5 lg:p-10 space-y-10 bg-white relative z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl xl:text-9xl text-white ts mt-[-13%] md:mt-[-8%] lg:mt-[-13%]">
                Step 4
              </h1>
              <p className="tracking-widest text-xl md:text-3xl lg:text-3xl xl:text-4xl">
                Switch BNB for XBANANAX. We have 4/4 Taxes so you don't need to
                worry about buying with a specific slippage, although you may
                need to use slippage during times of market volatility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.img
        className="w-full object-cover"
        src="l2.png"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
};

export default Buy;
