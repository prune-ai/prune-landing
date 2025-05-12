import React from 'react';
import { motion } from 'framer-motion';

const PruneInfo = () => {
  return (
    <div className="flex items-center justify-center z-auto min-h-[80vh] bg-[#18183B]  p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-mono italic mb-8">What is Prune?</h1>
          <p className="text-sm md:text-xl font-thin leading-relaxed">
            Prune uses large language models to detect, classify, and remove non-consensual and illegal content from the internet. We automate every stage of the takedown lifecycle—from discovery to documentation to takedown request delivery—at scale.
          </p>
        </motion.div>

        {/* Right Column */}
        <div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg lg:text-lg font-main mb-6">Since starting our work, we have:</p>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="lg:text-2xl font-bold uppercase tracking-wide">Stopped Proliferation</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">500,000</p>
            <p className="lg:text-xl text-gray-300">takedowns processed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="lg:text-2xl font-bold uppercase tracking-wide">Accelerated Survivor Relief</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">97%</p>
            <p className="lg:text-xl text-gray-300">faster content removal using automated tools</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PruneInfo;