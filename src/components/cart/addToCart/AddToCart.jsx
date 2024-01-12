"use client";

import styles from "./addToCart.module.scss";
import { useState } from "react";

const AddToCart = ({ product_id }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
  
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const cartAdd = () => {
    const current_qty = localStorage.getItem(product_id);
    if (current_qty == null) {
      localStorage.setItem(product_id, quantity);
    } else {
      localStorage.setItem(product_id, parseInt(current_qty, 10) + quantity);
    }
    document.getElementById("addButton").innerHTML = "&check; ITEM ADDED";
    document.getElementById("addButton").disabled = "true";
    document.getElementById("addButton").style.cursor = "default";
  };

  return (
    <div className={styles.container}>
      <table className={styles.selector}>
        <tbody>
          <tr>
            <td>
              <button className={styles.qty} onClick={handleDecrement}>
                -
              </button>
            </td>
            <td>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                onClick={() => {setQuantity(null)}}
              />
            </td>
            <td>
              <button className={styles.qty} onClick={handleIncrement}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="addButton" className={styles.add} onClick={cartAdd}>
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
