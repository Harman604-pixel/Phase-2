import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import styles from '../styles/Home.module.css';
import ProductCard from '../Components/products/ProductCard';

export default function Home() {
  const [featuredProducts] = useState([
    { id: 1, name: 'Premium Laptop', price: 999.99, image: '/images/laptop.jpg' },
    { id: 2, name: 'Wireless Headphones', price: 199.99, image: '/images/headphones.jpg' },
    { id: 3, name: 'Smartphone Pro', price: 799.99, image: '/images/phone.jpg' },
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Your Store Name</title>
        <meta name="description" content="Welcome to our e-commerce store" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Our Store</h1>
            <p>Discover amazing products at unbeatable prices</p>
            <button className={styles.ctaButton}>Shop Now</button>
          </div>
        </section>

        {/* Featured Products */}
        <section className={styles.featured}>
          <h2>Featured Products</h2>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section className={styles.banner}>
          <h3>Summer Sale!</h3>
          <p>Up to 50% off selected items</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}