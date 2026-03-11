import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Home, Twitter, Instagram, FileText, Calendar } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Magnetic Button Wrapper
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic radius is roughly 30px around the element
    // We scale the movement to make it subtle but noticeable
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("relative flex items-center justify-center cursor-pointer", className)}
    >
      {/* 15% bouncy scale on hover */}
      <motion.div
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex items-center justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Tooltip Item Component
const DockItem = ({ icon: Icon, label, href }: { icon: React.ElementType, label: string, href: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#111111] border border-neutral-800 text-white text-[10px] md:text-xs font-sans tracking-widest rounded-md whitespace-nowrap shadow-xl z-50 pointer-events-none"
          >
            {label}
            {/* Tooltip triangle indicator */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111111] border-b border-r border-neutral-800 rotate-45 transform origin-center"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <MagneticButton>
        <a href={href} className="text-[#111111] hover:text-black transition-colors p-1.5 md:p-2">
          <Icon size={18} strokeWidth={1.5} />
        </a>
      </MagneticButton>
    </div>
  );
};

export const FloatingDock = () => {
  return (
    <motion.div
      // Always visible
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      {/* Floating continuous animation wrapper */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex items-center gap-1.5 md:gap-3 p-1.5 md:p-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
      >
        <DockItem icon={Home} label="HOME" href="#" />
        
        {/* Subtle Vertical Divider */}
        <div className="w-px h-5 bg-black/10 mx-1 md:mx-1.5 rounded-full" />
        
        <DockItem icon={Twitter} label="TWITTER" href="#" />
        <DockItem icon={Instagram} label="INSTAGRAM" href="#" />
        <DockItem icon={FileText} label="RESUME" href="#" />
        
        {/* Subtle Vertical Divider */}
        <div className="w-px h-5 bg-black/10 mx-1 md:mx-1.5 rounded-full" />
        
        {/* CTA Button */}
        <MagneticButton className="ml-1 md:ml-1.5">
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 h-8 w-8 md:h-10 md:w-auto md:px-5 bg-[#111111] hover:bg-black rounded-full md:rounded-xl text-white shadow-sm transition-colors"
          >
            <Calendar size={16} className="md:hidden" />
            <span className="hidden md:inline font-sans font-medium text-xs md:text-sm tracking-tight">
              Book a Call
            </span>
          </a>
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
};
