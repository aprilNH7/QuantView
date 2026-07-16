'use client';
import { useState, useRef } from 'react';
interface TooltipProps { content: string; children: React.ReactNode; position?: 'top' | 'bottom'; }
export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="relative inline-flex" ref={ref} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className={`absolute z-50 px-3 py-1.5 rounded-lg bg-surface-800 border border-white/10 text-xs text-slate-300 whitespace-nowrap shadow-xl animate-slide-up ${
          position === 'top' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' : 'top-full mt-2 left-1/2 -translate-x-1/2'
        }`}>{content}</div>
      )}
    </div>
  );
}
