import styles from "./Header.module.css";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Список заказов</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
