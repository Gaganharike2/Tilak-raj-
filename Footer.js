import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.brand}>
              <span className="gradient-text">TRB</span> Plywood
            </h2>
            <p className={styles.desc}>
              Your trusted partner for wholesale & retail in Glass, Hardware, Premium Fittings, Marine Ply & Board, Fiber, Modular Kitchen Fittings, and Mica. Delivering unmatched quality since 2022.
            </p>
          </div>
          
          <div>
            <h3 className={styles.title}>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/gallery" className={styles.link}>Gallery</Link>
              <Link href="/products" className={styles.link}>Products & Pricing</Link>
              <Link href="/services" className={styles.link}>Our Services</Link>
              <Link href="/checkout" className={styles.link}>Order Request</Link>
              <Link href="/login" className={styles.link}>Login</Link>
            </div>
          </div>
          
          <div>
            <h3 className={styles.title}>Contact Us</h3>
            <div className={styles.contact}>
              <p>
                <MapPin size={18} /> 
                <a href="https://www.google.com/maps/search/?api=1&query=Tilak+Raj+%26+Brothers+Plywood+and+Hardware+Store+Mandi+Dabwali" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Near Old Hanuman Mandir, New Anaj Mandi Road, MANDI DABWALI
                </a>
              </p>
              <p><Phone size={18} /> M. 89300-00986, 89300-00362</p>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                <a href="https://www.instagram.com/tilakraj.6812991?igsh=OXdtZWsza3FpdDJl&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Instagram
                </a>
              </p>
              <iframe 
                src="https://maps.google.com/maps?q=Tilak%20Raj%20%26%20Brothers%20Plywood%20and%20Hardware%20Store%20Mandi%20Dabwali&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} Tilak Raj & Brother Plywood & Glass Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
