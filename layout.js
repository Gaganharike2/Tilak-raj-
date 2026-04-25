import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tilak Raj & Brother Plywood & Glass Works',
  description: 'Wholesale & Retail in Glass, Hardware, Fitting, Ply & Board, Fiber, Kitchen Fitting, Mica. Located in Mandi Dabwali.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
