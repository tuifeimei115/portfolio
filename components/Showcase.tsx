import React from 'react';
import { motion } from 'framer-motion';

const Showcase: React.FC = () => {
  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-6 pb-32 z-10 relative">
      
      {/* Header Section */}
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
        <motion.h2 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold tracking-tighter text-white"
        >
          精选项目 <span className="text-gray-600">/ WORKS</span>
        </motion.h2>
        <span className="text-xs text-gray-400 font-mono hidden md:block">工程架构 & AI 创作</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: VSCode Agent (AI Engineering) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src="/vscode_agent.jpg" 
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Code Agent" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-cyan-400 mb-2">多模态模型评测 / Python & Java</p>
             <h3 className="text-2xl font-bold mb-3">VSCode 智能体评测体系</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             针对代码生成类 Agent，构建多模态评测体系，使用 Java+Python 混合脚本实现模型指令 → GUI 操作 → 代码质量的全链路自动化基准测试，显著降低人工评测成本。
             </p>
           </div>
        </div>

        {/* Card 2: Xiaohongshu (Creative AI) */}
        <div className="group relative bg-white/5 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src="/xiaohongshu.jpg"
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Xiaohongshu" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 889.6c-208.4 0-377.6-169.2-377.6-377.6S303.6 134.4 512 134.4s377.6 169.2 377.6 377.6-169.2 377.6-377.6 377.6zm176.8-542.4c-17.6 0-33.6 6-46.8 16-24-20.4-55.2-32.8-89.2-32.8-59.2 0-110 33.6-136.4 83.2-12.4-5.6-26-8.8-40.4-8.8-55.2 0-100 44.8-100 100 0 55.2 44.8 100 100 100 10.4 0 20.4-1.6 30-4.8 19.6 44 64.4 74.8 116.8 74.8 32 0 61.6-11.2 85.2-30 14.4 12.8 33.2 20.8 54 20.8 44 0 80-36 80-80s-36-80-80-80c-9.6 0-18.8 1.6-27.6 4.8-11.6-25.2-36-43.2-64.8-45.2 24.8-19.2 40.8-49.2 40.8-82.8 0-1.6 0-3.2-.4-4.8 24.4 16.4 53.6 26 85.2 26 4.4 0 8.8-.4 13.2-1.2 1.6 43.6 37.6 78.4 81.6 78.4 45.2 0 81.6-36.4 81.6-81.6 0-45.2-36.4-81.6-81.6-81.6-37.6 0-69.2 24.8-78.4 59.2-11.2-3.6-23.2-5.6-35.6-5.6-11.2 0-22 1.6-32.4 4.8-15.6-43.6-57.6-74.8-107.2-74.8z"/></svg>
                <p className="text-xs font-mono text-red-400">AIGC 自媒体矩阵</p>
             </div>
             <h3 className="text-2xl font-bold mb-3">小红书 · 赛博美学</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             个人方向探索生成式 AI （Stable Diffusion、Midjourney、LoRA 微调）并产出图像内容，用于增强模型美术方向的理解。
             </p>
           </div>
        </div>

        {/* Card 3: RAG (AI Engineering) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src="/RAG.png"
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="RAG" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-purple-400 mb-2">RAG / 提示词工程</p>
             <h3 className="text-2xl font-bold mb-3">企业级 RAG 知识库</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
               针对大模型幻觉痛点，构建结构化 RAG 框架。优化数据清洗链路，设计“引用-回答”高约束 Prompt 模板，显著提升垂直领域问答准确率。
             </p>
           </div>
        </div>

        {/* Card 4: BYD Insurance (Core Engineering) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src="/cheqi.png"
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Architecture" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-blue-400 mb-2">高并发 / 分布式架构</p>
             <h3 className="text-2xl font-bold mb-3">分布式车险承保引擎</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             负责比亚迪车险核心承保系统的后端研发工作，承担高并发链路设计、分布式架构与稳定性建设，支撑万级业务流量的日常运行。    </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;