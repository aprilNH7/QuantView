'use client';
const DAYS = Array.from({ length: 30 }, (_, i) => ({ day: i + 1, pnl: Math.round((Math.random() - 0.4) * 5000) }));
export function ProfitCalendar() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
      <h3 className="text-sm font-semibold mb-4">Monthly P&L Calendar</h3>
      <div className="grid grid-cols-7 gap-1">
        {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-[10px] text-slate-500 text-center py-1">{d}</div>)}
        {DAYS.map(d => {
          const intensity = Math.min(Math.abs(d.pnl) / 3000, 1);
          const bg = d.pnl >= 0 ? `rgba(0,214,143,${intensity * 0.5})` : `rgba(255,61,113,${intensity * 0.5})`;
          return (
            <div key={d.day} className="aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform" style={{ background: bg }}>
              <span className="text-[10px] font-medium">{d.day}</span>
              <span className={`text-[8px] ${d.pnl >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>{d.pnl >= 0 ? '+' : ''}{(d.pnl/1000).toFixed(1)}k</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
