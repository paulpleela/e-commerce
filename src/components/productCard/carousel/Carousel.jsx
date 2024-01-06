import styles from "./carousel.module.scss";
import ProductCard from "../ProductCard";

const Carousel = () => {
  return (
    <article className={styles.container}>
      <h2>Similar Products</h2>
      <div className={styles.carousel}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </article>
  );
};

export default Carousel;
