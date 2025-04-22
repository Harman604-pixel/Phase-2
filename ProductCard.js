import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'; // Verify this path is correct

export default function ProductCard({ product }) {
  // Add default values to prevent undefined errors
  const {
    id = '',
    name = 'Product Name',
    category = 'Uncategorized',
    price = 0,
    originalPrice = null,
    onSale = false
  } = product || {};

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
          alt="Laptop"
          width={300}
          height={300}
          unoptimized={true}
/>

        {onSale && (
          <span className={styles.saleBadge}>Sale</span>
        )}
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.category}>{category}</p>
        
        <div className={styles.priceContainer}>
          {originalPrice ? (
            <>
              <span className={styles.discountedPrice}>
                ${price.toFixed(2)}
              </span>
              <span className={styles.originalPrice}>
                ${originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className={styles.price}>
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        <div className={styles.actions}>
          <Link 
            href={`/products/${id}`} 
            className={styles.viewButton}
            passHref
          >
            View Details
          </Link>
          <button className={styles.cartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}