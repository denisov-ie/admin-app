import styles from "./Header.module.css";
import ThemeSwitchContainer from "../ThemeSwitchContainer/ThemeSwitchContainer";

function Header() {
  return (
    <header className={styles._}>
      <h1 className={styles.title}>Список заказов</h1>
      <ThemeSwitchContainer />
    </header>
  );
}

export default Header;
