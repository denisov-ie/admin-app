import Header from "components/modules/Header";
import Filter from "components/modules/Filter";
import { FilterProvider } from "components/context/FilterContext";
import styles from "./OrderPage.module.css";

function OrderPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterProvider>
        <Filter />
      </FilterProvider>
    </div>
  );
}

export default OrderPage;
