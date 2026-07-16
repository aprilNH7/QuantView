'use client';
import { useEffect, useState } from 'react';
const SHORTCUTS = [
  { key: '/', label: 'Search', desc: 'Open search overlay' },
  { key: 'T', label: 'Trade', desc: 'Open quick trade' },
  { key: 'D', label: 'Dark Mode', desc: 'Toggle theme' },
  { key: 'P', label: 'Portfolio', desc: 'View portfolio' },
  { key: 'Esc', label: 'Close', desc: 'Close any overlay' },
];
export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === '?' && e.shiftKey) setOpen(o => !o); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="bg-surface-900 rounded-2xl border border-white/10 p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
        <h3 className="text-sm font-semibold mb-4">Keyboard Shortcuts</h3>
        <div className="space-y-2">
          {SHORTCUTS.map(s => (
            <div key={s.key} className="flex items-center justify-between py-2">
              <span className="text-xs text-slate-400">{s.desc}</span>
              <kbd className="px-2 py-1 rounded bg-white/[0.06] text-[10px] font-mono font-bold">{s.key}</kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
