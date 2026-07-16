'use client';
import { assets } from '@/lib/data';
export function MarketHeatmap() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
      <h3 className="text-sm font-semibold mb-4">Market Heatmap</h3>
      <div className="grid grid-cols-4 gap-1.5">
        {assets.map(a => {
          const intensity = Math.min(Math.abs(a.changePct) * 15, 100);
          const bg = a.changePct >= 0 ? `rgba(0,214,143,${intensity/100*0.4})` : `rgba(255,61,113,${intensity/100*0.4})`;
          return (
            <div key={a.symbol} className="aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform" style={{ background: bg }}>
              <span className="text-xs font-bold">{a.symbol}</span>
              <span className={`text-[10px] font-semibold ${a.changePct >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
                {a.changePct >= 0 ? '+' : ''}{a.changePct.toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
