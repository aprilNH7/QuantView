'use client';

import { Header } from '@/components/header';
import { StatCard } from '@/components/stat-card';
import { PriceChart } from '@/components/price-chart';
import { MarketTable } from '@/components/market-table';
import { PortfolioPanel } from '@/components/portfolio-panel';
import { TradeHistory } from '@/components/trade-history';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Portfolio Value"
            value={324155}
            change={14.2}
            gradient="bg-gradient-to-br from-brand-500 to-brand-700"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
          />
          <StatCard
            label="24h P&L"
            value={4892}
            change={2.8}
            gradient="bg-gradient-to-br from-accent-green to-emerald-700"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>}
            delay={100}
          />
          <StatCard
            label="Win Rate"
            value={73.4}
            prefix=""
            suffix="%"
            change={5.2}
            gradient="bg-gradient-to-br from-accent-purple to-purple-800"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
            delay={200}
          />
          <StatCard
            label="Total Trades"
            value={1247}
            prefix=""
            change={18.3}
            gradient="bg-gradient-to-br from-accent-yellow to-orange-600"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}
            delay={300}
          />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart — 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <PriceChart />
            <MarketTable />
          </div>

          {/* Sidebar — 1 column */}
          <div className="space-y-6">
            <PortfolioPanel />
            <TradeHistory />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/[0.04]">
          <p className="text-xs text-slate-500">
            Built with Next.js, TypeScript & Tailwind CSS &mdash; Data is simulated for demonstration purposes
          </p>
        </footer>
      </main>
    </div>
  );
}
