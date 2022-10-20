import FilterContainer from "../../modules/FilterContainer/FilterContainer";
import Header from "../../modules/Header/Header";

import styles from "./Main.module.css";

function MainPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterContainer />
    </div>
  );
}

export default MainPage;
