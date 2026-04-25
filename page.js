import Link from 'next/link';
import { Package, Shield, Truck, ThumbsUp } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const brands = [
    'ROOTS', 'ebco', 'Link', 'Hettich', 'blum', 'HAFELE', 'jolly', 'dorsët', 'Greenply', 'DUROPLY', 'WIGWAM', 'Godrej interio'
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`container animate-fade-in`}>
          <h1 className={styles.heroTitle}>
            Premium Quality <br />
            <span className="gradient-text">Plywood & Glass</span>
          </h1>
          <p className={styles.heroDesc}>
            Wholesales & Retail in Glass, Hardware, Fitting, Ply & Board, Fiber, Kitchen Fitting, and Mica. Delivering excellence from Mandi Dabwali to your doorstep.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/catalogs" className="btn btn-primary">
              View Our Catalogs
            </Link>
            <Link href="#about" className="btn btn-outline glass">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brandsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Trusted by <span className="gradient-text">Top Brands</span>
          </h2>
          <div className={styles.brandsGrid}>
            {brands.map((brand, i) => (
              <div key={i} className={styles.brandPill}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose <span className="gradient-text">TRB Plywood?</span></h2>
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>
                <Package size={28} />
              </div>
              <h3 className={styles.featureTitle}>Vast Inventory</h3>
              <p className={styles.featureDesc}>
                We offer an extensive range of structural grade plywood, immune to termites, with zero gap processing. BWP grade, marine ply, and more.
              </p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>
                <Shield size={28} />
              </div>
              <h3 className={styles.featureTitle}>ISO Certified Quality</h3>
              <p className={styles.featureDesc}>
                ISO 9001, 14001 & 18001 Quality Assured Company. Termite & Borer free products like ROOTS PLATINUM ensuring the future of tomorrow.
              </p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>
                <ThumbsUp size={28} />
              </div>
              <h3 className={styles.featureTitle}>Expert Hardware & Fittings</h3>
              <p className={styles.featureDesc}>
                Premium kitchen fittings, glass hardware, and mica from industry-leading brands to elevate your interior spaces.
              </p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>
                <Truck size={28} />
              </div>
              <h3 className={styles.featureTitle}>Wholesale & Retail</h3>
              <p className={styles.featureDesc}>
                Whether you need materials for a large commercial project or a single home renovation, we provide competitive pricing and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
