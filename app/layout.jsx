import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PAE Construction Indian OPC Pvt. Ltd. - Building Excellence',
  description: 'PAE Construction - Professional architectural, engineering, and construction services in Dehradun. Building dreams with precision and quality.',
  keywords: 'construction, architecture, engineering, Dehradun, PAE Construction, building, design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}