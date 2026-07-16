'use client';

import { assets, type Asset, formatCurrency } from '@/lib/data';
import { Sparkline } from './charts';

export function MarketTable() {
  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Market Overview</h2>
          <p className="text-xs text-slate-500 mt-0.5">Top assets by market cap</p>
        </div>
        <div className="flex gap-1">
          {['1H', '24H', '7D', '30D'].map((t, i) => (
            <button key={t} className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${i === 1 ? 'bg-brand-500/20 text-brand-400' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-slate-500 uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-medium">#</th>
              <th className="text-left px-3 py-3 font-medium">Asset</th>
              <th className="text-right px-3 py-3 font-medium">Price</th>
              <th className="text-right px-3 py-3 font-medium">24h Change</th>
              <th className="text-right px-3 py-3 font-medium hidden md:table-cell">Volume</th>
              <th className="text-right px-3 py-3 font-medium hidden lg:table-cell">Market Cap</th>
              <th className="text-right px-5 py-3 font-medium hidden sm:table-cell">7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <AssetRow key={a.symbol} asset={a} rank={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AssetRow({ asset, rank }: { asset: Asset; rank: number }) {
  const isPositive = asset.changePct >= 0;

  return (
    <tr className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors group cursor-pointer">
      <td className="px-5 py-4 text-xs text-slate-500 font-mono">{rank}</td>
      <td className="px-3 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-sm font-semibold group-hover:scale-110 transition-transform">
            {asset.icon}
          </div>
          <div>
            <div className="font-semibold text-sm">{asset.symbol}</div>
            <div className="text-xs text-slate-500">{asset.name}</div>
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-right">
        <span className="font-semibold text-sm tabular-nums">{formatCurrency(asset.price)}</span>
      </td>
      <td className="px-3 py-4 text-right">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold ${
          isPositive ? 'text-accent-green bg-accent-green/10' : 'text-accent-red bg-accent-red/10'
        }`}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={!isPositive ? 'rotate-180' : ''}>
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          {Math.abs(asset.changePct).toFixed(2)}%
        </span>
      </td>
      <td className="px-3 py-4 text-right text-sm text-slate-400 tabular-nums hidden md:table-cell">{asset.volume}</td>
      <td className="px-3 py-4 text-right text-sm text-slate-400 tabular-nums hidden lg:table-cell">{asset.marketCap}</td>
      <td className="px-5 py-4 text-right hidden sm:table-cell">
        <div className="inline-block">
          <Sparkline data={asset.sparkline} color={isPositive ? '#00d68f' : '#ff3d71'} width={100} height={28} />
        </div>
      </td>
    </tr>
  );
}
