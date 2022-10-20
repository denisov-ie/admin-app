import Header from "./components/modules/Header/Header";
import Filter from "./components/modules/Filter/Filter";
import styles from "./App.module.css";
import ThemeProvider from "./components/shared/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.page__wrapper}>
        <Header />
        <Filter />
      </div>
    </ThemeProvider>
  );
}

export default App;
