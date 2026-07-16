'use client';

import { portfolio, formatCurrency } from '@/lib/data';
import { AllocationRing } from './charts';

export function PortfolioPanel() {
  const totalValue = portfolio.reduce((s, h) => s + h.value, 0);
  const totalPnl = portfolio.reduce((s, h) => s + h.pnl, 0);
  const totalPnlPct = (totalPnl / (totalValue - totalPnl)) * 100;

  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06]">
        <h2 className="text-base font-semibold">Portfolio</h2>
        <p className="text-xs text-slate-500 mt-0.5">Your holdings & allocation</p>
      </div>

      {/* Allocation ring */}
      <div className="flex flex-col items-center py-6">
        <AllocationRing holdings={portfolio} />
        <div className="mt-4 text-center">
          <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-accent-green text-sm font-semibold">+{formatCurrency(totalPnl)}</span>
            <span className="text-accent-green/60 text-xs">({totalPnlPct.toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      {/* Holdings list */}
      <div className="px-5 pb-4 space-y-2">
        {portfolio.slice(0, 5).map(h => (
          <div key={h.symbol} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: h.color }} />
              <div>
                <div className="text-sm font-medium">{h.symbol}</div>
                <div className="text-[11px] text-slate-500">{h.shares} shares</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium tabular-nums">{formatCurrency(h.value)}</div>
              <div className={`text-[11px] font-medium ${h.pnl >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
                {h.pnl >= 0 ? '+' : ''}{h.pnlPct.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
