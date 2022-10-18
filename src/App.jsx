import Header from "./components/modules/Header/Header";
import Filter from "./components/modules/Filter/Filter";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page__wrapper}>
      <Header />
      <Filter />
    </div>
  );
}

export default App;
