import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateCreativeConcept } from '../services/geminiService';
import { cn } from '../utils';

const GeminiConcept: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [concept, setConcept] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme.trim()) return;

    setLoading(true);
    setConcept(null);
    
    const result = await generateCreativeConcept(theme);
    setConcept(result);
    setLoading(false);
  };

  return (
    <section className="py-32 px-4 bg-[#0a0a0a] border-t border-white/20 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Input */}
          <div>
            <span className="font-mono text-xs text-indigo-500 mb-4 block">[ AI_MODULE_2.5 ]</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Generate<br/>Entropy
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm text-sm font-mono">
              Input a seed phrase. The system will hallucinate an avant-garde concept description.
            </p>

            <form onSubmit={handleGenerate} className="flex flex-col gap-0 border border-white/20">
              <input
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="INPUT_THEME"
                className="bg-transparent border-b border-white/20 px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:bg-white/5 font-mono text-sm"
              />
              <button
                type="submit"
                disabled={loading || !theme}
                className={cn(
                  "px-6 py-4 font-bold uppercase tracking-widest text-left hover:bg-white hover:text-black transition-all duration-200 text-sm",
                  loading ? "opacity-50 cursor-not-allowed" : ""
                )}
              >
                {loading ? "PROCESSING..." : "EXECUTE ->"}
              </button>
            </form>
          </div>

          {/* Right Column: Output */}
          <div className="min-h-[300px] border border-white/20 p-6 relative flex items-center justify-center bg-[#0f0f0f]">
             {/* Decorative corner markers */}
             <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
             <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>

            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-xs animate-pulse text-indigo-400"
                >
                  // COMMUNICATING_WITH_NEURAL_NET...
                </motion.div>
              )}

              {concept && !loading && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full text-left"
                >
                  <p className="text-lg md:text-xl font-bold leading-tight uppercase">
                    {concept}
                  </p>
                  <div className="mt-8 font-mono text-xs text-gray-500 border-t border-gray-800 pt-4">
                    STATUS: GENERATED<br/>
                    MODEL: GEMINI-2.5-FLASH
                  </div>
                </motion.div>
              )}
              
              {!concept && !loading && (
                <div className="text-gray-700 font-mono text-xs">
                  [ WAITING_FOR_INPUT_DATA ]
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiConcept;