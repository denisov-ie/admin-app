import styles from "./Header.module.css";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

function Header() {
  return (
    <header className={styles._}>
      <h1 className={styles.title}>Список заказов</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
