export default function FooterSection() {
  return (
    <footer className="relative py-16 px-4 border-t border-border vhs-noise">
      <div className="max-w-3xl mx-auto text-center">
        {/* Glitch divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8" />

        {/* ASCII art style */}
        <div className="font-mono text-xs text-muted-foreground leading-relaxed mb-8 tracking-wider">
          <p>╔══════════════════════════════╗</p>
          <p>║&nbsp;&nbsp;&nbsp;&nbsp;TRI KEY STUDIO © 2026&nbsp;&nbsp;&nbsp;&nbsp;║</p>
          <p>║&nbsp;&nbsp;&nbsp;&nbsp;ALL RIGHTS RESERVED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</p>
          <p>╚══════════════════════════════╝</p>
        </div>

        {/* Contact */}
        <div className="font-vt text-lg text-foreground/60 mb-6">
          <span className="text-accent">&gt;</span> GET IN TOUCH
        </div>

        <div className="flex justify-center gap-8 font-mono text-sm">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors tracking-wider"
          >
            [TWITTER]
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors tracking-wider"
          >
            [DISCORD]
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors tracking-wider"
          >
            [EMAIL]
          </a>
        </div>

        {/* Bottom status bar */}
        <div className="mt-12 font-mono text-xs text-muted-foreground/40 tracking-widest">
          SIGNAL LOST — END OF TRANSMISSION
        </div>
      </div>
    </footer>
  );
}