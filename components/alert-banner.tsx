'use client';
import { useState } from 'react';
const ALERTS = [
  { id: 1, type: 'price', msg: 'BTC crossed $107,000', time: '2m ago', severity: 'info' },
  { id: 2, type: 'portfolio', msg: 'SOL allocation up 2% above target', time: '15m ago', severity: 'warning' },
  { id: 3, type: 'trade', msg: 'Buy order for 0.25 BTC filled at $106,500', time: '20m ago', severity: 'success' },
];
export function AlertBanner() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const active = ALERTS.filter(a => !dismissed.includes(a.id));
  if (!active.length) return null;
  const colors = { info: 'border-brand-500/30 bg-brand-500/5', warning: 'border-accent-yellow/30 bg-accent-yellow/5', success: 'border-accent-green/30 bg-accent-green/5' };
  return (
    <div className="space-y-2">
      {active.map(a => (
        <div key={a.id} className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${colors[a.severity as keyof typeof colors]}`}>
          <div className="flex items-center gap-3">
            <span className="text-sm">{a.msg}</span>
            <span className="text-[10px] text-slate-500">{a.time}</span>
          </div>
          <button onClick={() => setDismissed(d => [...d, a.id])} className="text-slate-500 hover:text-white text-xs">&times;</button>
        </div>
      ))}
    </div>
  );
}
