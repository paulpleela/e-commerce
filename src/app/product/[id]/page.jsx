import styles from "./page.module.scss";
import Image from "next/image";
import QtySelector from "@/components/cart/qtySelector/QtySelector";
import Carousel from "@/components/carousel/Carousel";

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.sideimages}>
            <div className={styles.sidenav}>
              <Image
                className={styles.sideimage}
                src="/images/logo.png"
                width={60}
                height={60}
                alt="lamp"
              />
            </div>
            <div className={styles.sidenav}>
              <Image
                className={styles.sideimage}
                src="/images/logo.png"
                width={60}
                height={60}
                alt="lamp"
              />
            </div>
          </div>
          <div className={styles.mainimage}>
            <Image src="/images/logo.png" width={400} height={400} alt="lamp" />
            <Image src="/images/logo.png" width={400} height={400} alt="lamp" />
          </div>
        </div>
        <div className={styles.info}>
          <h1>Charcoal Desk Lamp</h1>
          <h2>340.00 THB</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.buy}>
            <QtySelector />
            <button className={styles.cart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default Product;
