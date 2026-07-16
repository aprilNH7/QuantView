'use client';
const EVENTS = [
  { icon: '↗', action: 'Bought 0.25 BTC', detail: 'at $106,500', time: '2m', color: 'text-accent-green' },
  { icon: '↙', action: 'Sold 2.5 ETH', detail: 'at $3,580', time: '1h', color: 'text-accent-red' },
  { icon: '⚡', action: 'Price alert triggered', detail: 'BTC > $107,000', time: '2h', color: 'text-accent-yellow' },
  { icon: '🔄', action: 'Portfolio rebalanced', detail: 'Auto-rebalance completed', time: '5h', color: 'text-brand-400' },
  { icon: '✓', action: 'Deposit confirmed', detail: '+$10,000 USDC', time: '1d', color: 'text-accent-green' },
];
export function ActivityLog() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06]"><h3 className="text-sm font-semibold">Activity Log</h3></div>
      <div className="divide-y divide-white/[0.04]">
        {EVENTS.map((e, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors">
            <span className={`text-lg ${e.color}`}>{e.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">{e.action}</div>
              <div className="text-[11px] text-slate-500">{e.detail}</div>
            </div>
            <span className="text-[10px] text-slate-500 shrink-0">{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
