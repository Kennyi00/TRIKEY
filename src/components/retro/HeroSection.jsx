import { motion } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/69c1737988fd4ccaf507e46b/e8e0a5544_tri_key_studio_outlined.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden vhs-noise">
      {/* Ambient glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      {/* PS2 boot style top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mb-6"
      >
        <img
          src={LOGO_URL}
          alt="Tri Key Studio Logo"
          className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto"
          style={{ filter: 'drop-shadow(0 0 30px rgba(200,170,50,0.4))' }}
        />
      </motion.div>

      {/* Studio Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-pixel text-2xl md:text-4xl text-primary tracking-wider text-center animate-rgb-shift"
      >
        TRI KEY STUDIO
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="font-vt text-xl md:text-2xl text-muted-foreground mt-4 tracking-[0.3em] uppercase text-center"
      >
        Unlocking New Worlds
      </motion.p>

      {/* Blinking cursor line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12 font-mono text-accent text-sm md:text-base"
      >
        <span className="animate-rgb-shift">&gt;</span>{" "}
        <span className="text-foreground">SYSTEM READY</span>
        <span className="animate-blink text-accent ml-1">_</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 font-vt text-sm text-muted-foreground tracking-widest"
      >
        ▼ SCROLL DOWN ▼
      </motion.div>
    </section>
  );
}