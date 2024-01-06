import styles from "./cartCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import QtySelector from "../qtySelector/QtySelector";

const CartCard = () => {
  return (
    <div className={styles.container}>
      <Link href="/products/id/2">
        <Image src="/images/logo.png" width={100} height={100} alt="cartitem" />
      </Link>
      <div className={styles.info}>
        <Link href="/products/id/2" className={styles.title}>
          <h4>Charcoal Desk Lamp</h4>
        </Link>
        <div className={styles.qty}>
          <div className={styles.qtySel}>
            <QtySelector />
          </div>
          <button className={styles.remove}>Remove</button>
        </div>
        <h5>340.00 THB</h5>
      </div>
    </div>
  );
};

export default CartCard;
