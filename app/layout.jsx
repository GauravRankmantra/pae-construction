import './globals.css';
// Remove 'type' keyword as it's not needed in a .jsx file
// import type { Metadata } from 'next'; // This line caused the error
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// The metadata object is defined directly, no type import needed for JavaScript
export const metadata = {
  title: 'PAE Construction Indian OPC Pvt. Ltd. - Building Excellence',
  description: 'PAE Construction - Professional architectural, engineering, and construction services in Dehradun. Building dreams with precision and quality.',
  keywords: 'construction, architecture, engineering, Dehradun, PAE Construction, building, design',
};

export default function RootLayout({
  children,
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
