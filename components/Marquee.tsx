import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full py-8 overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-sm z-20">
      {/* Gradient Fade Edges */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-4xl md:text-5xl font-bold text-transparent px-4 stroke-text opacity-50 font-mono">
          JAVA BACKEND &nbsp;•&nbsp; SPRING BOOT &nbsp;•&nbsp; REDIS &nbsp;•&nbsp; LLM EVALUATION &nbsp;•&nbsp; PROMPT ENGINEERING &nbsp;•&nbsp; RAG &nbsp;•&nbsp; STABLE DIFFUSION &nbsp;•&nbsp; 
        </span>
        <span className="text-4xl md:text-5xl font-bold text-transparent px-4 stroke-text opacity-50 font-mono">
          JAVA BACKEND &nbsp;•&nbsp; SPRING BOOT &nbsp;•&nbsp; REDIS &nbsp;•&nbsp; LLM EVALUATION &nbsp;•&nbsp; PROMPT ENGINEERING &nbsp;•&nbsp; RAG &nbsp;•&nbsp; STABLE DIFFUSION &nbsp;•&nbsp; 
        </span>
      </div>
    </div>
  );
};

export default Marquee;