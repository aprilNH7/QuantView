'use client';

function genOrders(side: 'bid' | 'ask', base: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const offset = (i + 1) * (Math.random() * 50 + 10) * (side === 'bid' ? -1 : 1);
    const price = base + offset;
    const size = +(Math.random() * 2 + 0.1).toFixed(4);
    const total = +(price * size).toFixed(2);
    return { price: +price.toFixed(2), size, total, pct: Math.random() * 100 };
  });
}

export function OrderBook() {
  const bids = genOrders('bid', 107842.50, 8);
  const asks = genOrders('ask', 107842.50, 8);
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
        <h3 className="text-sm font-semibold">Order Book</h3>
        <span className="text-xs text-slate-500">BTC/USD</span>
      </div>
      <div className="grid grid-cols-3 px-4 py-2 text-[10px] text-slate-500 font-medium uppercase tracking-wider border-b border-white/[0.04]">
        <span>Price</span><span className="text-center">Size</span><span className="text-right">Total</span>
      </div>
      <div className="divide-y divide-white/[0.02]">
        {asks.reverse().map((o, i) => (
          <div key={`a${i}`} className="relative grid grid-cols-3 px-4 py-1.5 text-xs tabular-nums">
            <div className="absolute inset-0 bg-accent-red/5" style={{ width: `${o.pct}%`, right: 0, left: 'auto' }} />
            <span className="text-accent-red relative">${o.price.toLocaleString()}</span>
            <span className="text-center text-slate-400 relative">{o.size}</span>
            <span className="text-right text-slate-500 relative">${o.total.toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 text-center border-y border-white/[0.06]">
        <span className="text-lg font-bold text-accent-green">$107,842.50</span>
      </div>
      <div className="divide-y divide-white/[0.02]">
        {bids.map((o, i) => (
          <div key={`b${i}`} className="relative grid grid-cols-3 px-4 py-1.5 text-xs tabular-nums">
            <div className="absolute inset-0 bg-accent-green/5" style={{ width: `${o.pct}%`, right: 0, left: 'auto' }} />
            <span className="text-accent-green relative">${Math.abs(o.price).toLocaleString()}</span>
            <span className="text-center text-slate-400 relative">{o.size}</span>
            <span className="text-right text-slate-500 relative">${o.total.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
