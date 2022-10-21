import styles from "./MainPage.module.css";
import Header from "../modules/Header/Header";
import FilterContainer from "../modules/FilterContainer/FilterContainer";

function MainPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterContainer />
    </div>
  );
}

export default MainPage;
