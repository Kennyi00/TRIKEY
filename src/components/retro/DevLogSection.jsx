import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DEV_LOGS = [
  {
    date: "2026.03.15",
    title: "PROTOTYPE v0.3 COMPLETE",
    content: "Core gameplay loop is feeling solid. Movement system got a complete overhaul. Things are starting to click.",
    status: "DONE",
  },
  {
    date: "2026.03.08",
    title: "ART DIRECTION LOCKED",
    content: "Settled on the visual style. Think low-poly meets surrealism. The team is hyped.",
    status: "DONE",
  },
  {
    date: "2026.02.28",
    title: "SOUND DESIGN PHASE",
    content: "Working on ambient soundscapes and SFX. Going for that eerie, nostalgic vibe.",
    status: "IN PROGRESS",
  },
  {
    date: "2026.02.15",
    title: "STUDIO FOUNDED",
    content: "Three keys. One door. Tri Key Studio is officially a thing. Let's make some games.",
    status: "DONE",
  },
];

function LogEntry({ log, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 border-2 border-accent bg-background rounded-full" />
      {/* Timeline line */}
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-border" />

      <div className="border border-border rounded-sm p-4 md:p-5 bg-card/30 hover:bg-card/60 transition-colors">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="font-mono text-xs text-muted-foreground">{log.date}</span>
          <span
            className={`font-pixel text-[9px] px-2 py-0.5 rounded-sm tracking-wider ${
              log.status === "IN PROGRESS"
                ? "bg-primary/20 text-primary"
                : "bg-accent/20 text-accent-foreground"
            }`}
          >
            [{log.status}]
          </span>
        </div>
        <h3 className="font-pixel text-xs md:text-sm text-primary mb-2">{log.title}</h3>
        <p className="font-vt text-base md:text-lg text-foreground/80">{log.content}</p>
      </div>
    </motion.div>
  );
}

export default function DevLogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8 vhs-noise">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="font-mono text-xs text-muted-foreground tracking-widest mb-2">
            // DEVLOG.SYS
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-primary animate-rgb-shift">
            DEV LOG
          </h2>
          <div className="h-px bg-gradient-to-r from-accent to-transparent mt-3" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {DEV_LOGS.map((log, index) => (
            <LogEntry key={index} log={log} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}