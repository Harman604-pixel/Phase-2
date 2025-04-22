// pages/products/[id].js
import { useRouter } from 'next/router';
import Navbar from '../../../components/common/Navbar';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <main>
        <h1>Product {id}</h1>
        <p>Details for product {id}</p>
      </main>
    </div>
  );
}