import React from 'react';
import { motion } from 'framer-motion';

const PruneInfo = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#18183B] p-4 relative z-30">
      <motion.div 
        className="max-w-6xl w-full flex flex-col md:flex-row gap-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl text-white font-mono italic mb-8">What is Prune?</h1>
          <p className="text-[16px] font-inter   lg:text-[20px] text-white font-medium leading-relaxed">
            Prune uses large language models to detect, classify, and remove non-consensual and illegal content from the internet. We automate every stage of the takedown lifecycle—from discovery to documentation to takedown request delivery—at scale.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg lg:text-lg text-white font-main mb-6">Since starting our work, we have:</p>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="lg:text-2xl text-white font-bold uppercase tracking-wide">Stopped Proliferation</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">500,000</p>
            <p className="lg:text-xl text-gray-300">takedowns processed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="lg:text-2xl text-white font-bold uppercase tracking-wide">Accelerated Survivor Relief</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">97%</p>
            <p className="lg:text-xl text-gray-300">faster content removal using automated tools</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PruneInfo;