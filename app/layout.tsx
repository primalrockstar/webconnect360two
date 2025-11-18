import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebConnect360 - Platforms',
  description: 'EMS education and career development platforms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
