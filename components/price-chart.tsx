'use client';

import { MiniChart, VolumeBars } from './charts';

export function PriceChart() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f7931a]/10 flex items-center justify-center text-lg font-bold">
              ₿
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold">BTC / USD</h2>
                <span className="px-2 py-0.5 rounded-md bg-accent-green/10 text-accent-green text-xs font-semibold">+2.22%</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-2xl font-bold tabular-nums">$107,842.50</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex gap-1">
            {['1H', '4H', '1D', '1W', '1M', 'ALL'].map((t, i) => (
              <button key={t} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i === 2 ? 'bg-brand-500/20 text-brand-400' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart area */}
      <div className="p-5">
        <MiniChart />
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Volume (24h)</span>
            <span className="text-xs text-slate-400 tabular-nums">$48.2B</span>
          </div>
          <VolumeBars />
        </div>
      </div>

      {/* OHLC footer */}
      <div className="px-5 py-3 border-t border-white/[0.04] flex gap-6 overflow-x-auto">
        {[
          { label: 'Open', value: '$105,501.30' },
          { label: 'High', value: '$108,234.80' },
          { label: 'Low', value: '$104,892.10' },
          { label: 'Close', value: '$107,842.50' },
        ].map(d => (
          <div key={d.label} className="shrink-0">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">{d.label}</div>
            <div className="text-sm font-semibold tabular-nums mt-0.5">{d.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
