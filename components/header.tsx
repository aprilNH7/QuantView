'use client';

import { useTheme } from '@/hooks/use-animated';

export function Header() {
  const { dark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 dark:border-white/5 bg-surface-950/80 dark:bg-surface-950/80 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center shadow-lg shadow-brand-500/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Quant<span className="text-brand-400">View</span>
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {['Dashboard', 'Markets', 'Portfolio', 'Trade'].map((item, i) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i === 0
                  ? 'bg-white/[0.06] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-400">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Notifications */}
          <button className="relative w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent-red rounded-full text-[9px] font-bold text-white flex items-center justify-center">3</span>
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center text-xs font-bold text-white ring-2 ring-brand-500/20">
            AH
          </div>
        </div>
      </div>
    </header>
  );
}
