import styles from "./carousel.module.scss";
import Image from 'next/image';

const Carousel = () => {
    return (
        <article className={styles.container}>
            <h2>Similar Products</h2>
            <div className={styles.carousel}>
            <div className={styles.card}>
                <Image src="/images/logo.png" width={200} height={200} alt="product img" />
                <h3>The Most Amazing Charcoal Desk Lamp</h3>
                <h4>340.00 THB</h4>
            </div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            </div>
        </article>
    );
}

export default Carousel;