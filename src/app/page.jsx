import styles from './page.module.scss'
import Carousel from '@/components/productCard/carousel/Carousel'
import { getPopularProducts } from "@/db/api";

export default async function Home() {
  let popular_products;
  try {
    popular_products = await getPopularProducts();
  } catch {
    console.error("Error fetching popular products.");
    notFound();
  }
  return (
    <main>
      <Carousel title="Popular Products" products={popular_products} />
    </main>
  )
}
