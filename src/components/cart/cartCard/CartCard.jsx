"use client";

import styles from "./cartCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartCard = ({ product_id, product_qty, product_info }) => {
  const [quantity, setQuantity] = useState(parseInt(product_qty, 10));
  const [removed, setRemoved] = useState(false);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    localStorage.removeItem(product_id);
    setRemoved(true);
  }

  return (!removed && 
    <div className={styles.container} >
      <Image src={`/images/products/${product_info.image}`} width={100} height={100} alt={product_info.title} />
      <div className={styles.info}>
        <Link href={`/products/id/${product_id}`} className={styles.title}>
          <h4 className={styles.title}>{product_info.title}</h4>
        </Link>
        <div className={styles.qty}>
          <table className={styles.selector}>
            <tbody>
              <tr>
                <td>
                  <button className={styles.qty} onClick={handleDecrement}>
                    -
                  </button>
                </td>
                <td className={styles.qty} onChange={localStorage.setItem(product_id, quantity)}>
                  {quantity}
                </td>
                <td>
                  <button className={styles.qty} onClick={handleIncrement}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className={styles.remove} onClick={handleRemove}>Remove</button>
        </div>
        <h5>{(product_info.price * quantity).toFixed(2)} THB</h5>
      </div>
    </div>
  );
};

export default CartCard;
