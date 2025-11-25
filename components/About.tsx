import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 pb-32 z-10 relative">
      <div className="grid md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold text-white mb-6">我是金源植。</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              从 <strong className="text-white">8 年 Java 后端</strong>，到近 <strong className="text-white">2 年的 AI 应用工程</strong>，我一直在做一件事
            </p>
            <p>
              用<strong className="text-white">工程化方法</strong>让复杂问题变得可控。
            </p>
            <p>
              我曾负责比亚迪等核心业务系统开发，深度参与架构、性能与稳定性保障。
            </p>
            <p>
              进入 AI 领域后，我发现<strong className="text-white">传统工程的"确定性"</strong>与<strong className="text-white">大模型的"概率性"</strong>之间存在天然缝隙。
            </p>
            <p>
              而我现在做的，就是把这两者真正连接起来。
            </p>
            <p>
              无论是构建 AI 训练和评测体系，还是把大模型融入业务链路，我都在寻找一种更稳定、更可预测的方式，让 AI 不只是"聪明"，而是能<strong className="text-white">被信任、被依赖、被生产使用</strong>。
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
           <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">Technical DNA / 技术武器库</h3>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             {/* 后端工程 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                  <span className="text-sm">后端工程</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">Back-end Engineering</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p><span className="text-gray-300">Java · Spring Boot · MyBatis</span></p>
                  <p>分布式架构 · 微服务治理 · 性能调优</p>
                  <p>Redis · MySQL · 慢 SQL 优化 · 消息队列</p>
                </div>
             </div>
             
             {/* AI 训练与评测 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm">AI 训练与评测</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">AI Training & Evaluation</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p>SFT 数据构建 · 质检体系</p>
                  <p>模型行为评测（准确性 / 合规 / 帮助性）</p>
                  <p>RAG Pipeline · Agent 评测框架</p>
                </div>
             </div>

             {/* 提示词工程 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-green-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm">提示词工程</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">Prompt Engineering</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p>结构化 Prompt 设计</p>
                  <p>CoT 思维链 · Few-shot Prompting</p>
                  <p>任务型优化与对话流控</p>
                </div>
             </div>

             {/* 生成式 AI */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-red-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-sm">生成式 AI</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">AIGC</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p><span className="text-gray-300">Stable Diffusion · Midjourney</span></p>
                  <p>图像风格化 · 角色一致性绘制</p>
                  <p>LoRA 训练 · 多模态内容生成</p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;