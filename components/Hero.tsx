import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position state for Reverse Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the text movement
  const springConfig = { damping: 50, stiffness: 400 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Transform mouse position to text movement
  const textX = useTransform(mouseX, [-0.5, 0.5], ["30px", "-30px"]);
  const textY = useTransform(mouseY, [-0.5, 0.5], ["30px", "-30px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      
      // Calculate normalized position (-0.5 to 0.5)
      const xPct = (mouseXVal / width) - 0.5;
      const yPct = (mouseYVal / height) - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 perspective-[1000px]"
    >
      {/* Background abstract element (Circle) */}
      <div className="absolute w-[60vh] h-[60vh] rounded-full border border-white/10 pointer-events-none z-0 opacity-50" />

      {/* Main Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center select-none mix-blend-luminosity">
        <Line text="JAVA" x={textX} y={textY} delayClass="delay-100" />
        <Line text="AI" x={textX} y={textY} delayClass="delay-200" />
        <Line text="CHAOS" x={textX} y={textY} delayClass="delay-300" />
      </div>

      {/* Bottom Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-8 max-w-[320px] z-20"
      >
        <div className="w-8 h-[2px] bg-white mb-4" />
        <p className="text-xs md:text-sm font-medium leading-relaxed text-gray-400 tracking-wide">
          <span className="block text-white text-lg font-bold mb-1">十年磨一剑</span>
          从高并发 Java 后端，到大模型评测与工程化落地。<br/>
          在系统稳定性、模型行为一致性之间寻找平衡。<br/>
          <span className="text-gray-500 mt-2 block">尝试用工程的方式刻画模型行为，让混沌的能力变得可控。</span>
        </p>
      </motion.div>

    </section>
  );
};

const Line = ({ text, x, y, delayClass }: { text: string, x: any, y: any, delayClass: string }) => {
  return (
    <motion.div style={{ x, y }}>
      <h1 className={`text-[15vw] md:text-[13vw] font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl hover:from-white hover:to-white transition-all duration-500 cursor-default animate-reveal ${delayClass}`}>
        {text}
      </h1>
    </motion.div>
  );
};

export default Hero;