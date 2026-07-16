export interface Asset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePct: number;
  volume: string;
  marketCap: string;
  sparkline: number[];
  icon: string;
}

export interface PortfolioHolding {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPct: number;
  allocation: number;
  color: string;
}

export interface Trade {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  qty: number;
  price: number;
  total: number;
  time: string;
  status: 'filled' | 'pending' | 'cancelled';
}

export interface MarketStat {
  label: string;
  value: string;
  change: number;
  icon: string;
}

// Mock data
export const assets: Asset[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 107842.50, change: 2341.20, changePct: 2.22, volume: '$48.2B', marketCap: '$2.14T', sparkline: [62,65,63,68,66,71,69,74,72,78,76,80,77,82,85], icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 3542.18, change: -45.30, changePct: -1.26, volume: '$18.7B', marketCap: '$425.8B', sparkline: [48,52,50,47,45,48,44,46,43,45,42,44,41,43,40], icon: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', price: 248.92, change: 12.45, changePct: 5.27, volume: '$4.1B', marketCap: '$115.2B', sparkline: [30,28,32,35,33,38,36,40,42,45,43,48,50,52,55], icon: '◎' },
  { symbol: 'AVAX', name: 'Avalanche', price: 42.15, change: 1.87, changePct: 4.64, volume: '$892M', marketCap: '$17.1B', sparkline: [20,22,21,24,23,26,25,28,27,30,29,32,34,33,35], icon: '▲' },
  { symbol: 'LINK', name: 'Chainlink', price: 28.73, change: -0.92, changePct: -3.10, volume: '$1.2B', marketCap: '$17.8B', sparkline: [35,33,34,32,30,31,29,28,30,27,28,26,25,27,24], icon: '⬡' },
  { symbol: 'DOT', name: 'Polkadot', price: 9.45, change: 0.34, changePct: 3.73, volume: '$456M', marketCap: '$13.2B', sparkline: [15,16,15,17,18,17,19,20,19,21,22,21,23,24,25], icon: '●' },
  { symbol: 'MATIC', name: 'Polygon', price: 1.28, change: 0.08, changePct: 6.67, volume: '$678M', marketCap: '$11.9B', sparkline: [8,9,8,10,11,10,12,13,12,14,15,14,16,17,18], icon: '⬠' },
  { symbol: 'UNI', name: 'Uniswap', price: 15.42, change: -0.63, changePct: -3.92, volume: '$234M', marketCap: '$9.2B', sparkline: [22,21,23,20,19,21,18,17,19,16,17,15,14,16,13], icon: '🦄' },
];

export const portfolio: PortfolioHolding[] = [
  { symbol: 'BTC', name: 'Bitcoin', shares: 1.45, avgCost: 94200, currentPrice: 107842.50, value: 156371.63, pnl: 19781.13, pnlPct: 14.47, allocation: 48.2, color: '#f7931a' },
  { symbol: 'ETH', name: 'Ethereum', shares: 12.8, avgCost: 3180, currentPrice: 3542.18, value: 45339.90, pnl: 4635.90, pnlPct: 11.38, allocation: 14.0, color: '#627eea' },
  { symbol: 'SOL', name: 'Solana', shares: 185, avgCost: 185.40, currentPrice: 248.92, value: 46050.20, pnl: 11751.20, pnlPct: 34.27, allocation: 14.2, color: '#00ffa3' },
  { symbol: 'AVAX', name: 'Avalanche', shares: 420, avgCost: 35.20, currentPrice: 42.15, value: 17703.00, pnl: 2919.00, pnlPct: 19.73, allocation: 5.5, color: '#e84142' },
  { symbol: 'LINK', name: 'Chainlink', shares: 850, avgCost: 22.10, currentPrice: 28.73, value: 24420.50, pnl: 5635.50, pnlPct: 30.00, allocation: 7.5, color: '#2a5ada' },
  { symbol: 'DOT', name: 'Polkadot', shares: 2400, avgCost: 7.85, currentPrice: 9.45, value: 22680.00, pnl: 3840.00, pnlPct: 20.38, allocation: 7.0, color: '#e6007a' },
  { symbol: 'MATIC', name: 'Polygon', shares: 5200, avgCost: 0.95, currentPrice: 1.28, value: 6656.00, pnl: 1716.00, pnlPct: 34.74, allocation: 2.1, color: '#8247e5' },
  { symbol: 'UNI', name: 'Uniswap', shares: 320, avgCost: 12.80, currentPrice: 15.42, value: 4934.40, pnl: 838.40, pnlPct: 20.47, allocation: 1.5, color: '#ff007a' },
];

export const recentTrades: Trade[] = [
  { id: 'T001', symbol: 'BTC', side: 'buy', qty: 0.25, price: 106500, total: 26625, time: '2 min ago', status: 'filled' },
  { id: 'T002', symbol: 'SOL', side: 'buy', qty: 50, price: 245.80, total: 12290, time: '15 min ago', status: 'filled' },
  { id: 'T003', symbol: 'ETH', side: 'sell', qty: 2.5, price: 3580, total: 8950, time: '1 hr ago', status: 'filled' },
  { id: 'T004', symbol: 'LINK', side: 'buy', qty: 200, price: 28.50, total: 5700, time: '2 hr ago', status: 'filled' },
  { id: 'T005', symbol: 'AVAX', side: 'buy', qty: 100, price: 41.20, total: 4120, time: '3 hr ago', status: 'filled' },
  { id: 'T006', symbol: 'DOT', side: 'sell', qty: 500, price: 9.60, total: 4800, time: '5 hr ago', status: 'filled' },
  { id: 'T007', symbol: 'BTC', side: 'buy', qty: 0.1, price: 105800, total: 10580, time: '8 hr ago', status: 'filled' },
  { id: 'T008', symbol: 'MATIC', side: 'buy', qty: 2000, price: 1.22, total: 2440, time: '12 hr ago', status: 'filled' },
];

export const marketStats: MarketStat[] = [
  { label: 'Total Market Cap', value: '$3.42T', change: 1.8, icon: 'globe' },
  { label: 'BTC Dominance', value: '52.4%', change: -0.3, icon: 'bitcoin' },
  { label: 'Fear & Greed', value: '72', change: 5, icon: 'gauge' },
  { label: '24h Volume', value: '$142B', change: 12.4, icon: 'activity' },
];

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);
}

export function formatCompact(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}
