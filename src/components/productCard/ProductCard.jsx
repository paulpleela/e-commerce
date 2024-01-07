import styles from "./productCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/id/${product._id.toString()}`}  className={styles.card}>
        <Image
          src={`/images/products/${product.images[0]}`}
          width={200}
          height={200}
          alt={product.title}
        />

        <h3>{product.title}</h3>
        <h4>{product.price.toFixed(2)} THB</h4>
    </Link>
  );
};

export default ProductCard;
