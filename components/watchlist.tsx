'use client';

import { assets, formatCurrency } from '@/lib/data';
import { Sparkline } from './charts';

export function Watchlist() {
  const watched = assets.slice(0, 4);
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
      <h3 className="text-sm font-semibold mb-4">Watchlist</h3>
      <div className="space-y-3">
        {watched.map(a => (
          <div key={a.symbol} className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.03] cursor-pointer transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs">{a.icon}</span>
              <div>
                <div className="text-sm font-medium">{a.symbol}</div>
                <div className="text-[10px] text-slate-500">{a.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkline data={a.sparkline} color={a.changePct >= 0 ? '#00d68f' : '#ff3d71'} width={60} height={20} />
              <div className="text-right">
                <div className="text-xs font-semibold tabular-nums">{formatCurrency(a.price)}</div>
                <div className={`text-[10px] ${a.changePct >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>{a.changePct >= 0 ? '+' : ''}{a.changePct.toFixed(2)}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
