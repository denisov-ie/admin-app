import ThemeSwitch from "components/modules/ThemeSwitch";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles._}>
      <h1 className={styles.title}>Список заказов</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
