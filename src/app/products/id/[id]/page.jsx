import styles from "./page.module.scss";
import AddToCart from "@/components/cart/addToCart/AddToCart";
import Carousel from "@/components/productCard/carousel/Carousel";
import CategorySelector from "@/components/categorySelector/CategorySelector";
import { getProductById, getProductsByCategory, getPopularProducts } from "@/db/api";
import { notFound } from "next/navigation";
import ProductImage from "@/components/productImage/ProductImage";

export const generateMetadata = async ({ params }) => {
  const product_id = params.id;
  let product;
  try {
    product = await getProductById(product_id);
  } catch {
    console.error("There is no product with the ID: " + params.id);
    notFound();
  }
  return {
    title: product.title,
    description: product.description,
  };
};

const Product = async ({ params }) => {
  const product_id = params.id;
  let product;

  try {
    product = await getProductById(product_id);
  } catch {
    console.error("There is no product with the ID: " + params.id);
    notFound();
  }

  let products = [];
  let category_products;
  try {
    category_products = await getProductsByCategory(product.category);
    for (const p of category_products) {
      if (p._id != product_id) {
        products.push(p);
      }
    }
  } catch {
    console.error("Error fetching products for this category.");
    notFound();
  }

  let popular_products;
  try {
    popular_products = await getPopularProducts();
    for (const p of popular_products) {
      if (p._id != product_id && !products.some(existingProduct => existingProduct._id.toString() === p._id.toString())) {
        products.push(p);
      }
    }
  } catch {
    console.error("Error fetching popular products.");
    notFound();
  }

  return (
    <>
      <CategorySelector />
      <div className={styles.container}>
        <ProductImage images={product.images} title={products.title}/>
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <h2>{product.price.toFixed(2)} THB</h2>
          <p>{product.description}</p>
            <AddToCart product_id={product._id.toString()} />
          </div>
        </div>
      <Carousel title="Suggested Products" products={ products } />
    </>
  );
};

export default Product;
