import styles from "./page.module.scss";
import Image from "next/image";
import QtySelector from "@/components/cart/qtySelector/QtySelector";
import Carousel from "@/components/productCard/carousel/Carousel";
import CategorySelector from "@/components/categorySelector/CategorySelector";
import { getProductById, getProductsByCategory, getPopularProducts } from "@/db/api";
import { notFound } from "next/navigation";

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
        <div className={styles.images}>
          <div className={styles.sideimages}>
            {product.images.map((image, index) => (
              <div key={index} className={styles.sidenav}>
                <Image
                  className={styles.sideimage}
                  src={`/images/products/${image}`}
                  width={60}
                  height={60}
                  alt={product.title}
                />
              </div>
            ))}
          </div>
          <div className={styles.mainimage}>
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={`/images/products/${image}`}
                width={400}
                height={400}
                alt={product.title}
              />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <h2>{product.price.toFixed(2)} THB</h2>
          <p>{product.description}</p>
          <div className={styles.buy}>
            <QtySelector />
            <button className={styles.cart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Carousel title="Suggested Products" products={ products } />
    </>
  );
};

export default Product;
