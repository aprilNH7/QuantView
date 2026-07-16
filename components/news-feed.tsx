'use client';

const NEWS = [
  { title: 'Bitcoin Surges Past $107K on Institutional Demand', source: 'CryptoNews', time: '12m', tag: 'BTC', sentiment: 'bullish' },
  { title: 'Ethereum Shanghai Upgrade Drives Staking Growth', source: 'DeFi Pulse', time: '45m', tag: 'ETH', sentiment: 'bullish' },
  { title: 'Solana DeFi TVL Reaches New All-Time High', source: 'The Block', time: '2h', tag: 'SOL', sentiment: 'bullish' },
  { title: 'Federal Reserve Signals Rate Decision Ahead', source: 'Bloomberg', time: '3h', tag: 'MACRO', sentiment: 'neutral' },
  { title: 'SEC Reviews New Crypto ETF Applications', source: 'Reuters', time: '5h', tag: 'REG', sentiment: 'neutral' },
];

export function NewsFeed() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06]">
        <h3 className="text-sm font-semibold">Market News</h3>
        <p className="text-[10px] text-slate-500 mt-0.5">Latest headlines</p>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {NEWS.map((n, i) => (
          <div key={i} className="px-5 py-3 hover:bg-white/[0.02] cursor-pointer transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug line-clamp-2">{n.title}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] text-slate-500">{n.source}</span>
                  <span className="text-[10px] text-slate-600">&bull;</span>
                  <span className="text-[10px] text-slate-500">{n.time}</span>
                </div>
              </div>
              <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold ${
                n.sentiment === 'bullish' ? 'bg-accent-green/10 text-accent-green' : 'bg-slate-500/10 text-slate-400'
              }`}>{n.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
