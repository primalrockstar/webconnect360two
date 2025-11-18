
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebConnect360 - Platforms',
  description: 'EMS education and career development platforms',

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebConnect360 - Platforms",
  description: "Explore our educational platforms for EMT and Paramedic training",

};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>

    </html>
  );
}
