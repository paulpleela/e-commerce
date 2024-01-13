import styles from "./page.module.scss";
import Summary from "./summary/Summary";

export const metadata = {
  title: "Checkout",
  description: "Order summary and payment interface",
};

const Checkout = ({ products }) => {
  return (
    <div>
      <Summary products={products} />
    </div>
  );
};
export default Checkout;
