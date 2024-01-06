import styles from "./qtySelector.module.scss";

const qtySelector = () => {
  return (
    <table className={styles.selector}>
      <tbody>
        <tr>
          <td>
            <button className={styles.qty}>-</button>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td>
            <button className={styles.qty}>+</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default qtySelector;
