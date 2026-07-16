'use client';
export function FearGreedGauge({ value = 72 }: { value?: number }) {
  const angle = (value / 100) * 180 - 90;
  const label = value > 75 ? 'Extreme Greed' : value > 55 ? 'Greed' : value > 45 ? 'Neutral' : value > 25 ? 'Fear' : 'Extreme Fear';
  const color = value > 55 ? '#00d68f' : value > 45 ? '#ffaa00' : '#ff3d71';
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5 text-center">
      <h3 className="text-sm font-semibold mb-4">Fear & Greed Index</h3>
      <div className="relative w-40 h-20 mx-auto overflow-hidden">
        <svg viewBox="0 0 200 100" className="w-full">
          <path d="M 10 95 A 85 85 0 0 1 190 95" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" strokeLinecap="round" />
          <path d="M 10 95 A 85 85 0 0 1 190 95" fill="none" stroke={`url(#gauge-grad)`} strokeWidth="12" strokeLinecap="round" strokeDasharray={`${(value/100)*267} 267`} />
          <defs><linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff3d71" /><stop offset="50%" stopColor="#ffaa00" /><stop offset="100%" stopColor="#00d68f" /></linearGradient></defs>
          <line x1="100" y1="95" x2={100 + 70 * Math.cos((angle * Math.PI) / 180)} y2={95 - 70 * Math.sin((angle * Math.PI) / 180)} stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="95" r="4" fill="white" />
        </svg>
      </div>
      <div className="mt-2">
        <span className="text-3xl font-bold" style={{ color }}>{value}</span>
        <p className="text-xs text-slate-500 mt-1">{label}</p>
      </div>
    </div>
  );
}
