import styles from "./page.module.scss";
import Summary from "./summary/Summary";

export const metadata = {
  title: "Checkout",
  description: "Here is a summary of all the products in your cart.",
};

const Checkout = ({ products }) => {
  return (
    <div>
      <Summary products={products} />
    </div>
  );
};
export default Checkout;
