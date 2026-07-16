<div align="center">

# QuantView

### Real-Time Financial Analytics Dashboard

A modern, responsive financial analytics dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features interactive charts, portfolio tracking, market data visualization, and a sleek dark/light theme.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

</div>

## Features

- **Real-Time Dashboard** &mdash; Live-updating stat cards with animated counters for portfolio value, P&L, win rate, and trade count
- **Interactive Price Chart** &mdash; Candlestick-style visualization with OHLC data, volume bars, and multiple timeframe selectors
- **Market Overview Table** &mdash; Top assets ranked by market cap with inline sparkline charts, 24h change badges, and volume data
- **Portfolio Tracker** &mdash; Donut allocation chart, holdings breakdown with per-asset P&L, and total portfolio performance
- **Trade History** &mdash; Chronological trade feed with buy/sell indicators, fill prices, and status tracking
- **Dark / Light Mode** &mdash; Persistent theme toggle with glassmorphism card effects and smooth transitions
- **Fully Responsive** &mdash; Optimized layouts for desktop, tablet, and mobile viewports
- **Performance Optimized** &mdash; Static generation, minimal bundle size (93 kB first load), zero external API dependencies

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5.6 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion + CSS keyframes |
| **Charts** | Custom SVG (sparklines, donut, candlestick) |
| **Icons** | Lucide React |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/aprilNH7/QuantView.git
cd QuantView

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
QuantView/
├── app/
│   ├── globals.css          # Global styles, animations, glass effects
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── header.tsx           # Navigation bar with theme toggle
│   ├── stat-card.tsx        # Animated stat cards with gradient accents
│   ├── price-chart.tsx      # BTC/USD chart with candlesticks & volume
│   ├── market-table.tsx     # Sortable market overview table
│   ├── portfolio-panel.tsx  # Portfolio donut chart & holdings list
│   ├── trade-history.tsx    # Recent trades feed
│   └── charts.tsx           # Reusable chart components (sparkline, donut, bars)
├── hooks/
│   └── use-animated.ts      # Custom hooks (animated numbers, theme)
├── lib/
│   └── data.ts              # Types, mock data, formatters
└── public/
    └── favicon.svg          # App icon
```

## Architecture Highlights

- **Zero API Dependencies** &mdash; All data is self-contained for instant demo; swap `lib/data.ts` with real API calls (CoinGecko, Binance, etc.) for production use
- **Custom SVG Charts** &mdash; No heavy charting library; sparklines, donut rings, and volume bars are built with pure SVG for minimal bundle impact
- **CSS-First Animations** &mdash; Glassmorphism, gradient borders, grid backgrounds, and shimmer effects use CSS custom properties and `backdrop-filter`
- **Animated Number Counters** &mdash; `useAnimatedNumber` hook uses `requestAnimationFrame` with cubic easing for smooth count-up effects

## License

MIT License &mdash; see [LICENSE](LICENSE) for details.

---

<div align="center">
  <sub>Built with precision by <a href="https://github.com/aprilNH7">aprilNH7</a></sub>
</div>

