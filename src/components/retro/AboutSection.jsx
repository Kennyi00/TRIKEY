import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
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
          className="mb-8"
        >
          <div className="font-mono text-xs text-muted-foreground tracking-widest mb-2">
            // ABOUT.TXT
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-primary animate-rgb-shift">
            WHO WE ARE
          </h2>
          <div className="h-px bg-gradient-to-r from-accent to-transparent mt-3" />
        </motion.div>

        {/* Terminal-style content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border animate-border-glow rounded-sm p-6 md:p-8 bg-card/50 backdrop-blur-sm"
        >
          <div className="font-mono text-xs text-accent mb-4 flex items-center gap-2">
            <span className="text-muted-foreground">user@trikey:</span>
            <span>~$ cat about.txt</span>
            <span className="animate-blink">_</span>
          </div>

          <div className="font-vt text-lg md:text-xl leading-relaxed text-foreground space-y-4">
            <p>
              We're <span className="text-primary font-bold">Tri Key Studio</span> — 
              a crew of friends who grew up on PS2 games, VHS tapes, and late-night 
              LAN parties. Now we're building the kind of games we always wanted to play.
            </p>
            <p>
              Our mission is simple: craft experiences that feel like finding an 
              unmarked disc in a bargain bin — weird, wonderful, and impossible to forget.
            </p>
            <p className="text-muted-foreground text-base">
              &gt; Currently cooking up something special. Stay tuned...
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border font-mono text-xs text-muted-foreground">
            EOF — 3 lines read
          </div>
        </motion.div>
      </div>
    </section>
  );
}