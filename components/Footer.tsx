import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showWechatQR, setShowWechatQR] = useState(false);

  return (
    <>
      <footer id="contact" className="w-full min-h-[60vh] flex flex-col justify-between px-6 py-20 z-10 relative border-t border-white/10 bg-[#0a0a0a]">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
           <div>
              <p className="text-sm text-gray-500 font-mono mb-2">OPEN FOR OPPORTUNITIES</p>
              <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-white">
                保持 <br/>
                <span className="text-gray-700">联系</span>
              </h2>
           </div>
           
           <div className="flex flex-col gap-4 text-right">
              <a href="mailto:329870857@qq.com" className="text-xl md:text-3xl text-white hover:text-red-500 transition-colors border-b border-white/20 pb-2 font-mono">
                329870857@qq.com
              </a>
              <div className="flex gap-6 justify-end mt-4">
                <button 
                  onClick={() => setShowWechatQR(true)} 
                  className="text-gray-400 hover:text-white text-sm cursor-pointer"
                >
                  微信 / WeChat
                </button>
                <a href="https://www.xiaohongshu.com/user/profile/5c4587b7000000000702411b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">小红书 / Red</a>
                <a href="https://github.com/tuifeimei115" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">GitHub</a>
              </div>
           </div>
         </div>

         <div className="mt-20 flex justify-between text-xs text-gray-600 font-mono">
            <span>© 2025 JIN YUANZHI</span>
            <span>DESIGNED & CODED WITH AI</span>
         </div>
      </footer>

      {/* WeChat QR Code Modal */}
      {showWechatQR && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWechatQR(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWechatQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">book 思议</h3>
              <p className="text-gray-500 mb-6">北京 朝阳</p>
              <img 
                src="/wechat-qr.jpg" 
                alt="WeChat QR Code" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
              <p className="text-gray-500 mt-6 text-sm">扫一扫上面的二维码图案，加我为朋友。</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;