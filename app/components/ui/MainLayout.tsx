import type { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
