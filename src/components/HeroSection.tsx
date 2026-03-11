import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Magnetic Button Wrapper
const MagneticWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic radius is roughly 30px
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("relative inline-block cursor-pointer", className)}
    >
      {/* 10% bouncy scale on hover */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Text Scramble Hook
const useTextScramble = (finalText: string, delayMs: number = 0) => {
  const [displayText, setDisplayText] = useState("");
  const iterations = useRef(0);
  const maxIterations = 20; 
  
  const chars = "!<>-_\\\\/[]{}—=+*^?#_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    
    // eslint-disable-next-line prefer-const
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(() => 
          finalText
            .split("")
            .map((char, index) => {
              if (index < (iterations.current / maxIterations) * finalText.length) {
                return char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        if (iterations.current >= maxIterations) {
          clearInterval(interval);
          setDisplayText(finalText);
        }
        
        iterations.current += 1;
      }, 50);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [finalText, delayMs]);

  return displayText;
};

export const HeroSection = () => {
  const scrambledName = useTextScramble("Joshua Peter", 300);
  const premiumEasing = [0.19, 1, 0.22, 1] as const;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent selection:bg-black/10 selection:text-black">
      
      <div className="relative z-10 flex flex-col items-start justify-center max-w-[700px] w-full px-6 pt-20 md:pt-32">
        
        {/* Avatar (Perfectly Circular per the screenshot) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="mb-5 relative"
        >
          <div className="relative w-20 h-20 md:w-27.5 md:h-27.5 rounded-full overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/50">
            <img 
              src="/src/assets/106085778.png" 
              alt="Joshua Peter" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </motion.div>

        {/* Hero Typography */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: premiumEasing }}
          className="flex flex-col gap-1 md:gap-2 mb-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-4xl leading-[1.1] font-sans font-bold tracking-tight text-[#111111]">
            Hey, I'm {scrambledName}. <br />
            Mobile Developer
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: premiumEasing }}
          className="text-xs md:text-sm text-[#555555] font-sans max-w-150 leading-relaxed mb-8"
        >
          Crafting seamless experiences and bold visuals. High school student
          by day, creative thinker, and aspiring innovator by night.
        </motion.p>

        {/* Call To Action Area */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: premiumEasing }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4"
        >
          {/* Main CTA */}
          <MagneticWrapper>
            <a 
              href="#work" 
              className="inline-flex items-center justify-center h-11 px-6 bg-[#111111] text-white font-sans font-medium rounded-xl hover:bg-black transition-colors tracking-tight text-sm"
            >
              View My Work
            </a>
          </MagneticWrapper>

          {/* Status Indicator */}
          <MagneticWrapper>
            <div className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-[#E8F5E9] text-[#2E7D32] font-sans font-medium rounded-xl transition-colors tracking-tight text-sm">
              {/* Breathing Status Dot */}
              <div className="w-[6px] h-1.5 rounded-full bg-[#4CAF50] shadow-[0_0_8px_rgba(76,175,80,0.6)] animate-breathe" />
              Available for new project
            </div>
          </MagneticWrapper>
        </motion.div>

      </div>
    </section>
  );
};
