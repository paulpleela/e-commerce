import styles from "./carousel.module.scss";
import ProductCard from "../ProductCard";

const Carousel = ({ title, products }) => {
  return (
    <article className={styles.container}>
      <h2>{ title }</h2>
      <div className={styles.carousel}>
        {products.map((product) => (
          <ProductCard key={ product._id.toString() } product={ product } />
        ))}
      </div>
    </article>
  );
};

export default Carousel;
