import styles from "./Table.module.css";
import TableHeader from "../TableHeader/TableHeader";

function Table() {
  return (
    <div className={styles._}>
      <TableHeader />
      <div className={styles.message}>
        Таблица и ее содержимое будут готовы к дедлайну по ДЗ №3
      </div>
    </div>
  );
}

export default Table;
