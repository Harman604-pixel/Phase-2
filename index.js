// src/components/Navbar/index.js
import Link from 'next/link';
import styles from './styles.module.css'; // Correct import

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}