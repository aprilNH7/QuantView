'use client';

import { useState } from 'react';

export function QuickTrade() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
      <h3 className="text-sm font-semibold mb-4">Quick Trade</h3>
      <div className="flex rounded-xl bg-white/[0.04] p-1 mb-4">
        {(['buy', 'sell'] as const).map(s => (
          <button key={s} onClick={() => setSide(s)} className={`flex-1 py-2 rounded-lg text-xs font-semibold uppercase transition-all ${
            side === s ? (s === 'buy' ? 'bg-accent-green text-black' : 'bg-accent-red text-white') : 'text-slate-500'
          }`}>{s}</button>
        ))}
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-[10px] text-slate-500 uppercase tracking-wider">Amount (BTC)</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full mt-1 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm font-mono focus:outline-none focus:border-brand-500/50 transition-colors" />
        </div>
        <div className="flex gap-2">
          {['25%', '50%', '75%', 'Max'].map(p => (
            <button key={p} className="flex-1 py-1.5 rounded-lg bg-white/[0.04] text-[10px] font-medium text-slate-400 hover:bg-white/[0.08] transition-colors">{p}</button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 py-2">
          <span>Est. Total</span>
          <span className="font-mono">$0.00</span>
        </div>
        <button className={`w-full py-3 rounded-xl text-sm font-bold uppercase transition-all ${
          side === 'buy' ? 'bg-accent-green hover:bg-accent-green/90 text-black' : 'bg-accent-red hover:bg-accent-red/90 text-white'
        }`}>{side === 'buy' ? 'Buy BTC' : 'Sell BTC'}</button>
      </div>
    </div>
  );
}
