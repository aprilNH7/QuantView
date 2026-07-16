import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuantView | Financial Analytics Dashboard',
  description: 'Real-time financial analytics dashboard with interactive charts, portfolio tracking, and market insights.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-surface-950 dark:bg-surface-950 bg-grid antialiased">
        {children}
      </body>
    </html>
  );
}
