'use client';
export function LoadingSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3 p-5">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="flex items-center gap-3 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-white/[0.06]" />
          <div className="flex-1 space-y-2">
            <div className="h-3 rounded bg-white/[0.06]" style={{ width: `${60 + Math.random() * 30}%` }} />
            <div className="h-2 rounded bg-white/[0.04]" style={{ width: `${40 + Math.random() * 20}%` }} />
          </div>
          <div className="w-16 h-4 rounded bg-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}
