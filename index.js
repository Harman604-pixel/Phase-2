// src/pages/index.js
import Navbar from '../components/common/Navbar'; // Import Navbar
import styles from '../styles/Home.module.css'; // Optional: CSS Modules

export default function Home() {
  return (
    <div className={styles.container}>
      {/* 1. Include the Navbar */}
      <Navbar />

      {/* 2. Main content */}
      <main>
        <h1>Welcome to our store!</h1>
        <p>Browse our amazing products.</p>
      </main>

      {/* (Optional: Add Footer here later) */}
    </div>
  );
}