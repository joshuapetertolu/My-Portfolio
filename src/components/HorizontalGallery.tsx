import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';

// Dummy project data matching the screenshot vibe
const projects = [
  {
    id: 1,
    title: "TaraPay",
    category: "Fintech Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900", // Dark, sleek dashboard vibe
    stack: "React Native • Node.js",
    year: "2026",
    color: "#0A0A0A", // Very dark grey/black
  },
  {
    id: 2,
    title: "Aero",
    category: "Smart Communication",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600&h=900", // Clean, bright app vibe
    stack: "Swift • Firebase",
    year: "2025",
    color: "#F4F4F5", // Light zinc
  },
  {
    id: 3,
    title: "NatureNest",
    category: "Eco Lifestyle App",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1600&h=900", // Nature, green vibe
    stack: "Flutter • GraphQL",
    year: "2024",
    color: "#E8F5E9", // Light green
  },
  {
    id: 4,
    title: "Nexus",
    category: "Crypto Wallet",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=1600&h=900", // High tech crypto vibe
    stack: "React Native • Web3.js",
    year: "2026",
    color: "#1E1B4B", // Deep indigo
  }
];

const GridOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Horizontal Line 1 (Top) */}
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 h-[2px] w-[500px] bg-gradient-to-r from-transparent via-cyan-500 via-50% to-transparent shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          animate={{ x: ["-500px", "100vw"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      {/* Horizontal Line 2 (Middle-Bottom) */}
      <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 h-[2px] w-[400px] bg-gradient-to-r from-transparent via-purple-500 via-50% to-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          animate={{ x: ["100vw", "-400px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 0 }}
        />
      </div>

      {/* Vertical Line 1 (Left) */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-pink-500 via-50% to-transparent shadow-[0_0_15px_rgba(236,72,153,0.6)]"
          animate={{ y: ["-400px", "100vh"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Vertical Line 2 (Right) */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-[#E5E5E0]">
        <motion.div 
          className="absolute top-0 left-0 w-[2px] h-[500px] bg-gradient-to-b from-transparent via-blue-500 via-50% to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          animate={{ y: ["100vh", "-500px"] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="w-[85vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] shrink-0 group">
      {/* Outer Transparent Container (Reduced Edges) */}
      <div className="relative p-2 md:p-3 lg:p-4 bg-transparent flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        {/* Single Translucent Blended Frame */}
        <div className="relative w-full p-3 md:p-4 lg:p-6 bg-neutral-200/40 backdrop-blur-xl border border-neutral-300/50 shadow-sm rounded-[16px] md:rounded-[24px] overflow-hidden">
          
          {/* 4 Corner Fasteners (Dots) - Inside the frame */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3 w-1.5 h-1.5 rounded-full border border-black/10 flex items-center justify-center">
            <div className="w-[1px] h-[1px] rounded-full bg-black/20" />
          </div>
          <div className="absolute top-2 right-2 md:top-3 md:right-3 w-1.5 h-1.5 rounded-full border border-black/10 flex items-center justify-center">
            <div className="w-[1px] h-[1px] rounded-full bg-black/20" />
          </div>
          <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 w-1.5 h-1.5 rounded-full border border-black/10 flex items-center justify-center">
            <div className="w-[1px] h-[1px] rounded-full bg-black/20" />
          </div>
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-1.5 h-1.5 rounded-full border border-black/10 flex items-center justify-center">
            <div className="w-[1px] h-[1px] rounded-full bg-black/20" />
          </div>

          {/* Inner Screen */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-white rounded-[12px] md:rounded-[16px] overflow-hidden outline outline-1 outline-black/5 shadow-[0_2px_10px_rgb(0,0,0,0.05)]">
             <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
             />
          </div>

        </div>
      </div>
    </div>
  );
};

const MarqueeTrack = ({ items, targetSpeed = 1 }: { items: typeof projects, targetSpeed: number }) => {
  const baseX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Smooth out speed changes
  const currentSpeed = useSpring(1, { stiffness: 50, damping: 20 });

  useEffect(() => {
    currentSpeed.set(targetSpeed);
  }, [targetSpeed, currentSpeed]);

  // Measure the width of one "set" of items to know exactly when to loop
  useEffect(() => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      setWidth((trackRef.current.firstElementChild as HTMLElement).offsetWidth);
    }
    // Handle resize re-calculation
    const handleResize = () => {
      if (trackRef.current && trackRef.current.firstElementChild) {
        setWidth((trackRef.current.firstElementChild as HTMLElement).offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useAnimationFrame((_, delta) => {
    if (width === 0) return;
    // Normalize speed multiplier against a 60fps baseline (~16ms delta)
    const moveBy = currentSpeed.get() * (delta / 16);
    let newX = baseX.get() - moveBy;
    
    // Once we travel exactly the width of Set 1, wrap back instantly
    if (newX <= -width) {
      newX += width;
    }
    
    baseX.set(newX);
  });

  return (
    <motion.div 
      ref={trackRef} 
      style={{ x: baseX }} 
      className="flex flex-nowrap w-max will-change-transform"
    >
      {/* Set 1 */}
      <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 shrink-0">
        {items.map((proj, idx) => (
          <ProjectCard key={`set1-${idx}`} project={proj} />
        ))}
      </div>
      {/* Set 2 */}
      <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 shrink-0">
        {items.map((proj, idx) => (
          <ProjectCard key={`set2-${idx}`} project={proj} />
        ))}
      </div>
    </motion.div>
  );
};

export const HorizontalGallery = () => {
  const [targetSpeed, setTargetSpeed] = useState(1);

  return (
    <section 
      className="relative w-full py-0 pb-20 -mt-10 md:-mt-10 overflow-hidden bg-transparent"
    >
      <GridOverlay />

      {/* Main Content */}
      <div 
        className="relative z-10 flex flex-col items-center"
        onMouseEnter={() => setTargetSpeed(0.2)}
        onMouseLeave={() => setTargetSpeed(1)}
      >
        {/* Marquee Track */}
        <MarqueeTrack items={projects} targetSpeed={targetSpeed} />
      </div>
    </section>
  );
};
