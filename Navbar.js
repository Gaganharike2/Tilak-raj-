'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.nav} style={{ borderBottomColor: isScrolled ? 'var(--card-border)' : 'transparent' }}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="220" height="45" viewBox="0 0 220 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <rect x="0" y="5" width="35" height="35" rx="8" fill="url(#goldGradient)" fillOpacity="0.1" stroke="url(#goldGradient)" strokeWidth="1.5" />
            <path d="M 10 15 L 25 15 M 17.5 15 L 17.5 30" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="48" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="800" fill="#ffffff" letterSpacing="1.5">TRB PLYWOOD</text>
            <text x="50" y="36" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="600" fill="#9ca3af" letterSpacing="3">&amp; GLASS WORKS</text>
          </svg>
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/services" className={styles.link}>Services</Link>
        </div>
        <div className={styles.actions}>
          <Link href="/login" className="btn btn-outline">Login</Link>
          <Link href="/register" className="btn btn-primary">Register</Link>
        </div>
      </div>
    </nav>
  );
}
