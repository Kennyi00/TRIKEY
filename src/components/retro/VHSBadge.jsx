export default function VHSBadge() {
  return (
    <div className="fixed top-4 right-4 z-50 font-vt text-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow" />
          <span className="text-red-400 tracking-widest">REC</span>
        </div>
        <span className="text-muted-foreground tracking-wider">
          PLAY ▶
        </span>
      </div>
      <div className="text-right text-muted-foreground text-xs mt-1 tracking-widest">
        SP 00:03:17
      </div>
    </div>
  );
}