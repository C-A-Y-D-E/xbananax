import React, { useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section className="w-full bg-white">
      <div className="w-full container mx-auto px-6 py-4 max-w-[1300px]">
        <div className="w-full flex justify-between gap-5 md:gap-8 items-center">
          <motion.div
            className="w-full flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="md:text-lg max-md:hidden tracking-wider">
              0xc00e9A12bC899B4489d09e5AEf039E3F880Ad374
            </h2>
            <h2 className="md:text-lg md:hidden tracking-wider">0xc...374</h2>
            <CopyToClipboard
              text="0xc00e9A12bC899B4489d09e5AEf039E3F880Ad374"
              onCopy={handleCopy}
            >
              <button className="text-black">
                {copied ? (
                  "Copied"
                ) : (
                  <img
                    className="w-full max-w-[20px] md:max-w-[25px] object-cover"
                    src="copy.png"
                  />
                )}
              </button>
            </CopyToClipboard>
          </motion.div>
          <motion.div
            className="w-full bg-black h-[2px] xl:ml-[-5%]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex items-center  gap-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="/">
              <img className="w-full max-w-[50px] object-cover" src="x.png" />
            </a>
            <a href="/">
              <img
                className="w-full max-w-[50px] object-cover"
                src="tele.png"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
