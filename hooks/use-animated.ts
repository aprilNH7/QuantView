'use client';

import { useState, useEffect } from 'react';

export function useAnimatedNumber(target: number, duration: number = 2000): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

export function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('qv-theme');
    if (saved === 'light') { setDark(false); document.documentElement.classList.remove('dark'); document.documentElement.classList.add('light'); }
  }, []);
  const toggle = () => {
    setDark(d => {
      const next = !d;
      if (next) { document.documentElement.classList.add('dark'); document.documentElement.classList.remove('light'); }
      else { document.documentElement.classList.remove('dark'); document.documentElement.classList.add('light'); }
      localStorage.setItem('qv-theme', next ? 'dark' : 'light');
      return next;
    });
  };
  return { dark, toggle };
}
