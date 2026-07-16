'use client';

import { useAnimatedNumber } from '@/hooks/use-animated';
import { formatCompact } from '@/lib/data';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

export function StatCard({ label, value, prefix = '$', suffix = '', change, icon, gradient, delay = 0 }: StatCardProps) {
  const animated = useAnimatedNumber(value, 2000 + delay);
  const isPositive = change >= 0;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] border border-white/[0.06] p-5 hover:border-white/[0.12] transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5">
      {/* Gradient accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity ${gradient}`} />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${gradient} shadow-lg`}>
            {icon}
          </div>
        </div>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-2xl font-bold tracking-tight tabular-nums">
            {prefix}{value >= 1000 ? formatCompact(animated).replace('$', '') : animated.toFixed(2)}{suffix}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className={`flex items-center gap-0.5 text-xs font-semibold ${isPositive ? 'text-accent-green' : 'text-accent-red'}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={!isPositive ? 'rotate-180' : ''}>
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            {Math.abs(change).toFixed(1)}%
          </span>
          <span className="text-[10px] text-slate-500">24h</span>
        </div>
      </div>
    </div>
  );
}
