import styles from "./qtySelector.module.scss";

const qtySelector = () => {
  return (
    <div className={styles.selector}>
      <button>-</button>
      <input type="number" defaultValue={1} />
      <button>+</button>
    </div>
  );
};

export default qtySelector;
