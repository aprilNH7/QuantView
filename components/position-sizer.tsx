'use client';
import { useState } from 'react';
export function PositionSizer() {
  const [capital, setCapital] = useState(10000);
  const [risk, setRisk] = useState(2);
  const [entry, setEntry] = useState(107842);
  const [stop, setStop] = useState(105000);
  const riskAmt = capital * (risk / 100);
  const diff = Math.abs(entry - stop);
  const posSize = diff > 0 ? riskAmt / diff : 0;
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
      <h3 className="text-sm font-semibold mb-4">Position Sizer</h3>
      <div className="space-y-3">
        {[
          { label: 'Capital ($)', val: capital, set: setCapital },
          { label: 'Risk (%)', val: risk, set: setRisk },
          { label: 'Entry Price', val: entry, set: setEntry },
          { label: 'Stop Loss', val: stop, set: setStop },
        ].map(f => (
          <div key={f.label}>
            <label className="text-[10px] text-slate-500 uppercase tracking-wider">{f.label}</label>
            <input type="number" value={f.val} onChange={e => f.set(+e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm font-mono focus:outline-none focus:border-brand-500/50" />
          </div>
        ))}
        <div className="pt-3 border-t border-white/[0.06] space-y-2">
          <div className="flex justify-between text-xs"><span className="text-slate-500">Risk Amount</span><span className="text-accent-yellow font-mono">${riskAmt.toFixed(2)}</span></div>
          <div className="flex justify-between text-xs"><span className="text-slate-500">Position Size</span><span className="text-accent-green font-bold font-mono">{posSize.toFixed(6)} BTC</span></div>
        </div>
      </div>
    </div>
  );
}
