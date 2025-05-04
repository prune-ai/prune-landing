// components/PruneInfo.jsx
import React from 'react';

const PruneInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#18183B] t p-4">
      <div className="max-w-6xl w-full  flex flex-col md:flex-row  gap-12">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-mono italic mb-8">What is Prune?</h1>
          <p className="text-sm md:text-2xl   leading-relaxed">
            Prune uses large language models to detect, classify, and remove non-consensual and illegal content from the internet. We automate every stage of the takedown lifecycle—from discovery to documentation to takedown request delivery—at scale.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-lg lg:text-lg font-main mb-6">Since starting our work in 2023, we have:</p>

          <div className="mb-8">
            <h2 className="lg:text-2xl font-bold uppercase tracking-wide">Stopped Proliferation</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">500,000</p>
            <p className="lg:text-xl text-gray-300">takedowns processed</p>
          </div>

          <div>
            <h2 className="lg:text-2xl font-bold uppercase tracking-wide">Accelerated Survivor Relief</h2>
            <p className="lg:text-5xl text-teal-400 font-semibold my-2">97%</p>
            <p className="lg:text-xl text-gray-300">faster content removal using automated tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PruneInfo;