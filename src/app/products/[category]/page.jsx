import styles from "./page.module.scss";
import CategorySelector from "@/components/categorySelector/CategorySelector";
import ProductCard from "@/components/productCard/ProductCard";
import { getProducts, getProductsByCategory } from "@/db/api";

export const generateMetadata = async ({ params }) => {
  const current_category = params.category;

  return {
    title: current_category.charAt(0).toUpperCase() + current_category.slice(1),
    description: `Displaying all of our products under the ${current_category} category.`,
  };
};

const Products = async ({ params }) => {
  const current_category = params.category;
  let products;

  if (current_category == "all") {
    products = await getProducts();
  } else {
    products = await getProductsByCategory(current_category);
  }

  return (
    <>
      <CategorySelector />
      <div className={styles.container}>
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
