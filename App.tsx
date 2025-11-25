import React from 'react';
import SmoothScrolling from './components/SmoothScrolling';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

// Film Grain Overlay
const GrainOverlay = () => (
  <div 
    className="fixed inset-0 z-50 opacity-[0.05] pointer-events-none mix-blend-overlay" 
    style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
  />
);

// Ambient Background Lighting
const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
     <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
     <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
  </div>
);

function App() {
  // Helper to handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(targetId, { duration: 1.5 });
    } else {
      // Fallback
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrolling>
      {/* Global Layout Wrapper */}
      <main className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-['Clash_Display']">
        
        <GrainOverlay />
        <AmbientBackground />

        {/* Global Navigation - Top Right */}
        <nav className="fixed top-8 right-8 z-50 flex flex-col items-end gap-1 text-xs md:text-sm font-medium tracking-widest text-gray-400 mix-blend-difference font-mono">
          <span className="text-white">菜单</span>
          <div className="h-4"></div> 
          <a 
            href="#work" 
            onClick={(e) => handleScroll(e, '#work')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            精选项目
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            关于我
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            联系方式
          </a>
        </nav>
        
        <div className="relative z-10 flex flex-col items-center">
          <Hero />
          
          <Marquee />
          
          {/* Spacer */}
          <div className="h-24"></div>
          
          <Showcase />
          
          <About />
          
          <Footer />
        </div>
      </main>
    </SmoothScrolling>
  );
}

export default App;