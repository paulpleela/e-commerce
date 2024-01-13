"use client";

import styles from "./summary.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Summary = ({ products }) => {
  const path = usePathname();
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart({ ...localStorage });
  }, []);

  useEffect(() => {
    if (cart && products) {
      let sum = 0;
      Object.keys(cart).forEach((product_id) => {
        sum += parseFloat(products[product_id].price, 10) * cart[product_id];
      });
      setTotal(sum.toFixed(2));
    }
  }, [cart, products]);

  return (
    <>
      {path === "/checkout" && products && cart && (
        <div className={styles.container}>
          <table className={styles.tb}>
            <tbody>
              {Object.keys(cart).map((product_id) => (
                <tr key={product_id}>
                  <td className={styles.row}>
                    <Image
                      src={`/images/products/${products[product_id].image}`}
                      width={50}
                      height={50}
                      alt={products[product_id].title}
                    />
                  </td>
                  <td className={styles.row}>{products[product_id].title}</td>
                  <td className={styles.row}>&times; {cart[product_id]}</td>
                  <td className={styles.row_price}>
                    {(
                      parseFloat(products[product_id].price) * cart[product_id]
                    ).toFixed(2)}{" "}
                    THB
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className={styles.total} colSpan={2}>
                  Order Total
                </td>
                <td className={styles.total_price} colSpan={2}>
                  {total} THB
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};

export default Summary;
