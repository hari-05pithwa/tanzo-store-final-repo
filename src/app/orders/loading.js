export default function Loading() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      {/* Animated Loading Text */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-20">
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-zinc-400 animate-pulse">
          Tanzo Archive
        </h2>
        <div className="w-12 h-[1px] bg-zinc-200 overflow-hidden relative">
          <div className="absolute inset-0 bg-black animate-loading-bar"></div>
        </div>
      </div>
      
      {/* Skeleton Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-4 animate-pulse">
            <div className="aspect-[3/4] bg-zinc-100" />
            <div className="h-2 w-2/3 bg-zinc-100" />
            <div className="h-2 w-1/3 bg-zinc-100" />
          </div>
        ))}
      </div>
    </div>
  );
}