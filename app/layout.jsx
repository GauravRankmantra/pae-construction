import './globals.css';

import Navigation from '@/components/Navigation';
import Footer from '../components/Footer';


export const metadata = {
  title: 'PAE Construction Indian OPC Pvt. Ltd. - Building Excellence',
  description: 'PAE Construction - Professional architectural, engineering, and construction services in Dehradun. Building dreams with precision and quality.',
  keywords: 'construction, architecture, engineering, Dehradun, PAE Construction, building, design',
  icons: {
    // Standard favicon.ico
    icon: '/favicon.ico', // Directly points to public/favicon.ico

 

    
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.svg',
        color: '#000000', // Specify a color for mask icons if used
      },
      {
        rel: 'icon', // Using 'icon' again for the SVG
        type: 'image/svg+xml',
        url: '/images/logo.svg',
      },
    ],
  },

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
