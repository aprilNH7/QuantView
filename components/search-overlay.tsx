'use client';
import { useState, useEffect } from 'react';
import { assets } from '@/lib/data';
export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === '/' && !open) { e.preventDefault(); setOpen(true); } if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
  }, [open]);
  const results = assets.filter(a => a.name.toLowerCase().includes(query.toLowerCase()) || a.symbol.toLowerCase().includes(query.toLowerCase()));
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg bg-surface-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search assets..." className="w-full px-5 py-4 bg-transparent text-sm outline-none border-b border-white/[0.06]" />
        <div className="max-h-64 overflow-y-auto">
          {results.map(a => (
            <div key={a.symbol} className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.04] cursor-pointer transition-colors">
              <span className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-sm">{a.icon}</span>
              <div><div className="text-sm font-medium">{a.symbol}</div><div className="text-[10px] text-slate-500">{a.name}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
