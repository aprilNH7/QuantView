'use client';

import { useEffect, useRef, useState } from 'react';

interface SparklineProps {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}

export function Sparkline({ data, color, width = 120, height = 32 }: SparklineProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg width={width} height={height} className="sparkline overflow-visible">
      <defs>
        <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color.replace('#','')})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Mini chart — candlestick-style bars
export function MiniChart() {
  const bars = Array.from({ length: 48 }, (_, i) => {
    const base = 50 + Math.sin(i * 0.3) * 20 + Math.random() * 15;
    const isGreen = Math.random() > 0.45;
    return { height: base, green: isGreen };
  });

  return (
    <div className="flex items-end gap-[2px] h-40 w-full">
      {bars.map((b, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm transition-all duration-300 ${b.green ? 'bg-accent-green/70 hover:bg-accent-green' : 'bg-accent-red/50 hover:bg-accent-red/70'}`}
          style={{ height: `${b.height}%`, minWidth: '2px' }}
        />
      ))}
    </div>
  );
}

// Donut/Ring chart for portfolio allocation
export function AllocationRing({ holdings }: { holdings: { allocation: number; color: string; symbol: string }[] }) {
  const size = 180;
  const stroke = 20;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {holdings.map((h, i) => {
          const dashLen = (h.allocation / 100) * circumference;
          const dashOffset = -offset;
          offset += dashLen;
          return (
            <circle
              key={h.symbol}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={h.color}
              strokeWidth={stroke}
              strokeDasharray={`${dashLen} ${circumference - dashLen}`}
              strokeDashoffset={dashOffset}
              className="transition-all duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">8</span>
        <span className="text-[10px] text-slate-500 uppercase">Assets</span>
      </div>
    </div>
  );
}

// Activity/Volume bars
export function VolumeBars() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const bars = [35, 52, 41, 67, 55, 72, 48, 83, 61, 45, 78, 56, 90, 68, 42, 75, 58, 85, 63, 47, 71, 53, 88, 65];

  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-brand-500/30 hover:bg-brand-500/60 transition-all"
          style={{
            height: mounted ? `${h}%` : '0%',
            transition: `height 0.5s ease-out ${i * 30}ms`,
          }}
        />
      ))}
    </div>
  );
}
