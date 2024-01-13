import styles from "./page.module.scss";
import Carousel from "@/components/productCard/carousel/Carousel";
import { getPopularProducts } from "@/db/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let popular_products;
  try {
    popular_products = await getPopularProducts();
  } catch {
    console.error("Error fetching popular products.");
  }
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <Image
          src="/images/rooms/room1.jpg"
          width={665}
          height={500}
          alt="Inspirational Room 1"
          priority
        />
        <div className={styles.subcontainer}>
          <Image
            src="/images/rooms/room2.jpg"
            width={333}
            height={500}
            alt="Inspirational Room 2"
            priority
          />
          <div className={styles.welcome}>
            <h1>Discover Style, Embrace Comfort</h1>
            <Link href="/products/tables" className={styles.category}>
              <h3>&#9654; Tables</h3>
            </Link>
            <Link href="/products/chairs" className={styles.category}>
              <h3>&#9654; Chairs</h3>
            </Link>
            <Link href="/products/shelves" className={styles.category}>
              <h3>&#9654; Shelves</h3>
            </Link>
            <Link href="/products/lighting" className={styles.category}>
              <h3>&#9654; Lighting</h3>
            </Link>
            <Link href="/products/decor" className={styles.category}>
              <h3>&#9654; Decor</h3>
            </Link>
            <Link href="/products/all" className={styles.no_underline}>
              <h3 className={styles.all_button}>Browse All Products</h3>
            </Link>
          </div>
        </div>
      </section>
      <Carousel title="Popular Products" products={popular_products} />
    </main>
  );
}
