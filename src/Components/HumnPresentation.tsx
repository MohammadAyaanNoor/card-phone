import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Activity, Beaker, Dna, Watch } from "lucide-react";

const slides = [
  {
    id: "vitals",
    title: "Your body speaks in signals. Humn learns your rhythm.",
    icon: Activity,
    desc: "Humn learns your personal vital-sign patterns and watches them continuously, helping you understand what your body may be trying to tell you in real time.",
    image: "/bgimg.jpg", // Abstract Orange/Red
  },
  {
    id: "labs",
    title: "Your labs are no longer isolated numbers. They become a living story.",
    icon: Beaker,
    desc: "300+ Bio Markers. Humn turns your lab results into a living health map — connected to everything else it knows about you.",
    image: "/bgimg.jpg", // Abstract Light Blue/Orange
  },
  {
    id: "genomics",
    title: "Your DNA is the blueprint. Humn shows what it means today.",
    icon: Dna,
    desc: "Your genes may not change, but Humn does not treat genomics as a static report. It continuously reinterprets your genetic risks through your live health data.",
    image: "/bgimg.jpg", // Abstract Warm
  },
  {
    id: "wearables",
    title: "Your body is always talking. So Humn is always listen.",
    icon: Watch,
    desc: "Humn builds a real-time passive stream of wearable data that helps monitor patterns, detect shifts, and build a more complete picture of your real health.",
    image: "/bgimg.jpg", // Abstract Clean
  },
];

export default function HumnPresentation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress within the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) to the 4 slides
    const newIndex = Math.min(
      Math.floor(latest * slides.length),
      slides.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const activeSlide = slides[activeIndex];

  // Animation variants for smooth text entrance/exit
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#FAFAFA]" 
      style={{ height: `${slides.length * 100}vh` }} // Creates scrollable height
    >
      {/* Sticky UI Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Dynamic Heading */}
          <div className="w-full lg:w-1/3 h-48 lg:h-auto flex items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeSlide.id + "-title"}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl lg:text-5xl font-serif text-[#C25B44] leading-tight tracking-tight"
              >
                {activeSlide.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="w-full lg:w-1/3 flex justify-center z-10">
            {/* The Phone Hardware Frame */}
            <div className="relative w-[280px] h-[580px] lg:w-[320px] lg:h-[650px] bg-black rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden shrink-0">
              
              {/* Dynamic Screen Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id + "-screen"}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="absolute inset-0 w-full h-full bg-white"
                >
                  {/* Dynamic Image/Video Wrapper */}
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Faux UI Overlay simulating the app interface */}
                  <div className="absolute inset-0 flex flex-col pt-12 pb-8 px-6 bg-gradient-to-b from-white/80 via-transparent to-black/40">
                    <div className="flex justify-between items-center mb-12">
                      <div className="w-6 h-1 bg-black rounded-full" />
                      <span className="font-bold text-lg tracking-widest">humn</span>
                      <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mix-blend-overlay">
                      {activeSlide.id}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Icon & Description */}
          <div className="w-full lg:w-1/3 h-48 lg:h-auto flex items-center lg:items-start lg:justify-end">
            <div className="max-w-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id + "-desc"}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  {/* Dynamic Icon Wrapper */}
                  <div className="w-12 h-12 rounded-full bg-[#E87B5B] flex items-center justify-center shadow-lg">
                    <activeSlide.icon className="text-white w-6 h-6" />
                  </div>
                  
                  {/* Dynamic Description */}
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {activeSlide.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}