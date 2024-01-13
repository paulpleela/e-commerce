"use client";

import styles from "./cart.module.scss";
import CartCard from "./cartCard/CartCard";
import { useState, useEffect } from "react";
import Image from "next/image";

const CartLayout = ({ toggleCart, products }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart({ ...localStorage });
  }, [toggleCart]);

  return (
    <aside className={styles.cart} id="cart">
      <div className={styles.cartheading}>
        <button onClick={toggleCart}>
          <svg
            className={styles.close}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <h3>My Cart</h3>
      </div>
      <div className={styles.items}>
        {cart && products && Object.keys(cart).length != 0 ? (
          Object.keys(cart).map((product_id) => {
            return (
              <CartCard
                key={product_id}
                product_id={product_id}
                product_qty={localStorage.getItem(product_id)}
                product_info={products[product_id]}
              />
            );
          })
        ) : (
          <div className={styles.empty}>
            <Image
              src="/images/empty_cart.png"
              width={250}
              height={250}
              alt="Cart is empty. Go shopping."
              className={styles.img}
              onClick={toggleCart}
            />
          </div>
        )}
      </div>
      {cart && Object.keys(cart).length != 0 && (
        <a href="/checkout" onClick={toggleCart} className={styles.checkout}>
          CHECK OUT
        </a>
      )}
    </aside>
  );
};

export default CartLayout;
