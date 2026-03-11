import { HeroSection } from "./components/HeroSection";
import { FloatingDock } from "./components/FloatingDock";
import { HorizontalGallery } from "./components/HorizontalGallery";
import { motion } from "framer-motion";

export const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Horizontal Line 1 (Top) */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 h-0.5 w-125 bg-linear-to-r from-transparent via-cyan-500 via-50% to-transparent shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          animate={{ x: ["-500px", "100vw"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      {/* Horizontal Line 2 (Middle-Bottom) */}
      <div className="absolute bottom-[20%] left-0 w-full h-px bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 h-0.5 w-100 bg-linear-to-r from-transparent via-purple-500 via-50% to-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          animate={{ x: ["100vw", "-400px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 0 }}
        />
      </div>

      {/* Vertical Line 1 (Left) */}
      <div className="absolute top-0 left-[20%] w-px h-[200vh] bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 w-0.5 h-100 bg-linear-to-b from-transparent via-pink-500 via-50% to-transparent shadow-[0_0_15px_rgba(236,72,153,0.6)]"
          animate={{ y: ["-400px", "200vh"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Vertical Line 2 (Right) */}
      <div className="absolute top-0 right-[20%] w-px h-[200vh] bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 w-0.5 h-125 bg-linear-to-b from-transparent via-blue-500 via-50% to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          animate={{ y: ["200vh", "-500px"] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-transparent min-h-screen font-sans selection:bg-black/10 selection:text-black relative">
      <GridOverlay />
      
      <div className="relative z-10 flex flex-col bg-transparent">
        <FloatingDock />
        <HeroSection />
        
        {/* Horizontal Project Gallery */}
        <HorizontalGallery />
      </div>
    </div>
  );
}

export default App;
