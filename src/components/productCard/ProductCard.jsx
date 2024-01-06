import styles from "./productCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/products/id/1" className={styles.card}>
        <Image
          src="/images/logo.png"
          width={200}
          height={200}
          alt="product img"
        />

        <h3>The Most Amazing Charcoal Desk Lamp</h3>
        <h4>340.00 THB</h4>
    </Link>
  );
};

export default ProductCard;
