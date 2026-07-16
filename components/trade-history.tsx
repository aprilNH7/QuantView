'use client';

import { recentTrades, formatCurrency } from '@/lib/data';

export function TradeHistory() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Recent Trades</h2>
          <p className="text-xs text-slate-500 mt-0.5">Last 24 hours</p>
        </div>
        <button className="text-xs text-brand-400 hover:text-brand-300 font-medium">View All</button>
      </div>

      <div className="divide-y divide-white/[0.04]">
        {recentTrades.map((t, i) => (
          <div key={t.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.02] transition-colors"
            style={{ animationDelay: `${i * 50}ms` }}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                t.side === 'buy' ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-red/10 text-accent-red'
              }`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {t.side === 'buy' ? (
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  ) : (
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  )}
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{t.symbol}</span>
                  <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                    t.side === 'buy' ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-red/10 text-accent-red'
                  }`}>{t.side}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.qty} @ {formatCurrency(t.price)}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium tabular-nums">{formatCurrency(t.total)}</div>
              <div className="text-[11px] text-slate-500">{t.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
