/* eslint-disable react-hooks/purity */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  type PanInfo,
  useTransform,
  animate,
} from "framer-motion";

const PhoneWireframe = () => {
  return (
    <group rotation={[0.2, 0.5, 0]}>
      <mesh>
        <boxGeometry args={[2.5, 5, 0.2]} />
        <meshBasicMaterial
          color="#333333"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const MobileLanding = ({ onUnlock }: { onUnlock: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-screen bg-black text-white overflow-hidden font-sans select-none"
    >
      {/* 3D Background: Ghostly Wireframe Device */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <PhoneWireframe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* TOP SECTION: THE FLUID ISLAND */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="px-5 py-2 rounded-full border border-[#CCFF00] backdrop-blur-xl bg-[#111111]/80 shadow-[0_0_15px_rgba(204,255,0,0.2)] flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]"></div>
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#FFFFFF] uppercase mt-0.5 whitespace-nowrap">
            JOSHUA PETER T. // SYSTEM_READY
          </span>
        </div>
      </div>

      {/* CENTER SECTION: THE HERO STATEMENT */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 md:px-16 lg:px-24 mx-auto md:max-w-7xl pointer-events-none">
        <div className="w-full flex-col items-center md:items-start justify-center flex">
          <h1 className="text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase font-black text-white text-center md:text-left">
            <span className="block font-extrabold text-[#ffffff]">
              ENGINEERING
            </span>
            <span className="block text-white opacity-90">NATIVE</span>
            <span className="block text-white opacity-80">FLUIDITY.</span>
          </h1>
          <p className="mt-8 font-mono text-[10px] sm:text-xs md:text-sm text-[#888888] tracking-widest uppercase md:max-w-sm text-center md:text-left pointer-events-auto">
            Senior Mobile Architecture.
            <br />
            iOS & Android. 120Hz or nothing.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION: THE ENTRY GESTURE */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full flex flex-col items-center justify-center pointer-events-auto">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#888888] mb-3 pointer-events-none">
          Drag up to unlock session
        </span>
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.y < -50) {
              onUnlock();
            }
          }}
          className="w-32 h-1.5 bg-white rounded-full shadow-[0_4px_15px_rgba(204,255,0,0.5)] active:shadow-[0_4px_25px_rgba(204,255,0,0.9)] active:scale-95 transition-all duration-300 cursor-grab active:cursor-grabbing hover:-translate-y-1 hover:shadow-[0_4px_25px_rgba(204,255,0,0.9)]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const PROJECTS = [
  {
    id: 1,
    name: "FINANCE OS",
    stack: "SwiftUI // CoreData",
    color: "bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600",
  },
  {
    id: 2,
    name: "HEALTH TRACKER",
    stack: "Kotlin // Compose",
    color: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: 3,
    name: "GLOBAL INTELLIGENCE",
    stack: "GraphQL // WatchOS",
    color: "bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-600",
  },
  {
    id: 4,
    name: "ENCRYPTED LEDGER",
    stack: "Crypto // Biometrics",
    color: "bg-gradient-to-br from-yellow-400 via-lime-500 to-green-600",
  },
  {
    id: 5,
    name: "RN SANDBOX",
    stack: "JSI // Fabric",
    color: "bg-gradient-to-br from-[#61DAFB] via-cyan-500 to-blue-600",
  },
  {
    id: 6,
    name: "THE ORIGIN",
    stack: "Tech Journey",
    color: "bg-gradient-to-br from-[#333333] via-[#1a1a1a] to-[#000000]",
  },
];

const bgGradients = [
  "radial-gradient(circle, rgba(45,212,191,0.2) 0%, rgba(147,51,234,0.15) 30%, rgba(5,5,5,0) 70%)",
  "radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(8,145,178,0.15) 30%, rgba(5,5,5,0) 70%)",
  "radial-gradient(circle, rgba(251,146,60,0.2) 0%, rgba(225,29,72,0.15) 30%, rgba(5,5,5,0) 70%)",
  "radial-gradient(circle, rgba(192,132,252,0.2) 0%, rgba(225,29,72,0.15) 30%, rgba(5,5,5,0) 70%)",
  "radial-gradient(circle, rgba(97,218,251,0.15) 0%, rgba(0,255,255,0.1) 30%, rgba(5,5,5,0) 70%)",
  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(51,51,51,0.1) 30%, rgba(5,5,5,0) 70%)",
];

const ProjectCard = ({
  project,
  idx,
  activeIndex,
  itemWidth,
  cardWidth,
  x,
  onSelectProject,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const cardCenterPosition = idx * itemWidth + cardWidth / 2;
  const distance = useTransform(x, (currentX) => {
    return cardCenterPosition + (currentX as number);
  });

  const range = [-itemWidth, 0, itemWidth];
  const scaleOutput = [0.85, 1, 0.85];
  const opacityOutput = [0.3, 1, 0.3]; // Heavy dim for adjacent edge cards

  const scale = useTransform(distance, range, scaleOutput, { clamp: false });
  const opacity = useTransform(distance, range, opacityOutput, {
    clamp: false,
  });

  const safeScale = useTransform(scale, (s) =>
    Math.max(0.7, Math.min(s as number, 1)),
  );
  const safeOpacity = useTransform(opacity, (o) =>
    Math.max(0.2, Math.min(o as number, 1)),
  );

  const isActive = idx === activeIndex;

  return (
    <motion.div
      onClick={() => {
        if (isActive) onSelectProject(project.id);
      }}
      style={{
        width: cardWidth,
        scale: safeScale,
        opacity: safeOpacity,
      }}
      className={`relative shrink-0 h-[70vh] rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-3xl ring-1 ring-inset ring-white/20 ${
        isActive
          ? "cursor-pointer hover:ring-white/40 transition-[box-shadow]"
          : ""
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${project.color} opacity-80 mix-blend-screen`}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 via-purple-500/30 to-blue-900/40 mix-blend-overlay"></div>

      {/* Simulated Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay pointer-events-none"></div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-x-0 h-full w-full bg-cover bg-center mix-blend-screen pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* iOS Hardware Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-6 bg-[#050505] rounded-b-2xl z-20 flex justify-center items-center shadow-[inset_0_-1px_0_rgba(255,255,255,0.15)] pointer-events-none">
        <div className="w-10 h-1.5 rounded-full bg-white/10"></div>
      </div>

      {/* Bottom Overlay Panel - True Frosted Glass */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] min-h-[100px] backdrop-blur-3xl bg-white/5 border-t border-white/20 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-10 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] gap-2 md:gap-0">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white font-sans text-center md:text-left leading-none"
          style={{ fontStretch: "condensed" }}
        >
          {project.name}
        </h2>
        <span className="font-mono text-[10px] sm:text-xs md:text-sm text-[#00FFCC] tracking-widest text-center md:text-right font-medium">
          {project.stack}
        </span>
      </div>
    </motion.div>
  );
};

const AppLibrary = ({
  onSelectProject,
}: {
  onSelectProject: (id: number) => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = Math.min(windowWidth * 0.6, 800);
  const gap = 24;
  const itemWidth = cardWidth + gap;

  // x positions the container's center relative to viewport center.
  // We subtract cardWidth/2 so the center of the first card sits perfectly at x=0
  const targetX = -(activeIndex * itemWidth) - cardWidth / 2;
  const x = useMotionValue(targetX);

  useEffect(() => {
    animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
  }, [activeIndex, targetX, x]);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    const velocityThreshold = 500;

    // allow fast swipes
    const isSwipeLeft =
      info.offset.x < -threshold || info.velocity.x < -velocityThreshold;
    const isSwipeRight =
      info.offset.x > threshold || info.velocity.x > velocityThreshold;

    if (isSwipeLeft && activeIndex < PROJECTS.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (isSwipeRight && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center select-none bg-[#050505]"
    >
      {/* Cinematic Digital Grain Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Ambient Aura Glow */}
      <motion.div
        animate={{ background: bgGradients[activeIndex] || bgGradients[0] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[70vh] blur-[120px] opacity-70 z-0 pointer-events-none rounded-full"
      />

      {/* HUD: Top Left */}
      <div className="absolute top-8 left-8 z-30">
        <div className="px-5 py-2 rounded-full border border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl">
          <span className="font-mono text-[10px] tracking-widest text-[#FFFFFF] uppercase">
            INDEX // 0{activeIndex + 1} OF 0{PROJECTS.length}
          </span>
        </div>
      </div>

      {/* Center Drag Hint */}
      <div className="absolute top-[40%] sm:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 flex gap-2 pointer-events-none">
        <span className="text-white text-3xl font-light tracking-[0.5em] font-sans">
          &lt;&gt;
        </span>
      </div>

      {/* Project Carousel */}
      <div className="relative w-full h-[70vh] flex items-center justify-center z-10 overflow-visible mt-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-0 h-full overflow-visible flex items-center">
          <motion.div
            className="flex items-center h-full absolute cursor-grab active:cursor-grabbing"
            style={{ x, gap: `${gap}px` }}
            drag="x"
            dragConstraints={{
              left: -((PROJECTS.length - 1) * itemWidth) - cardWidth / 2,
              right: -(cardWidth / 2),
            }}
            onDragEnd={handleDragEnd}
          >
            {PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
                activeIndex={activeIndex}
                itemWidth={itemWidth}
                cardWidth={cardWidth}
                x={x}
                onSelectProject={onSelectProject}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Progress Indicator - Neon Line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[1px] bg-white/20 overflow-visible z-20 rounded-full">
        <motion.div
          className="h-full bg-[#00FFCC]"
          style={{ boxShadow: "0 0 10px #00FFCC, 0 0 20px #00FFCC" }}
          initial={{ width: `${(1 / PROJECTS.length) * 100}%` }}
          animate={{ width: `${((activeIndex + 1) / PROJECTS.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const CaseStudy01 = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#FFFFFF] flex overflow-hidden z-50 font-sans"
    >
      {/* LEFT PANE: FIXED VISUALS */}
      <div className="relative w-1/2 h-full bg-[#050505] flex items-center justify-center overflow-hidden border-r border-[#111111]">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(20,40,20,0.4)_0%,rgba(0,0,0,0)_70%)] blur-3xl pointer-events-none"></div>

        {/* Device Wrapper */}
        <motion.div
          initial={{ rotateY: 15, rotateX: 5, scale: 0.9 }}
          animate={{ rotateY: 15, rotateX: 5, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="relative w-[340px] h-[680px] rounded-[50px] bg-[#0A0A0A] p-3 shadow-2xl border-[3px] border-[#222222] ring-1 ring-[#000000] z-10"
        >
          {/* Hardware Details */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>

          {/* Inner Screen */}
          <div className="relative w-full h-full rounded-[40px] bg-[#050505] overflow-hidden border border-white/5 flex flex-col">
            {/* Live Sports UI Placeholder */}
            {/* Header */}
            <div className="pt-12 px-5 pb-4 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md">
              <span className="text-[10px] text-[#00FFCC] font-mono tracking-widest uppercase">
                Live Match
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]"></span>
                <span className="text-[8px] text-white/50 font-mono">
                  Deep Verification
                </span>
              </div>
            </div>
            {/* Score */}
            <div className="px-5 py-6 flex justify-between items-center border-b border-white/5">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">2</div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider">
                  ARS
                </div>
              </div>
              <div className="text-xs font-mono text-white/30">74:12</div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">1</div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider">
                  MCI
                </div>
              </div>
            </div>
            {/* Stat Chart */}
            <div className="flex-1 p-5 flex flex-col gap-4">
              <div className="w-full h-32 rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00FFCC]/20 to-transparent opacity-50"></div>
                {/* SVG Graph Line */}
                <svg
                  viewBox="0 0 100 40"
                  className="absolute bottom-0 left-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,40 L0,30 L20,25 L40,35 L60,15 L80,20 L100,5 L100,40 Z"
                    fill="rgba(0,255,204,0.1)"
                  />
                  <path
                    d="M0,30 L20,25 L40,35 L60,15 L80,20 L100,5"
                    fill="none"
                    stroke="#00FFCC"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div className="relative z-10 flex justify-between text-[8px] text-white/30 font-mono mt-auto">
                  <span>MOMENTUM</span>
                  <span className="text-[#00FFCC]">+12.4%</span>
                </div>
              </div>
              {/* Odds */}
              <div className="flex gap-3">
                <div className="flex-1 h-12 rounded-lg border border-[#CCFF00]/40 bg-[#CCFF00]/5 flex items-center justify-between px-3">
                  <span className="text-[10px] font-mono text-white/60">
                    HOME
                  </span>
                  <span className="text-xs font-bold text-[#CCFF00]">1.45</span>
                </div>
                <div className="flex-1 h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-between px-3">
                  <span className="text-[10px] font-mono text-white/50">
                    AWAY
                  </span>
                  <span className="text-xs font-bold text-white/80">3.80</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANE: SCROLLABLE ARCHITECTURE */}
      <div className="relative w-1/2 h-full overflow-y-auto overflow-x-hidden bg-[#000000]">
        {/* Custom Scroll Indicator */}
        <div className="fixed top-0 right-0 w-[2px] h-full bg-white/5 pointer-events-none z-50">
          {/* Minimal animated thumb */}
          <motion.div
            className="w-full h-32 bg-[#00FFCC] rounded-full opacity-50"
            style={{ boxShadow: "0 0 10px #00FFCC" }}
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content Container with Grid System */}
        <div className="min-h-full p-16 pb-32 flex flex-col gap-16 relative">
          {/* Block 1: Header & Meta */}
          <section className="border-b border-[#222222] pb-12 relative">
            <div className="absolute top-0 left-[-64px] w-4 h-[1px] bg-[#00FFCC]"></div>
            <span className="inline-block font-mono text-xs tracking-widest text-[#00FFCC] mb-6 uppercase">
              CASE_STUDY // 01
            </span>
            <h1
              className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white font-sans mb-8"
              style={{ fontStretch: "condensed" }}
            >
              REAL-TIME
              <br />
              ANALYTICS ENGINE
            </h1>
            <div className="flex gap-8 font-sans text-xs font-semibold tracking-widest text-white/60 uppercase">
              <span>[ ROLE // LEAD_ENGINEERING ]</span>
              <span>[ YEAR // 2025 ]</span>
            </div>
          </section>

          {/* Block 2: Skills & Stack */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ SYSTEM_ARCHITECTURE ]
            </h3>
            <div className="flex flex-wrap gap-3">
              {["SwiftUI", "Combine", "WebSockets", "Clean Architecture"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  >
                    {tech}
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Block 3: Description & Problem */}
          <section className="flex flex-col gap-10 border-b border-[#222222] pb-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ INITIALIZE_PROJECT ]
              </h3>
              <p className="text-white/80 font-sans text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                A hyper-optimized native iOS engine designed to ingest streams
                of raw sports data and instantly calculate predictive outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ THE_CONSTRAINT ]
              </h3>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
                The massive bottleneck was critical state management. The app
                needed to analyze continually changing metrics, cross-check
                injury feeds, and recalculate betting odds purely in real-time,
                all without dropping a single UI frame on a 120Hz ProMotion
                display.
              </p>
            </div>
          </section>

          {/* Block 4: Solution & Execution */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ THE_EXECUTION ]
            </h3>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  OddsVerificationEngine.swift
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#AABBCC]">
                <code>
                  <span className="text-[#CCFF00]">final class</span>{" "}
                  <span className="text-white">OddsVerificationEngine</span>{" "}
                  {"{"}
                  <br />
                  {"    "}private let latencyThreshold:{" "}
                  <span className="text-[#00FFCC]">TimeInterval</span> ={" "}
                  <span className="text-[#FF8888]">0.012</span>
                  <br />
                  {"    "}private var streamNode:{" "}
                  <span className="text-[#00FFCC]">WebSocketStream</span>?<br />
                  <br />
                  {"    "}
                  <span className="text-[#CCFF00]">func</span>{" "}
                  <span className="text-[#77AAFF]">dropFrameIf</span>(latency:{" "}
                  <span className="text-[#00FFCC]">TimeInterval</span>) -&gt;{" "}
                  <span className="text-[#00FFCC]">Bool</span> {"{"}
                  <br />
                  {"        "}
                  <span className="text-[#CCFF00]">guard</span> latency &lt;
                  latencyThreshold <span className="text-[#CCFF00]">else</span>{" "}
                  {"{"}
                  <br />
                  {"            "}
                  <span className="text-[#77AAFF]">recalibrateDataStream</span>
                  ()
                  <br />
                  {"            "}
                  <span className="text-[#CCFF00]">return true</span>
                  <br />
                  {"        "}
                  {"}"}
                  <br />
                  {"        "}
                  <span className="text-[#CCFF00]">return false</span>
                  <br />
                  {"    "}
                  {"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </section>

          {/* Block 5: Key Results / Metrics */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ PERFORMANCE_METRICS ]
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#00FFCC] uppercase tracking-widest">
                  Latency Focus
                </span>
                <div className="text-3xl lg:text-4xl font-light text-white font-mono tracking-tighter">
                  &lt; 12ms
                </div>
              </div>
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#00FFCC] uppercase tracking-widest">
                  Stability
                </span>
                <div className="text-3xl lg:text-4xl font-light text-[#CCFF00] font-mono tracking-tighter">
                  99.98%
                </div>
              </div>
              <div className="col-span-2 border border-[#222222] bg-[#050505] p-6 rounded-2xl h-56 flex flex-col relative overflow-hidden group hover:border-[#00FFCC]/40 transition-colors shadow-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,204,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
                <span className="relative z-10 font-mono text-[10px] text-[#00FFCC] uppercase tracking-widest justify-between flex">
                  <span>Memory Delta (MB)</span>
                  <span className="text-[#00FFCC] group-hover:animate-pulse shadow-[#00FFCC]">
                    Live Feed
                  </span>
                </span>
                <div className="mt-auto relative z-10 h-32 w-full pt-4">
                  <svg
                    viewBox="0 0 100 40"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    {/* The glowing drop line */}
                    <path
                      d="M0,35 L10,32 L20,38 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,6"
                      fill="none"
                      stroke="rgba(0,255,204,0.3)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      style={{
                        filter: "drop-shadow(0px 0px 4px rgba(0,255,204,0.5))",
                      }}
                    />
                    <path
                      d="M0,35 L10,32 L20,38 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,6"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* The indicator pulse */}
                    <circle
                      cx="100"
                      cy="6"
                      r="2.5"
                      fill="#00FFCC"
                      style={{ filter: "drop-shadow(0px 0px 6px #00FFCC)" }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Top Right Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-center items-center group hover:bg-white/10 transition-colors"
      >
        <span className="text-white/70 group-hover:text-white text-lg font-light tracking-widest font-sans transition-colors cursor-pointer">
          X
        </span>
      </button>
    </motion.div>
  );
};

const CaseStudy02 = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#FFFFFF] flex overflow-hidden z-50 font-sans"
    >
      {/* LEFT PANE: FIXED VISUALS */}
      <div className="relative w-1/2 h-full bg-[#050505] flex items-center justify-center overflow-hidden border-r border-[#111111]">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(255,85,0,0.2)_0%,rgba(0,0,0,0)_70%)] blur-3xl pointer-events-none"></div>

        {/* Device Wrapper - iPad/Tablet */}
        <motion.div
          initial={{ rotateY: 15, rotateX: 5, scale: 0.9 }}
          animate={{ rotateY: 15, rotateX: 5, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="relative w-[500px] h-[360px] rounded-[32px] bg-[#0A0A0A] p-4 shadow-2xl border-[3px] border-[#222222] ring-1 ring-[#000000] z-10"
        >
          {/* Inner Screen */}
          <div className="relative w-full h-full rounded-[24px] bg-[#050505] overflow-hidden border border-white/5 flex">
            {/* Sidebar */}
            <div className="w-[120px] h-full border-r border-white/5 bg-black/40 flex flex-col p-4 gap-4">
              <div className="w-8 h-8 rounded bg-[#FF5500]/20 flex items-center justify-center border border-[#FF5500]/50 shadow-[0_0_10px_rgba(255,85,0,0.3)]">
                <div className="w-3 h-3 bg-[#FF5500] rounded-sm"></div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                <div className="w-full h-1 bg-white/10 rounded-full"></div>
                <div className="w-8 h-1 bg-white/10 rounded-full"></div>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <div className="w-full h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-[8px] font-mono text-white/40">
                    SYNC
                  </span>
                </div>
              </div>
            </div>

            {/* Main Interface */}
            <div className="flex-1 flex flex-col p-5 gap-4">
              {/* Header */}
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-xs font-mono tracking-widest text-[#FF5500] uppercase">
                  Integrity Node Live
                </span>
                <div className="px-2 py-1 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FF5500] rounded-full animate-pulse shadow-[0_0_5px_rgba(255,85,0,0.8)]"></div>
                  <span className="text-[8px] font-mono text-white/50">
                    Anomaly Check: PASS
                  </span>
                </div>
              </div>

              {/* Data Dashboard */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* Complex Graph */}
                <div className="col-span-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col">
                  <div className="flex justify-between text-[8px] text-white/40 font-mono mb-2">
                    <span>PREDICTIVE ACCURACY BASELINE</span>
                    <span>144Hz INTERVALS</span>
                  </div>
                  <div className="flex-1 relative mt-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF5500]/10 to-transparent opacity-50"></div>
                    <svg
                      viewBox="0 0 200 60"
                      className="absolute bottom-0 left-0 w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,50 L20,45 L40,55 L60,30 L80,40 L100,20 L120,35 L140,15 L160,25 L180,5 L200,10 L200,60 L0,60 Z"
                        fill="rgba(255,85,0,0.1)"
                      />
                      <path
                        d="M0,50 L20,45 L40,55 L60,30 L80,40 L100,20 L120,35 L140,15 L160,25 L180,5 L200,10"
                        fill="none"
                        stroke="#FF5500"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M0,40 L40,45 L80,25 L120,20 L160,35 L200,15"
                        fill="none"
                        stroke="#8A2BE2"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </div>

                {/* Heatmap & Logs */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col gap-2">
                  <span className="text-[8px] font-mono text-white/40">
                    RISK HEATMAP
                  </span>
                  <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const alpha = Math.random() * 0.8 + 0.1;
                      return (
                        <div
                          key={i}
                          className="rounded-sm"
                          style={{ backgroundColor: `rgba(255,85,0,${alpha})` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col gap-2 overflow-hidden">
                  <span className="text-[8px] font-mono text-white/40">
                    SECURE ENCLAVE LOGS
                  </span>
                  <div className="flex flex-col gap-1.5 text-[6px] font-mono text-white/60">
                    <div className="flex gap-2">
                      <span className="text-[#8A2BE2]">0xFA1</span>
                      <span>Verified signature chunk...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#FF5500]">0xFA2</span>
                      <span>ML Threat model OK...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#8A2BE2]">0xFA3</span>
                      <span>Parsing local CoreData...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANE: SCROLLABLE ARCHITECTURE */}
      <div className="relative w-1/2 h-full overflow-y-auto overflow-x-hidden bg-[#000000]">
        {/* Custom Scroll Indicator */}
        <div className="fixed top-0 right-0 w-[2px] h-full bg-white/5 pointer-events-none z-50">
          <motion.div
            className="w-full h-32 bg-[#FF5500] rounded-full opacity-50"
            style={{ boxShadow: "0 0 10px #FF5500" }}
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content Container with Grid System */}
        <div className="min-h-full p-16 pb-32 flex flex-col gap-16 relative">
          {/* Block 1: Header & Meta */}
          <section className="border-b border-[#222222] pb-12 relative">
            <div className="absolute top-0 left-[-64px] w-4 h-[1px] bg-[#FF5500]"></div>
            <span className="inline-block font-mono text-xs tracking-widest text-[#FF5500] mb-6 uppercase">
              CASE_STUDY // 02
            </span>
            <h1
              className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white font-sans mb-8"
              style={{ fontStretch: "condensed" }}
            >
              PREDICTIVE
              <br />
              INTEGRITY ENGINE
            </h1>
            <div className="flex gap-8 font-sans text-xs font-semibold tracking-widest text-white/60 uppercase">
              <span>[ ROLE // NATIVE_ARCHITECTURE ]</span>
              <span>[ YEAR // 2024 ]</span>
            </div>
          </section>

          {/* Block 2: Skills & Stack */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ SYSTEM_ARCHITECTURE ]
            </h3>
            <div className="flex flex-wrap gap-3">
              {["CoreData", "ML Kit", "Secure Enclave", "RxSwift"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  >
                    {tech}
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Block 3: Description & Problem */}
          <section className="flex flex-col gap-10 border-b border-[#222222] pb-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ INITIALIZE_PROJECT ]
              </h3>
              <p className="text-white/80 font-sans text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                A highly secure, multi-threaded native application constructed
                to ingest and parse millions of sports data points locally.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ THE_CONSTRAINT ]
              </h3>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
                Executing deep verification on endless combinations of data
                arrays—cross-referencing real-time news, historical team
                statistics, and rapid anomaly detection logic entirely
                on-device, without triggering massive CPU spikes or draining
                user battery.
              </p>
            </div>
          </section>

          {/* Block 4: Solution & Execution */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ THE_EXECUTION ]
            </h3>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  DataIngestionService.swift
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#AABBCC]">
                <code>
                  <span className="text-[#FF5500]">import</span>{" "}
                  <span className="text-white">CoreData</span>
                  <br />
                  <span className="text-[#FF5500]">import</span>{" "}
                  <span className="text-white">RxSwift</span>
                  <br />
                  <br />
                  <span className="text-[#FF5500]">final class</span>{" "}
                  <span className="text-white">DataIngestionService</span> {"{"}
                  <br />
                  {"    "}private let disposeBag ={" "}
                  <span className="text-[#8A2BE2]">DisposeBag</span>()
                  <br />
                  {"    "}private let backgroundContext:{" "}
                  <span className="text-[#8A2BE2]">NSManagedObjectContext</span>
                  <br />
                  <br />
                  {"    "}
                  <span className="text-[#FF5500]">func</span>{" "}
                  <span className="text-[#77AAFF]">processFeed</span>(_ payload:{" "}
                  <span className="text-[#8A2BE2]">Data</span>) {"{"}
                  <br />
                  {"        "}backgroundContext.perform {"{"}
                  <br />
                  {"            "}
                  <span className="text-[#FF5500]">do</span> {"{"}
                  <br />
                  {"                "}
                  <span className="text-[#FF5500]">let</span> batch ={" "}
                  <span className="text-[#FF5500]">try</span>{" "}
                  <span className="text-[#8A2BE2]">JSONDecoder</span>().decode([
                  <span className="text-[#8A2BE2]">StatRecord</span>].
                  <span className="text-[#FF5500]">self</span>, from: payload)
                  <br />
                  {"                "}
                  <span className="text-[#FF5500]">try</span>{" "}
                  <span className="text-[#FF5500]">self</span>.
                  <span className="text-[#77AAFF]">batchInsert</span>(records:
                  batch)
                  <br />
                  {"            "}
                  {"}"} <span className="text-[#FF5500]">catch</span> {"{"}
                  <br />
                  {"                "}
                  <span className="text-[#77AAFF]">reportAnomaly</span>(error)
                  <br />
                  {"            "}
                  {"}"}
                  <br />
                  {"        "}
                  {"}"}
                  <br />
                  {"    "}
                  {"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </section>

          {/* Block 5: Key Results / Metrics */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ PERFORMANCE_METRICS ]
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-widest">
                  Data Parsed
                </span>
                <div className="text-3xl lg:text-4xl font-light text-white font-mono tracking-tighter">
                  2.4M <span className="text-base text-white/50">rows/sec</span>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-widest">
                  Battery Drain
                </span>
                <div className="text-3xl lg:text-4xl font-light text-[#FF5500] font-mono tracking-tighter">
                  &lt; 2% <span className="text-base text-white/50">/ hr</span>
                </div>
              </div>
              <div className="col-span-2 border border-[#222222] bg-[#050505] p-6 rounded-2xl h-56 flex relative overflow-hidden group hover:border-[#FF5500]/40 transition-colors shadow-lg items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,85,0,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>

                <div className="flex-1 flex flex-col justify-between h-full z-10 relative">
                  <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-widest">
                    Threat Detection
                  </span>
                  <div className="text-4xl font-light text-white font-mono tracking-tighter mb-2">
                    99.1%
                  </div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    ML Confidence Interval
                  </span>
                </div>

                <div className="w-32 h-32 relative z-10 mr-4">
                  {/* Glowing Radial Chart */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full transform -rotate-90"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FF5500"
                      strokeWidth="12"
                      strokeDasharray="251.2"
                      strokeDashoffset="22"
                      strokeLinecap="round"
                      style={{ filter: "drop-shadow(0 0 4px #FF5500)" }}
                      className="group-hover:stroke-[#8A2BE2] transition-colors duration-500"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Top Right Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-center items-center group hover:bg-white/10 transition-colors"
      >
        <span className="text-white/70 group-hover:text-white text-lg font-light tracking-widest font-sans transition-colors cursor-pointer">
          X
        </span>
      </button>
    </motion.div>
  );
};

const CaseStudy03 = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#FFFFFF] flex overflow-hidden z-50 font-sans"
    >
      {/* LEFT PANE: FIXED VISUALS */}
      <div className="relative w-1/2 h-full bg-[#050505] flex items-center justify-center overflow-hidden border-r border-[#111111]">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(255,0,255,0.15)_0%,rgba(0,0,0,0)_70%)] blur-3xl pointer-events-none"></div>

        {/* Device Wrapper - Smartphone + Smartwatch/Dashboard */}
        <motion.div
          initial={{ rotateY: 15, rotateX: 5, scale: 0.9 }}
          animate={{ rotateY: 15, rotateX: 5, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="relative w-full max-w-[500px] aspect-square flex items-center justify-center z-10"
        >
          {/* Hovering Smartwatch / Node Behind */}
          <div className="absolute z-10 w-[160px] h-[180px] rounded-[30px] bg-[#0A0A0A] p-2 shadow-xl border border-[#333333] transform rotate-12 -translate-x-32 -translate-y-16 blur-[1px] opacity-80">
            <div className="w-full h-full rounded-[24px] bg-black border border-white/10 flex items-center justify-center flex-col gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#8A2BE2]/10"></div>
              <span className="text-2xl text-white font-mono tracking-tighter">
                99.9%
              </span>
              <span className="text-[8px] text-[#8A2BE2] font-mono uppercase tracking-widest">
                Uptime
              </span>
            </div>
          </div>

          {/* Main Smartphone */}
          <div className="absolute z-20 w-[300px] h-[600px] rounded-[40px] bg-[#0A0A0A] p-3 shadow-2xl border-[2px] border-[#222222] ring-1 ring-[#000000] transform -rotate-6 translate-x-12 translate-y-8">
            {/* Hardware Details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>

            <div className="w-full h-full rounded-[32px] bg-[#050505] overflow-hidden border border-white/5 flex flex-col relative pt-8">
              {/* UI Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-black/50 backdrop-blur-md">
                <span className="text-[10px] text-[#FF00FF] font-mono tracking-widest uppercase">
                  Global Intel
                </span>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.8)] animate-pulse"></div>
                  <span className="text-[8px] font-mono text-white/50">
                    ACTIVE SYNC
                  </span>
                </div>
              </div>

              {/* Map/Nodes visual */}
              <div className="h-48 w-full border-b border-white/5 relative bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_100%)] flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute w-full h-full opacity-30"
                >
                  <path
                    d="M10,50 Q30,20 50,50 T90,50"
                    fill="none"
                    stroke="#FF00FF"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                  <circle cx="10" cy="50" r="2" fill="#FF00FF" />
                  <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
                  <circle cx="90" cy="50" r="2" fill="#8A2BE2" />
                </svg>
                <div className="text-[10px] font-mono text-white/50 absolute bottom-2 left-3">
                  NCAAB Sync Active
                </div>
              </div>

              {/* Alerts */}
              <div className="flex-1 p-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl border border-[#FF00FF]/30 bg-[#FF00FF]/10 flex flex-col gap-1.5 shadow-[0_0_15px_rgba(255,0,255,0.05)]">
                  <span className="text-[8px] font-mono text-[#FF00FF]">
                    THREAT ALERT // EURO SOCCER
                  </span>
                  <span className="text-xs text-white">
                    Anomalous betting patterns detected
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-1.5 backdrop-blur-md">
                  <span className="text-[8px] font-mono text-white/40">
                    ROUTING
                  </span>
                  <span className="text-[10px] text-white/80 font-mono">
                    Encrypted socket established via Edge Node #44
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANE: SCROLLABLE ARCHITECTURE */}
      <div className="relative w-1/2 h-full overflow-y-auto overflow-x-hidden bg-[#000000]">
        {/* Custom Scroll Indicator */}
        <div className="fixed top-0 right-0 w-[2px] h-full bg-white/5 pointer-events-none z-50">
          <motion.div
            className="w-full h-32 bg-[#FF00FF] rounded-full opacity-50"
            style={{ boxShadow: "0 0 10px #FF00FF" }}
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="min-h-full p-16 pb-32 flex flex-col gap-16 relative">
          {/* Block 1: Header & Meta */}
          <section className="border-b border-[#222222] pb-12 relative">
            <div className="absolute top-0 left-[-64px] w-4 h-[1px] bg-[#FF00FF]"></div>
            <span className="inline-block font-mono text-xs tracking-widest text-[#FF00FF] mb-6 uppercase">
              CASE_STUDY // 03
            </span>
            <h1
              className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white font-sans mb-8"
              style={{ fontStretch: "condensed" }}
            >
              GLOBAL INTEGRITY &<br />
              ODDS PLATFORM
            </h1>
            <div className="flex gap-8 font-sans text-xs font-semibold tracking-widest text-white/60 uppercase">
              <span>[ ROLE // PLATFORM_ARCHITECT ]</span>
              <span>[ YEAR // 2026 ]</span>
            </div>
          </section>

          {/* Block 2: Skills & Stack */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ SYSTEM_ARCHITECTURE ]
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "GraphQL",
                "End-to-End Encryption",
                "WatchOS/WearOS",
                "WebSockets",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Block 3: Description & Problem */}
          <section className="flex flex-col gap-10 border-b border-[#222222] pb-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ INITIALIZE_PROJECT ]
              </h3>
              <p className="text-white/80 font-sans text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                An enterprise intelligence application engineered to aggregate
                fractured international sports data streams and dynamically flag
                integrity anomalies.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ THE_CONSTRAINT ]
              </h3>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
                The core challenge was synchronizing highly volatile APIs—from
                erratic US college basketball feeds to European soccer match
                events—running deep verification algorithms against historical
                corruption databases simultaneously without incurring latency
                penalties on the client edge.
              </p>
            </div>
          </section>

          {/* Block 4: Solution & Execution */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ THE_EXECUTION ]
            </h3>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  AggregationGateway.ts
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#AABBCC]">
                <code>
                  <span className="text-[#FF00FF]">import</span> {"{ "}
                  encryptNodeMessage{" }"}{" "}
                  <span className="text-[#FF00FF]">from</span>{" "}
                  <span className="text-[#8A2BE2]">'@core/crypto'</span>;<br />
                  <br />
                  <span className="text-[#FF00FF]">export class</span>{" "}
                  <span className="text-white">AggregationGateway</span> {"{"}
                  <br />
                  {"  "}
                  <span className="text-[#FF00FF]">async</span>{" "}
                  <span className="text-[#77AAFF]">synchronizeStreams</span>
                  (feeds: <span className="text-[#8A2BE2]">StreamSource</span>
                  []) {"{"}
                  <br />
                  {"    "}
                  <span className="text-[#FF00FF]">const</span>{" "}
                  encryptedChannels = feeds.map(
                  <span className="text-[#FF00FF]">async</span> feed =&gt; {"{"}
                  <br />
                  {"      "}
                  <span className="text-[#FF00FF]">const</span> raw ={" "}
                  <span className="text-[#FF00FF]">await</span> feed.
                  <span className="text-[#77AAFF]">subscribe</span>();
                  <br />
                  {"      "}
                  <span className="text-[#FF00FF]">return</span>{" "}
                  <span className="text-[#77AAFF]">encryptNodeMessage</span>
                  (raw, process.env.ENCLAVE_KEY);
                  <br />
                  {"    "}
                  {"});"}
                  <br />
                  <br />
                  {"    "}
                  <span className="text-[#FF00FF]">return</span>{" "}
                  <span className="text-[#8A2BE2]">Promise</span>.
                  <span className="text-[#77AAFF]">all</span>(encryptedChannels)
                  <br />
                  {"      "}.<span className="text-[#77AAFF]">then</span>
                  (secureBatch =&gt;{" "}
                  <span className="text-[#FF00FF]">this</span>.
                  <span className="text-[#77AAFF]">dispatchToWebSockets</span>
                  (secureBatch))
                  <br />
                  {"      "}.<span className="text-[#77AAFF]">catch</span>(
                  <span className="text-[#77AAFF]">handleLatencySpike</span>);
                  <br />
                  {"  "}
                  {"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </section>

          {/* Block 5: Key Results / Metrics */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ PERFORMANCE_METRICS ]
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-32 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#FF00FF] uppercase tracking-widest">
                  API Sync
                </span>
                <div className="text-3xl lg:text-4xl font-light text-white font-mono tracking-tighter">
                  &lt; 50ms
                </div>
              </div>
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-32 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#FF00FF] uppercase tracking-widest">
                  Uptime
                </span>
                <div className="text-3xl lg:text-4xl font-light text-[#FF00FF] font-mono tracking-tighter">
                  99.99%
                </div>
              </div>
              <div className="col-span-2 border border-[#222222] bg-[#050505] p-6 rounded-2xl h-56 flex relative overflow-hidden group hover:border-[#FF00FF]/40 transition-colors shadow-lg items-center justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="flex-col justify-center h-full z-10 relative flex">
                  <span className="font-mono text-[10px] text-[#FF00FF] uppercase tracking-widest mb-1">
                    Data Routing
                  </span>
                  <div className="text-xl font-light text-white font-sans">
                    Cross-Continental Nodes
                  </div>
                  <span className="font-mono text-[9px] text-[#8A2BE2] tracking-widest mt-2 uppercase">
                    End-to-End Encrypted
                  </span>
                </div>

                <div className="w-40 h-40 relative z-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity mr-4">
                  {/* Interactive-looking globe/node map abstract */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-[spin_10s_linear_infinite]"
                  >
                    {/* Lat/Long curves */}
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="20"
                      ry="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="40"
                      ry="12"
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                    />

                    {/* Nodes */}
                    <circle
                      cx="20"
                      cy="30"
                      r="3"
                      fill="#FF00FF"
                      style={{ filter: "drop-shadow(0 0 6px #FF00FF)" }}
                    />
                    <circle
                      cx="70"
                      cy="20"
                      r="2"
                      fill="#8A2BE2"
                      style={{ filter: "drop-shadow(0 0 4px #8A2BE2)" }}
                    />
                    <circle
                      cx="80"
                      cy="60"
                      r="3.5"
                      fill="#FF00FF"
                      style={{ filter: "drop-shadow(0 0 8px #FF00FF)" }}
                    />
                    <circle
                      cx="30"
                      cy="80"
                      r="2.5"
                      fill="#FFFFFF"
                      style={{ filter: "drop-shadow(0 0 5px #FFFFFF)" }}
                    />

                    {/* Connecting lines */}
                    <path
                      d="M20,30 Q45,20 70,20"
                      fill="none"
                      stroke="rgba(255,0,255,0.5)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <path
                      d="M20,30 Q50,45 80,60"
                      fill="none"
                      stroke="rgba(138,43,226,0.6)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M70,20 Q75,40 80,60"
                      fill="none"
                      stroke="rgba(255,0,255,0.4)"
                      strokeWidth="1"
                    />
                    <path
                      d="M30,80 Q55,70 80,60"
                      fill="none"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="0.5"
                      strokeDasharray="1,1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Top Right Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-center items-center group hover:bg-white/10 transition-colors"
      >
        <span className="text-white/70 group-hover:text-white text-lg font-light tracking-widest font-sans transition-colors cursor-pointer">
          X
        </span>
      </button>
    </motion.div>
  );
};

const CaseStudy04 = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#FFFFFF] flex overflow-hidden z-50 font-sans"
    >
      {/* LEFT PANE: FIXED VISUALS */}
      <div className="relative w-1/2 h-full bg-[#050505] flex items-center justify-center overflow-hidden border-r border-[#111111]">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(238,255,0,0.1)_0%,rgba(0,0,0,0)_70%)] blur-3xl pointer-events-none"></div>

        {/* Device Wrapper - Smartphone */}
        <motion.div
          initial={{ rotateY: -15, rotateX: 5, scale: 0.9 }}
          animate={{ rotateY: -15, rotateX: 5, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="relative w-[340px] h-[680px] rounded-[50px] bg-[#0A0A0A] p-3 shadow-2xl border-[3px] border-[#222222] ring-1 ring-[#000000] z-10"
        >
          {/* Hardware Details */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>

          {/* Inner Screen */}
          <div className="relative w-full h-full rounded-[40px] bg-[#0A0A0A] overflow-hidden border border-white/5 flex flex-col pt-12">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/5 bg-black/80 backdrop-blur-md flex justify-between items-center z-20">
              <span className="text-xl font-sans tracking-tight font-bold text-white">
                Wallet
              </span>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded border border-[#EEFF00]/30 bg-[#EEFF00]/10 text-[8px] font-mono text-[#EEFF00]">
                  HASH SECURED
                </div>
              </div>
            </div>

            {/* Ledger UI */}
            <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 filter blur-[2px] opacity-60 pointer-events-none">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-mono text-white/40">
                  Total Balance
                </span>
                <div className="text-4xl font-light tracking-tighter text-white font-mono">
                  $44,529.11
                </div>
                <span className="text-[10px] font-mono text-[#BFFF00]">
                  + $1,240.00 (2.4%)
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">
                  Recent Hashes
                </span>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-mono text-white/80">
                        0x8F9C...3A1{i}
                      </span>
                      <span className="text-[8px] font-mono text-white/30">
                        Verified • 12ms ago
                      </span>
                    </div>
                    <span
                      className={`text-sm font-mono ${i === 2 ? "text-[#BFFF00]" : "text-white/60"}`}
                    >
                      {i === 2 ? "+" : "-"} {Math.round(Math.random() * 500)}.00
                    </span>
                  </div>
                ))}
              </div>

              {/* Numerical Keypad Mockup */}
              <div className="mt-auto grid grid-cols-3 gap-2 pb-4">
                {[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "•",
                  "0",
                  ">",
                ].map((key) => (
                  <div
                    key={key}
                    className="h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-light text-white/80"
                  >
                    {key}
                  </div>
                ))}
              </div>
            </div>

            {/* Biometric Prompt Overlay container */}
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-md">
              <div className="w-[85%] rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col items-center gap-6 shadow-2xl">
                {/* FaceID/Fingerprint Icon Mockup */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute">
                    <path
                      d="M50 10 C 20 10, 10 20, 10 50 C 10 80, 20 90, 50 90 C 80 90, 90 80, 90 50 C 90 20, 80 10, 50 10 Z"
                      fill="none"
                      stroke="rgba(238,255,0,0.2)"
                      strokeWidth="2"
                      strokeDasharray="10 5"
                    />
                  </svg>
                  <div className="w-10 h-10 border-[1.5px] border-[#EEFF00] rounded-xl transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(238,255,0,0.5)]">
                    <div className="w-4 h-4 bg-[#EEFF00] rounded-full"></div>
                  </div>
                </div>

                <div className="text-center flex flex-col gap-2">
                  <span className="text-lg font-sans font-medium text-white">
                    Verification Required
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    Confirm identity to initiate transfer.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANE: SCROLLABLE ARCHITECTURE */}
      <div className="relative w-1/2 h-full overflow-y-auto overflow-x-hidden bg-[#000000]">
        {/* Custom Scroll Indicator */}
        <div className="fixed top-0 right-0 w-[2px] h-full bg-white/5 pointer-events-none z-50">
          <motion.div
            className="w-full h-32 bg-[#EEFF00] rounded-full opacity-50"
            style={{ boxShadow: "0 0 10px #EEFF00" }}
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="min-h-full p-16 pb-32 flex flex-col gap-16 relative">
          {/* Block 1: Header & Meta */}
          <section className="border-b border-[#222222] pb-12 relative">
            <div className="absolute top-0 left-[-64px] w-4 h-[1px] bg-[#EEFF00]"></div>
            <span className="inline-block font-mono text-xs tracking-widest text-[#EEFF00] mb-6 uppercase">
              CASE_STUDY // 04
            </span>
            <h1
              className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white font-sans mb-8"
              style={{ fontStretch: "condensed" }}
            >
              ENCRYPTED HIGH-FREQUENCY
              <br />
              LEDGER
            </h1>
            <div className="flex gap-8 font-sans text-xs font-semibold tracking-widest text-white/60 uppercase">
              <span>[ ROLE // SECURITY_ARCHITECTURE ]</span>
              <span>[ YEAR // 2025 ]</span>
            </div>
          </section>

          {/* Block 2: Skills & Stack */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ SYSTEM_ARCHITECTURE ]
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Cryptography",
                "BiometricAuth",
                "Keychain/Keystore",
                "gRPC",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Block 3: Description & Problem */}
          <section className="flex flex-col gap-10 border-b border-[#222222] pb-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ INITIALIZE_PROJECT ]
              </h3>
              <p className="text-white/80 font-sans text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                A zero-latency, highly secure native wallet engineered
                specifically for rapid, high-frequency transactions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                [ THE_CONSTRAINT ]
              </h3>
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
                The immense challenge was implementing military-grade, on-device
                AES-256 encryption and biometric deep verification for
                high-frequency trading without causing blocking threads or
                compromising the 120Hz native UI fluidity.
              </p>
            </div>
          </section>

          {/* Block 4: Solution & Execution */}
          <section className="flex flex-col gap-6 border-b border-[#222222] pb-12">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ THE_EXECUTION ]
            </h3>
            <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  SecureEnclaveAuth.swift
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#AABBCC]">
                <code>
                  <span className="text-[#BFFF00]">import</span>{" "}
                  <span className="text-white">LocalAuthentication</span>
                  <br />
                  <span className="text-[#BFFF00]">import</span>{" "}
                  <span className="text-white">CryptoKit</span>
                  <br />
                  <br />
                  <span className="text-[#BFFF00]">final class</span>{" "}
                  <span className="text-white">SecureEnclaveAuth</span> {"{"}
                  <br />
                  {"    "}
                  <span className="text-[#BFFF00]">func</span>{" "}
                  <span className="text-[#77AAFF]">
                    generateTransactionToken
                  </span>
                  (amount: <span className="text-[#8A2BE2]">Double</span>){" "}
                  <span className="text-[#BFFF00]">async throws</span> -&gt;{" "}
                  <span className="text-[#8A2BE2]">Data</span> {"{"}
                  <br />
                  {"        "}
                  <span className="text-[#BFFF00]">let</span> context ={" "}
                  <span className="text-[#8A2BE2]">LAContext</span>()
                  <br />
                  {"        "}
                  <span className="text-[#BFFF00]">guard</span>{" "}
                  <span className="text-[#BFFF00]">try</span>{" "}
                  <span className="text-[#BFFF00]">await</span> context.
                  <span className="text-[#77AAFF]">evaluatePolicy</span>(<br />
                  {"            "}.deviceOwnerAuthenticationWithBiometrics,
                  <br />
                  {"            "}localizedReason:{" "}
                  <span className="text-[#FF8888]">
                    "Authenticate to sign ledger"
                  </span>
                  <br />
                  {"        "}) <span className="text-[#BFFF00]">else</span>{" "}
                  {"{"} <span className="text-[#BFFF00]">throw</span>{" "}
                  <span className="text-[#8A2BE2]">AuthError</span>.failed {"}"}
                  <br />
                  <br />
                  {"        "}
                  <span className="text-[#BFFF00]">let</span> key ={" "}
                  <span className="text-[#BFFF00]">try</span>{" "}
                  <span className="text-[#77AAFF]">
                    retrieveKeyFromKeychain
                  </span>
                  ()
                  <br />
                  {"        "}
                  <span className="text-[#BFFF00]">let</span> payload ={" "}
                  <span className="text-[#77AAFF]">createPayload</span>(amount)
                  <br />
                  {"        "}
                  <span className="text-[#BFFF00]">return</span>{" "}
                  <span className="text-[#BFFF00]">try</span>{" "}
                  <span className="text-[#8A2BE2]">AES</span>.GCM.
                  <span className="text-[#77AAFF]">seal</span>(payload, using:
                  key).combined!
                  <br />
                  {"    "}
                  {"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </section>

          {/* Block 5: Key Results / Metrics */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              [ PERFORMANCE_METRICS ]
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-32 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#EEFF00] uppercase tracking-widest">
                  Auth Time
                </span>
                <div className="text-3xl lg:text-4xl font-light text-white font-mono tracking-tighter">
                  &lt; 150ms
                </div>
              </div>
              <div className="col-span-1 border border-[#222222] bg-[#050505] p-6 rounded-2xl flex flex-col justify-between h-32 hover:border-white/20 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-[#EEFF00] uppercase tracking-widest">
                  Encryption
                </span>
                <div className="text-3xl lg:text-4xl font-light text-[#BFFF00] font-mono tracking-tighter">
                  AES-256
                </div>
              </div>
              <div className="col-span-2 border border-[#222222] bg-[#050505] p-6 rounded-2xl h-56 flex relative overflow-hidden group hover:border-[#EEFF00]/40 transition-colors shadow-lg items-center justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(238,255,0,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>

                <div className="flex-col justify-center h-full z-10 relative flex">
                  <span className="font-mono text-[10px] text-[#EEFF00] uppercase tracking-widest mb-1">
                    Cryptographic Hash
                  </span>
                  <div className="text-xl font-light text-white font-mono">
                    0xA19B...44F0
                  </div>
                  <span className="font-mono text-[9px] text-[#BFFF00] tracking-widest mt-2 uppercase">
                    Verified Transaction Block
                  </span>
                </div>

                <div className="w-32 h-32 relative z-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity mr-4">
                  {/* Interactive-looking 3D lock / hash abstract */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Hexagon base */}
                    <polygon
                      points="50,10 90,30 90,70 50,90 10,70 10,30"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <polygon
                      points="50,20 80,35 80,65 50,80 20,65 20,35"
                      fill="none"
                      stroke="#EEFF00"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      className="animate-[spin_20s_linear_infinite]"
                      style={{ transformOrigin: "50% 50%" }}
                    />

                    {/* Lock core */}
                    <rect
                      x="35"
                      y="45"
                      width="30"
                      height="25"
                      rx="4"
                      fill="none"
                      stroke="#BFFF00"
                      strokeWidth="2"
                      style={{ filter: "drop-shadow(0 0 5px #EEFF00)" }}
                    />
                    <path
                      d="M40,45 V35 A10,10 0 0,1 60,35 V45"
                      fill="none"
                      stroke="#BFFF00"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="58" r="3" fill="#EEFF00" />
                    <path
                      d="M50,61 V65"
                      fill="none"
                      stroke="#EEFF00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Top Right Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-center items-center group hover:bg-white/10 transition-colors"
      >
        <span className="text-white/70 group-hover:text-white text-lg font-light tracking-widest font-sans transition-colors cursor-pointer">
          X
        </span>
      </button>
    </motion.div>
  );
};

const Sandbox = ({ onClose }: { onClose: () => void }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nodes = useMemo(() => {
    return [...Array(40)].map((_, i) => {
      const cx = 50 + Math.cos(i * 1.5) * (15 + Math.random() * 30);
      const cy = 50 + Math.sin(i * 1.5) * (15 + Math.random() * 30);
      // eslint-disable-next-line react-hooks/purity
      const r = Math.random() * 1.5 + 0.5;
      return { id: i, cx, cy, r };
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden z-50 font-sans cursor-none perspective-[1000px] bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      {/* 3D WEBGL SIMULATION BG (CSS 3D approximation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center transform-style-3d">
        <motion.div
          animate={{
            rotateX: mousePos.y * 0.05 - 25,
            rotateY: mousePos.x * 0.05 - 25,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-full h-full absolute inset-0 flex items-center justify-center transform-style-3d"
        >
          {/* The Main Node Swarm */}
          <div className="relative w-[800px] h-[800px] flex items-center justify-center transform-style-3d">
            <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(97,218,251,0.15)_0%,rgba(0,0,0,0)_60%)] blur-[50px] animate-pulse"></div>
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,255,255,0.1)_0%,rgba(0,0,0,0)_60%)] blur-[40px]"></div>

            {/* Simulated Nodes connected */}
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full opacity-70 pointer-events-none"
              style={{ transform: "translateZ(100px)" }}
            >
              {/* Connecting Lines */}
              <path
                d="M50 50 L20 20 M50 50 L80 20 M50 50 L20 80 M50 50 L80 80"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="0.2"
                className="animate-pulse opacity-50"
              />
              <path
                d="M20 20 L30 10 M80 20 L90 30 M20 80 L35 90 M80 80 L70 90"
                fill="none"
                stroke="#00FFFF"
                strokeWidth="0.1"
                strokeDasharray="1 2"
              />

              {/* Node dots */}
              {nodes.map((node, i) => (
                <g key={node.id}>
                  <line
                    x1="50"
                    y1="50"
                    x2={node.cx}
                    y2={node.cy}
                    stroke="#61DAFB"
                    strokeWidth="0.05"
                    opacity="0.3"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill={i % 3 === 0 ? "#00FFFF" : "#61DAFB"}
                    style={{ filter: "drop-shadow(0 0 4px currentColor)" }}
                    className="hover:r-3 hover:fill-white transition-all duration-300"
                  />
                  {/* JSI Thread visualizations */}
                  {i % 5 === 0 && (
                    <rect
                      x={node.cx - 1}
                      y={node.cy - 1}
                      width="2"
                      height="2"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="0.2"
                      className="animate-[spin_4s_linear_infinite]"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* TOP LEFT HEADER */}
      <div className="absolute top-12 left-12 z-20 pointer-events-none flex flex-col gap-2">
        <span className="font-mono text-sm tracking-[0.3em] text-[#61DAFB] uppercase">
          [ ENV // RN_SANDBOX ]
        </span>
        <h1
          className="text-5xl lg:text-7xl font-sans font-black tracking-tighter uppercase text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.9)",
            fontStretch: "condensed",
          }}
        >
          FABRIC RENDERER &<br />
          JSI PHYSICS
        </h1>
      </div>

      {/* BOTTOM LEFT CONSOLE */}
      <div className="absolute bottom-12 left-12 z-20 w-80 rounded-none bg-black/80 border border-[#222222] p-6 flex flex-col gap-3 pointer-events-auto backdrop-blur-md">
        <div className="flex justify-between items-center mb-2 border-b border-[#333333] pb-2">
          <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
            Performance Metrics
          </span>
          <div className="w-2 h-2 bg-[#00FFFF] animate-pulse"></div>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-white/60">JS Thread:</span>
          <span className="text-[#61DAFB]">0.2ms</span>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-white/60">UI Thread:</span>
          <span className="text-[#00FFFF]">120fps</span>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-white/60">Reanimated Nodes:</span>
          <span className="text-white">1,024</span>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-white/60">Memory Allocation:</span>
          <span className="text-[#61DAFB]">Optimized</span>
        </div>
      </div>

      {/* RIGHT EDGE NAVIGATION */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pointer-events-auto items-end">
        {[
          ">_ Open NPM Modules",
          ">_ View Reanimated Gestures",
          ">_ Fork on GitHub",
        ].map((btn, i) => (
          <button
            key={i}
            className="group px-6 py-4 bg-transparent border-l-2 border-[#222222] hover:border-[#61DAFB] hover:bg-[#61DAFB]/5 transition-all duration-300 text-right min-w-[240px]"
          >
            <span className="font-mono text-xs tracking-widest text-white/50 group-hover:text-white uppercase transition-colors">
              {btn}
            </span>
          </button>
        ))}
      </div>

      {/* Top Right Reset Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-12 z-50 w-12 h-12 rounded-none border border-[#333333] bg-black hover:border-[#00FFFF] transition-colors flex justify-center items-center group cursor-none"
      >
        <span className="text-[#61DAFB] group-hover:text-[#00FFFF] text-lg font-light tracking-widest font-sans transition-colors pointer-events-none">
          X
        </span>
      </button>

      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      >
        {/* Crosshair */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-[1px] h-full bg-[#00FFFF] opacity-70"></div>
          <div className="absolute w-full h-[1px] bg-[#00FFFF] opacity-70"></div>
        </div>
        {/* Tooltip */}
        <div className="absolute left-6 top-6 bg-black/80 border border-[#333333] px-2 py-1 text-[8px] font-mono text-[#61DAFB] whitespace-nowrap">
          [x: {mousePos.x}, y: {mousePos.y}]
        </div>
      </motion.div>
    </motion.div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SystemCapabilities = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#AAAAAA] overflow-y-auto overflow-x-hidden z-50 font-sans cursor-default"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#AAA 1px, transparent 1px), linear-gradient(90deg, #AAA 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Global Navigation - Return to Root */}
      <button
        onClick={() => (window.location.href = "/")}
        className="fixed top-8 left-8 z-50 px-4 py-2 border border-[#333333] hover:border-[#61DAFB] bg-black hover:bg-[#61DAFB]/10 transition-colors flex justify-center items-center group cursor-pointer"
      >
        <span className="text-[#61DAFB] font-mono text-xs tracking-widest font-bold drop-shadow-[0_0_8px_#61DAFB] pointer-events-none">
          [ {"<"} RETURN_TO_ROOT ]
        </span>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col gap-24 md:gap-32 w-full">
        {/* SECTION 1: THE OUTPUT */}
        <div className="w-full">
          <h2
            className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase text-transparent bg-clip-text mb-12"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
          >
            SYSTEM_OUTPUT // CORE_DELIVERABLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="relative p-8 border border-[#333333] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#61DAFB] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-white font-mono text-lg font-bold mb-4 tracking-widest">{`>_ NATIVE_iOS_ARCHITECTURE`}</h3>
              <p className="text-sm font-sans tracking-wide leading-relaxed">
                High-fidelity interfaces, Fastlane deployment, App Store
                Connect, Swift/iOS SDK.
              </p>
            </div>
            {/* Card 2 */}
            <div className="relative p-8 border border-[#333333] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#61DAFB] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-white font-mono text-lg font-bold mb-4 tracking-widest">{`>_ ANDROID_ECOSYSTEMS`}</h3>
              <p className="text-sm font-sans tracking-wide leading-relaxed">
                Kotlin, Android SDK, Google Play Console optimization.
              </p>
            </div>
            {/* Card 3 */}
            <div className="relative p-8 border border-[#333333] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#61DAFB] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-white font-mono text-lg font-bold mb-4 tracking-widest">{`>_ CROSS-PLATFORM_ENGINES`}</h3>
              <p className="text-sm font-sans tracking-wide leading-relaxed">
                React Native, Flutter, Expo, 120Hz Fabric UI rendering.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CORE STACK */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter uppercase text-white mb-12">
            CORE_STACK // DEPENDENCIES
          </h2>
          <div className="flex flex-col gap-6 font-mono text-sm md:text-base border border-[#333] p-8 bg-black/60 overflow-x-auto">
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                LANGUAGES:
              </span>
              <span className="text-white">
                [ JavaScript (ES6+), TypeScript, Swift, Kotlin, Dart ]
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                FRAMEWORKS:
              </span>
              <span className="text-white">
                [ React Native, Flutter, Android SDK, iOS SDK, Expo ]
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                STATE & UI:
              </span>
              <span className="text-white">
                [ Redux, Context API, Tailwind CSS, NativeBase, React Navigation
                ]
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                DATA & CLOUD:
              </span>
              <span className="text-white">
                [ Firebase, SQLite, Realm, Redis, MongoDB ]
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                TOOLS & CI/CD:
              </span>
              <span className="text-white">
                [ Git, GitHub Actions, Fastlane, Detox, Jest ]
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start min-w-max">
              <span className="text-[#61DAFB] w-48 shrink-0 mb-2 md:mb-0">
                SOFT_PROTOCOLS:
              </span>
              <span className="text-[#CCFF00]">
                [ Technical Leadership, Architecture Design, Product Mindset,
                Agile/Scrum ]
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full">
          {/* SECTION 3: SYSTEM FOUNDATION (EDUCATION) */}
          <div className="w-full flex flex-col gap-10">
            <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tighter uppercase text-white mb-2">
              BASE_ARCHITECTURE // EDUCATION
            </h2>
            <div className="relative flex flex-col gap-10 pl-6 border-l border-[#333]">
              <div className="relative">
                <div className="absolute top-2 left-[-29px] w-4 h-4 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]"></div>
                <h3 className="font-mono text-lg text-white mb-2 tracking-widest">
                  [2024 - VIEW]
                </h3>
                <p className="text-sm font-sans tracking-wide">
                  MBA. Management // University of East London (London, UK)
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-[-27px] w-3 h-3 rounded-full bg-[#333] border border-[#61DAFB]"></div>
                <h3 className="font-mono text-lg text-white mb-2 tracking-widest">
                  [2022]
                </h3>
                <p className="text-sm font-sans tracking-wide">
                  Diploma Software Engineering // Holberton School (San
                  Francisco, US) - GPA 78/100
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-[-27px] w-3 h-3 rounded-full bg-[#333] border border-[#61DAFB]"></div>
                <h3 className="font-mono text-lg text-white mb-2 tracking-widest">
                  [2019]
                </h3>
                <p className="text-sm font-sans tracking-wide">
                  BSc. Sociology // Obafemi Awolowo University (Osun, NG) -
                  4.1/5.0 (Second Class Upper)
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: NETWORK IMPACT (MENTORSHIP) */}
          <div className="w-full flex flex-col gap-10">
            <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tighter uppercase text-white mb-2">
              NETWORK_SCALING // COMMUNITY_IMPACT
            </h2>
            <div className="flex flex-col gap-6">
              <details className="group border border-[#333] bg-black/40 p-6 cursor-pointer open:border-[#61DAFB] transition-colors">
                <summary className="font-mono text-white text-base md:text-lg tracking-wider outline-none flex items-center justify-between">
                  {`>_ Community Learning Centre (Technical Mentor)`}
                  <span className="text-[#61DAFB] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-sm font-sans leading-relaxed text-[#AAAAAA] pl-6 border-l border-[#333]">
                  Mentored 100+ students, led a 3-month cohort with 25 deployed
                  projects.
                </div>
              </details>
              <details className="group border border-[#333] bg-black/40 p-6 cursor-pointer open:border-[#61DAFB] transition-colors">
                <summary className="font-mono text-white text-base md:text-lg tracking-wider outline-none flex items-center justify-between">
                  {`>_ Google Developer Student Clubs (Guest Speaker)`}
                  <span className="text-[#61DAFB] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-sm font-sans leading-relaxed text-[#AAAAAA] pl-6 border-l border-[#333]">
                  Delivered microservices/Docker talks to 250 students at FUT
                  Akure.
                </div>
              </details>
              <details className="group border border-[#333] bg-black/40 p-6 cursor-pointer open:border-[#61DAFB] transition-colors">
                <summary className="font-mono text-white text-base md:text-lg tracking-wider outline-none flex items-center justify-between">
                  {`>_ CodeLagos (Volunteer Tutor)`}
                  <span className="text-[#61DAFB] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-sm font-sans leading-relaxed text-[#AAAAAA] pl-6 border-l border-[#333]">
                  Taught JS/Web fundamentals to underserved youth; mentored 2
                  hackathon-winning projects.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="w-full flex justify-center pb-12 mt-4 px-8 text-center items-center">
          <span className="font-mono text-xs text-[#61DAFB] tracking-widest uppercase animate-pulse drop-shadow-[0_0_5px_rgba(97,218,251,0.5)]">
            PROCEED TO ORIGIN_LOG ↓
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const TheOrigin = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 w-full h-screen bg-[#000000] text-[#AAAAAA] overflow-y-auto overflow-x-hidden z-50 font-sans cursor-default"
    >
      {/* Background Noise & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#AAA 1px, transparent 1px), linear-gradient(90deg, #AAA 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Main Flow - Vertical Axis */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-32 flex flex-col gap-24">
        {/* The Central Axis */}
        <div className="absolute top-32 bottom-32 left-[44px] md:left-[96px] w-[1px] bg-gradient-to-b from-transparent via-[#61DAFB] to-transparent shadow-[0_0_15px_#61DAFB] opacity-30"></div>

        {/* The Heading */}
        <div className="mb-12">
          <h1
            className="text-5xl lg:text-7xl font-sans font-black tracking-tighter uppercase text-transparent bg-clip-text"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)" }}
          >
            ORIGIN_LOG // DECRYPTED
          </h1>
        </div>

        {/* Block 1: The Catalyst */}
        <div className="pl-6 md:pl-20 relative">
          <div className="absolute top-2 left-[-3px] w-2 h-2 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]"></div>
          <div className="absolute top-3 left-0 w-6 md:w-20 h-[1px] bg-[#61DAFB] opacity-50"></div>
          <h2 className="font-mono text-lg md:text-xl text-[#FFFFFF] mb-4 tracking-widest bg-black/50 inline-block px-2 py-1 border border-[#222]">
            [SYS_BOOT_2018: INITIAL_CURIOSITY]
          </h2>
          <p className="text-sm font-sans leading-relaxed max-w-2xl text-[#AAAAAA]">
            Sparked by early fascination with legacy hardware. Began with
            self-directed exploration into digital product architecture. Rapidly
            transitioned into hands-on deployment using WordPress and Shopify,
            establishing a baseline in functional, user-focused web development
            and client communication.
          </p>
        </div>

        {/* Block 2: The Academic Override */}
        <div className="pl-6 md:pl-20 relative">
          <div className="absolute top-2 left-[-3px] w-2 h-2 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]"></div>
          <div className="absolute top-3 left-0 w-6 md:w-20 h-[1px] bg-[#61DAFB] opacity-50"></div>
          <h2 className="font-mono text-lg md:text-xl text-[#FFFFFF] mb-4 tracking-widest bg-black/50 inline-block px-2 py-1 border border-[#222]">
            [RUNTIME_ENV: THE_SOCIOLOGY_PARADOX]
          </h2>
          <p className="text-sm font-sans leading-relaxed max-w-2xl text-[#AAAAAA]">
            Navigated a divergence between an academic path in sociology and a
            relentless passion for technology. This background fundamentally
            shaped a deep understanding of human behavior, driving a user-first
            mentality in software architecture.
          </p>
        </div>

        {/* Block 3: Formal Compilation */}
        <div className="pl-6 md:pl-20 relative">
          <div className="absolute top-2 left-[-3px] w-2 h-2 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]"></div>
          <div className="absolute top-3 left-0 w-6 md:w-20 h-[1px] bg-[#61DAFB] opacity-50"></div>
          <h2 className="font-mono text-lg md:text-xl text-[#FFFFFF] mb-4 tracking-widest bg-black/50 inline-block px-2 py-1 border border-[#222]">
            [EXECUTION: LAGOS_TECH_TRAINING]
          </h2>
          <p className="text-sm font-sans leading-relaxed max-w-2xl text-[#AAAAAA]">
            Committed to formal, structured engineering training in Lagos,
            Nigeria. Focused heavily on modern web and mobile ecosystems,
            discovering an immediate, natural affinity for the constraints,
            logic, and possibilities of mobile architecture.
          </p>
        </div>

        {/* Block 4: The Mobile Specialization */}
        <div className="pl-6 md:pl-20 relative pb-12">
          <div className="absolute top-2 left-[-3px] w-2 h-2 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB] animate-pulse"></div>
          <div className="absolute top-3 left-0 w-6 md:w-20 h-[1px] bg-[#61DAFB] opacity-50"></div>
          <h2 className="font-mono text-lg md:text-xl text-[#FFFFFF] mb-4 tracking-widest bg-black/50 inline-block px-2 py-1 border border-[#222] shadow-[0_0_15px_rgba(97,218,251,0.15)]">
            [ARCHITECTURE_FOCUS: EMERGING_MARKETS]
          </h2>
          <p className="text-sm font-sans leading-relaxed max-w-2xl text-[#AAAAAA]">
            Shifted focus entirely to mobile development. Driven by the reality
            that mobile is the primary internet gateway in emerging markets.
            Obsessed with solving complex performance challenges: offline
            capabilities, real-time data parsing, and scaling 120Hz native
            fluidity for maximum accessibility.
          </p>
        </div>
      </div>

      {/* HUD ELEMENTS */}
      <div className="fixed top-8 right-12 z-50 pointer-events-none">
        <span className="font-mono text-[10px] text-[#61DAFB] tracking-widest bg-black/50 px-2 py-1 border border-[#333]">
          [SYS_LOG_ACCESSED]
        </span>
      </div>

      {/* Navigation Hint */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.2em] shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-pulse uppercase">
          PROCEED TO SECURE TERMINAL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#FFFFFF] to-transparent animate-[pulse_2s_infinite]"></div>
      </div>

      {/* Top Left Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 left-12 z-50 w-12 h-12 rounded-none border border-[#333333] bg-black hover:border-white transition-colors flex justify-center items-center group cursor-pointer"
      >
        <span className="text-[#AAAAAA] group-hover:text-white text-lg font-light tracking-widest font-sans transition-colors">
          &lt;
        </span>
      </button>
    </motion.div>
  );
};

const SystemIdentityTerminal = ({ onClose }: { onClose: () => void }) => {
  const [clientIdentity, setClientIdentity] = useState("");
  const [email, setEmail] = useState("");
  const [payload, setPayload] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // drag logic
  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > 300) {
      if (!isExecuting) {
        setIsExecuting(true);
        setTimeout(() => {
          setIsExecuting(false);
          onClose();
        }, 1500);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 w-full h-screen bg-[#000000] z-50 flex font-mono cursor-default overflow-hidden"
    >
      {/* Dark Blurred Background WebGL Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 blur-[12px] mix-blend-screen">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <group rotation={[0.5, 0.4, 0]}>
            {[...Array(50)].map((_, i) => (
              <mesh
                key={i}
                position={[
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 30,
                ]}
              >
                <sphereGeometry args={[Math.random() * 0.5 + 0.1, 8, 8]} />
                <meshBasicMaterial
                  color="#61DAFB"
                  wireframe
                  opacity={0.3}
                  transparent
                />
              </mesh>
            ))}
            {[...Array(30)].map((_, i) => (
              <line key={`line-${i}`}>
                <bufferGeometry attach="geometry">
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    args={[
                      new Float32Array([
                        (Math.random() - 0.5) * 30,
                        (Math.random() - 0.5) * 30,
                        (Math.random() - 0.5) * 30,
                        (Math.random() - 0.5) * 30,
                        (Math.random() - 0.5) * 30,
                        (Math.random() - 0.5) * 30,
                      ]),
                      3,
                    ]}
                  />
                </bufferGeometry>
                <lineBasicMaterial
                  attach="material"
                  color="#61DAFB"
                  opacity={0.15}
                  transparent
                />
              </line>
            ))}
          </group>
        </Canvas>
      </div>

      {/* Global Navigation - Return to Root */}
      <button
        onClick={() => (window.location.href = "/")}
        className="absolute top-8 left-8 z-50 px-4 py-2 border border-[#333333] hover:border-[#61DAFB] bg-black hover:bg-[#61DAFB]/10 transition-colors flex justify-center items-center group cursor-pointer"
      >
        <span className="text-[#61DAFB] font-mono text-xs tracking-widest font-bold drop-shadow-[0_0_8px_#61DAFB] pointer-events-none">
          [ {"<"} RETURN_TO_ROOT ]
        </span>
      </button>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {/* LEFT PANE: The Integrated Identity */}
        <div className="hidden md:flex w-full md:w-[40%] h-full relative items-center group/portrait">
          {/* Portrait Image */}
          <div className="absolute left-0 top-0 bottom-0 w-[80%] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#000000] z-10"></div>
            <img
              src="/image_1.png"
              alt="System Architect"
              className={`w-full h-full object-cover object-left opacity-30 grayscale mix-blend-screen transition-all duration-700 ${
                isHovered ? "brightness-150 contrast-125" : ""
              }`}
            />
            {/* Subtle Glitch Overlay */}
            {isHovered && (
              <div className="absolute inset-0 bg-[#61DAFB] mix-blend-overlay opacity-20 filter blur-sm animate-pulse"></div>
            )}
          </div>

          {/* Text Specs */}
          <div
            className="relative z-20 ml-12 md:ml-32"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2 className="text-[#FFFFFF] font-sans font-bold text-lg tracking-widest uppercase mb-6 opacity-90">
              SYSTEM_ARCHITECT // [YOUR NAME]
            </h2>
            <ul className="text-[#AAAAAA] font-mono text-xs flex flex-col gap-4 max-w-[280px]">
              <li>
                {`>_ ROLE:`}{" "}
                <span className="text-white">SENIOR_REACT_NATIVE_ENGINEER</span>
              </li>
              <li>
                {`>_ BASE_LOCATION:`}{" "}
                <span className="text-white">LAGOS, NIGERIA</span>
              </li>
              <li>
                {`>_ CORE_STACK:`}{" "}
                <span className="text-white">
                  TYPESCRIPT, REANIMATED_3, JSI
                </span>
              </li>
              <li>
                {`>_ DIRECT_LINE:`}{" "}
                <span className="text-white">hello@[yourdomain].com</span>
              </li>
              <li>
                {`>_ STATUS:`}{" "}
                <span className="text-[#CCFF00]">ACCEPTING_NEW_PAYLOADS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANE: The Expressive Terminal */}
        <div className="w-full md:w-[60%] h-full relative px-12 pt-32 pb-48 flex flex-col justify-start">
          {/* Top Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tighter lowercase text-white mb-2">
              let us talk!
            </h1>
            <p className="text-[#CCFF00] font-bold text-lg font-sans tracking-wide">
              (or write?)
            </p>
          </div>

          {/* Guarantee */}
          <div className="mb-16">
            <p className="text-white text-lg font-sans max-w-lg mb-2">
              Ready for your next project? Let's work together to turn your
              vision into reality! 🤝
            </p>
            <p className="text-[#888888] font-sans text-sm flex items-center gap-2">
              <span>⏱</span> A response within 24 hours is guaranteed!
            </p>
          </div>

          {/* Inputs */}
          <div className="w-full flex md:w-[80%] flex-col gap-10">
            <div className="flex items-center gap-4 text-white text-sm md:text-xl border-b border-[#333333] pb-3 group focus-within:border-[#CCFF00] transition-colors">
              <span className="text-[#61DAFB] group-focus-within:text-[#CCFF00] transition-colors font-bold tracking-widest">{`>_`}</span>
              <input
                type="text"
                value={clientIdentity}
                onChange={(e) => setClientIdentity(e.target.value)}
                placeholder="ENTER_IDENTIFICATION (First + Last Name)"
                className="bg-transparent text-[#FFFFFF] outline-none border-none placeholder-white/20 flex-1 w-full font-mono tracking-wider"
                spellCheck={false}
              />
            </div>
            <div className="flex items-center gap-4 text-white text-sm md:text-xl border-b border-[#333333] pb-3 group focus-within:border-[#CCFF00] transition-colors">
              <span className="text-[#61DAFB] group-focus-within:text-[#CCFF00] transition-colors font-bold tracking-widest">{`>_`}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_EMAIL_ADDRESS"
                className="bg-transparent text-[#FFFFFF] outline-none border-none placeholder-white/20 flex-1 w-full font-mono tracking-wider"
                spellCheck={false}
              />
            </div>
            <div className="flex items-start gap-4 text-white text-sm md:text-xl border-b border-[#333333] pb-3 group focus-within:border-[#CCFF00] transition-colors">
              <span className="text-[#61DAFB] group-focus-within:text-[#CCFF00] transition-colors font-bold tracking-widest pt-1">{`>_`}</span>
              <textarea
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                placeholder="ENTER_PAYLOAD (Tell me about your mobile project...)"
                className="bg-transparent text-[#FFFFFF] outline-none border-none placeholder-white/20 flex-1 w-full font-mono tracking-wider resize-none h-24"
                spellCheck={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* THE EXIT GESTURE (SLIDE TO EXECUTE) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 w-[80%] max-w-4xl flex flex-col items-center">
        {/* Emoji Visual & Slider Container */}
        <div className="relative w-full flex justify-center mt-2">
          <span className="absolute -top-12 text-4xl z-40 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-bounce pointer-events-none">
            🚀
          </span>
          <div className="relative w-full h-20 bg-[#111111] rounded-[40px] flex items-center border border-[#333333] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] mx-4 md:mx-0">
            <span
              className={`absolute inset-0 flex items-center justify-center text-sm md:text-base font-bold font-sans tracking-[0.2em] pointer-events-none z-0 transition-colors duration-300 ${
                isExecuting ? "text-[#CCFF00]" : "text-[#AAAAAA]"
              }`}
            >
              {isExecuting ? ">_ HANDSHAKE INITIATED." : "Let's gooooo! 🚀 ->"}
            </span>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: isExecuting ? 330 : 330 }} // This would be dynamic based on screen size ideally, fixed for standard UI prototyping here
              dragElastic={0.05}
              onDrag={handleDrag}
              dragSnapToOrigin={!isExecuting}
              className={`w-16 h-16 ml-2 rounded-[32px] shadow-[0_0_20px_#CCFF00] flex flex-col items-center justify-center cursor-grabbing relative z-10 shrink-0 ${
                isExecuting ? "bg-[#CCFF00]" : "bg-[#CCFF00]"
              } hover:brightness-125 transition-all`}
            >
              <span className="text-black font-black text-xs font-mono uppercase text-center leading-tight">
                Let's
                <br />
                go!
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-6 right-8 z-50 pointer-events-none">
        <span className="font-mono text-[9px] text-[#FFFFFF] tracking-widest opacity-40 uppercase">
          NATIVE FLUIDITY // VERIFIED SYSTEM: 120Hz.
        </span>
      </div>
    </motion.div>
  );
};

const FluidIsland = ({
  onNavigate,
}: {
  onNavigate: (id: number | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: number | null) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex justify-center">
      <motion.div
        layout
        initial={{ borderRadius: 9999 }}
        animate={{
          borderRadius: isOpen ? 24 : 9999,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative overflow-hidden bg-black/60 backdrop-blur-2xl border border-[#61DAFB]/30 shadow-[0_0_15px_rgba(97,218,251,0.15)] flex flex-col"
        style={{
          width: isOpen ? 380 : "auto",
        }}
      >
        {/* Header / Closed State */}
        <motion.button
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-3 px-8 py-3 cursor-pointer outline-none w-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#61DAFB] animate-[pulse_2s_infinite] shadow-[0_0_8px_#61DAFB]"></div>
          <motion.span
            layout
            className="font-mono text-[10px] tracking-[0.2em] text-[#FFFFFF] shadow-[0_0_5px_rgba(255,255,255,0.3)] whitespace-nowrap"
          >
            [JAY CODES] // SYSTEM_READY
          </motion.span>
        </motion.button>

        {/* Open State Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-8 pb-8 pt-4 flex flex-col gap-6 border-t border-white/10"
            >
              {[
                { id: null, label: "APP_LIBRARY", num: "01" },
                { id: 991, label: "SYSTEM_SPECS", num: "02" }, // Placeholder for About Me
                { id: 6, label: "ORIGIN_LOG", num: "03" }, // Page 9
                { id: 992, label: "SECURE_TERMINAL", num: "04" }, // Placeholder for Contact
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNav(item.id)}
                  className="group relative flex flex-col items-start w-full text-left outline-none cursor-pointer"
                >
                  <div className="flex items-end gap-4 w-full">
                    <span className="font-mono text-[#61DAFB] text-xs opacity-70 mb-1">{`>_ ${item.num} :`}</span>
                    <span className="font-sans font-black text-3xl tracking-tighter text-[#AAAAAA] uppercase group-hover:text-[#FFFFFF] transition-colors duration-300 relative">
                      {item.label}
                      {/* Strikethrough Effect */}
                      <span className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-[#61DAFB] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out shadow-[0_0_10px_#61DAFB]"></span>
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

function MainApp() {
  const [unlocked, setUnlocked] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  return (
    <>
      {unlocked && <FluidIsland onNavigate={setSelectedProjectId} />}
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <MobileLanding key="landing" onUnlock={() => setUnlocked(true)} />
        ) : selectedProjectId === null ? (
          <AppLibrary key="library" onSelectProject={setSelectedProjectId} />
        ) : selectedProjectId === 1 ? (
          <CaseStudy01
            key="casestudy01"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : selectedProjectId === 2 ? (
          <CaseStudy02
            key="casestudy02"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : selectedProjectId === 3 ? (
          <CaseStudy03
            key="casestudy03"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : selectedProjectId === 4 ? (
          <CaseStudy04
            key="casestudy04"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : selectedProjectId === 5 ? (
          <Sandbox key="sandbox" onClose={() => setSelectedProjectId(null)} />
        ) : selectedProjectId === 6 ? (
          <TheOrigin key="origin" onClose={() => setSelectedProjectId(null)} />
        ) : selectedProjectId === 991 ? (
          <SystemCapabilities
            key="capabilities"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : selectedProjectId === 992 ? (
          <SystemIdentityTerminal
            key="terminal"
            onClose={() => setSelectedProjectId(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function App() {
  // Initialize Lenis for smooth scrolling, although layout is fixed
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
