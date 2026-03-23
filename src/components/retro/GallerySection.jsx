import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Placeholder game screenshots using Unsplash dark/game-themed images
const SCREENSHOTS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    caption: "DUNGEON_01.BMP",
    desc: "Early dungeon prototype — lighting pass WIP",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    caption: "OVERWORLD_02.BMP",
    desc: "Overworld concept — fog system test",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    caption: "COMBAT_03.BMP",
    desc: "Combat system early build",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    caption: "TITLE_SCREEN_04.BMP",
    desc: "Title screen mockup — palette locked",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    caption: "ENVIRONMENT_05.BMP",
    desc: "Environment art — stone hall test render",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    caption: "UI_CONCEPT_06.BMP",
    desc: "HUD and inventory system concept",
  },
];

function GlitchImage({ url, isGlitching }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Base image */}
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover transition-transform duration-100"
        style={{
          filter: isGlitching ? "contrast(1.3) saturate(0.4) brightness(0.9)" : "contrast(1.0) saturate(0.6) brightness(0.85)",
        }}
      />

      {/* RGB split layers — only on glitch */}
      {isGlitching && (
        <>
          <img
            src={url}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              filter: "contrast(1.3) saturate(0) brightness(0.9)",
              mixBlendMode: "screen",
              opacity: 0.5,
              transform: "translateX(-4px)",
              left: 0, top: 0,
              WebkitFilter: "hue-rotate(0deg) contrast(2) saturate(0)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,60,0.08) 2px, rgba(255,0,60,0.08) 4px)",
              animation: "vhsTracking 0.1s steps(1) infinite",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: `${Math.random() * 80}%`,
              left: 0,
              right: 0,
              height: `${4 + Math.random() * 12}px`,
              background: "rgba(0,255,200,0.15)",
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: `${20 + Math.random() * 50}%`,
              left: 0,
              right: 0,
              height: `${2 + Math.random() * 6}px`,
              background: "rgba(255,50,50,0.2)",
              mixBlendMode: "screen",
              transform: `translateX(${Math.random() > 0.5 ? 6 : -6}px)`,
            }}
          />
        </>
      )}

      {/* Always-on scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
          opacity: isGlitching ? 0.8 : 0.4,
        }}
      />

      {/* VHS noise on hover */}
      {isGlitching && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            animation: "staticNoise 0.15s steps(5) infinite",
          }}
        />
      )}
    </div>
  );
}

function GalleryCard({ item, onClick }) {
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef(null);

  const startGlitch = useCallback(() => {
    setIsGlitching(true);
    // Rapid flicker effect
    let count = 0;
    intervalRef.current = setInterval(() => {
      setIsGlitching(v => !v);
      count++;
      if (count > 10) {
        clearInterval(intervalRef.current);
        setIsGlitching(true);
      }
    }, 60);
  }, []);

  const stopGlitch = useCallback(() => {
    clearInterval(intervalRef.current);
    // Flicker off
    let count = 0;
    intervalRef.current = setInterval(() => {
      setIsGlitching(v => !v);
      count++;
      if (count > 6) {
        clearInterval(intervalRef.current);
        setIsGlitching(false);
      }
    }, 80);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative border border-border cursor-pointer group"
      style={{
        boxShadow: isGlitching
          ? "0 0 20px rgba(0,255,180,0.25), 0 0 40px rgba(255,0,60,0.15), inset 0 0 20px rgba(0,0,0,0.5)"
          : "0 0 0px transparent",
        transition: "box-shadow 0.15s",
        borderColor: isGlitching ? "rgba(0,255,180,0.5)" : undefined,
      }}
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
      onClick={() => { startGlitch(); onClick(item); }}
    >
      {/* Image container */}
      <div className="aspect-video overflow-hidden bg-card">
        <GlitchImage url={item.url} isGlitching={isGlitching} />
      </div>

      {/* Caption bar */}
      <div className="p-3 bg-card/80 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent tracking-wider">{item.caption}</span>
          {isGlitching && (
            <span className="font-pixel text-[8px] text-red-400 animate-blink">▓ SIGNAL</span>
          )}
        </div>
        <p className="font-vt text-sm text-muted-foreground mt-1">{item.desc}</p>
      </div>

      {/* Corner brackets */}
      <div className={`absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 transition-colors duration-150 ${isGlitching ? "border-accent" : "border-border"}`} />
      <div className={`absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 transition-colors duration-150 ${isGlitching ? "border-accent" : "border-border"}`} />
      <div className={`absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 transition-colors duration-150 ${isGlitching ? "border-accent" : "border-border"}`} />
      <div className={`absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 transition-colors duration-150 ${isGlitching ? "border-accent" : "border-border"}`} />
    </motion.div>
  );
}

function Lightbox({ item, onClose }) {
  const [glitch, setGlitch] = useState(true);

  // Auto-glitch on open
  useState(() => {
    const t = setTimeout(() => setGlitch(false), 800);
    return () => clearTimeout(t);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 cursor-pointer p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-4xl w-full border border-accent/40"
        onClick={e => e.stopPropagation()}
        style={{ boxShadow: "0 0 60px rgba(0,255,180,0.15), 0 0 120px rgba(255,0,60,0.1)" }}
      >
        <div className="relative aspect-video overflow-hidden">
          <GlitchImage url={item.url} isGlitching={glitch} />
        </div>
        <div className="bg-card border-t border-border p-4 flex items-center justify-between">
          <div>
            <div className="font-mono text-xs text-accent tracking-wider">{item.caption}</div>
            <div className="font-vt text-lg text-foreground mt-1">{item.desc}</div>
          </div>
          <button
            onClick={onClose}
            className="font-pixel text-[10px] text-muted-foreground hover:text-red-400 transition-colors tracking-wider"
          >
            [CLOSE]
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(null);

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8 vhs-noise">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="font-mono text-xs text-muted-foreground tracking-widest mb-2">
            // GALLERY.DAT
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-primary animate-rgb-shift">
            SCREENSHOTS
          </h2>
          <div className="h-px bg-gradient-to-r from-accent to-transparent mt-3" />
          <p className="font-vt text-base text-muted-foreground mt-3 tracking-wider">
            &gt; HOVER OR CLICK TO EXPERIENCE SIGNAL DISTORTION
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCREENSHOTS.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}