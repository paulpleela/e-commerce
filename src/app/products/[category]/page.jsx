import styles from "./page.module.scss";
import CategorySelector from "@/components/categorySelector/CategorySelector";
import ProductCard from "@/components/productCard/ProductCard";

const Products = () => {
  return (
    <>
      <CategorySelector />
      <div className={styles.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Products;
