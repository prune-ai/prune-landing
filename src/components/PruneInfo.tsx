import React from 'react';
import Link from 'next/link';
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
          <span className="font-bold">Prune maps the infrastructure that enables and monetizes illegal content online.</span> We support <Link href="/coming-soon" className="text-teal-400 hover:text-teal-300 underline transition-colors">law enforcement</Link>, <Link href="/coming-soon" className="text-teal-400 hover:text-teal-300 underline transition-colors">legal professionals</Link>, and platforms with <Link href="/coming-soon" className="text-teal-400 hover:text-teal-300 underline transition-colors">digital forensics and compliance tools</Link>.
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
            <p className="lg:text-xl text-gray-300"><Link href="/coming-soon" className="text-teal-400 hover:text-teal-300 underline transition-colors">automated takedowns</Link> processed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="lg:text-2xl text-white font-bold uppercase tracking-wide">Accelerated Survivor Relief</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">97%</p>
            <p className="lg:text-xl text-gray-300">faster <Link href="/issue" className="text-teal-400 hover:text-teal-300 underline transition-colors">illegal content removal</Link> using <Link href="/coming-soon" className="text-teal-400 hover:text-teal-300 underline transition-colors">AI-powered enforcement tools</Link></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PruneInfo;