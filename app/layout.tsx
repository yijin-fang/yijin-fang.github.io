import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Yijin Fang | Cognitive Development Researcher',
    template: '%s | Yijin Fang',
  },
  description: 'Yijin Fang is a cognitive development researcher studying exploration, curiosity, and learning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
