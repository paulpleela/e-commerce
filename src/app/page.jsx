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
          useMap="#room1"
        />

        <map name="room1">
            <Link href="/products/id/659a2f6d8dee4b8d09dbbaae"><area shape="circle" coords="340,310,10" alt="Compact Wooden Cube Table" title="Compact Wooden Cube Table"/></Link>
            <Link href="/products/id/659a9f3a6ff51b1febce173c"><area shape="circle" coords="240,250,10" alt="Sleek Black Leather Egg Chair" title="Sleek Black Leather Egg Chair"/></Link>
            <Link href="/products/id/659aa0416ff51b1febce173d"><area shape="circle" coords="510,330,10" alt="Comfortable Charcoal Couch" title="Comfortable Charcoal Couch"/></Link>
            <Link href="/products/id/659aa7a66ff51b1febce1746"><area shape="circle" coords="640,290,10" alt="Coral Hues Throw Pillow" title="Coral Hues Throw Pillow"/></Link>
            <Link href="/products/id/659aa7326ff51b1febce1745"><area shape="circle" coords="570,170,10" alt="Minimalist White Wall Clock" title="Minimalist White Wall Clock"/></Link>
        </map>

        <div className={styles.subcontainer}>
          <Image
            src="/images/rooms/room2.jpg"
            width={333}
            height={500}
            alt="Inspirational Room 2"
            priority
            useMap="#room2"
          />

          <map name="room2">
            <Link href="/products/id/659aa8846ff51b1febce174a"><area shape="circle" coords="190,120,10" alt="Monstera in Clay Pot" title="Monstera in Clay Pot"/></Link>
            <Link href="/products/id/659aa7f56ff51b1febce1748"><area shape="circle" coords="160,320,10" alt="Monochrome Striped Accent Pillow" title="Monochrome Striped Accent Pillow"/></Link>
            <Link href="/products/id/659aa11b6ff51b1febce173e"><area shape="circle" coords="40,280,10" alt="Cognac Leather Sofa" title="Cognac Leather Sofa"/></Link>
          </map>
        
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
