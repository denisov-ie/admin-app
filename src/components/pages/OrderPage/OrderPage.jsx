import Header from "../../modules/Header/Header";
import Filter from "../../modules/Filter/Filter";
import styles from "./OrderPage.module.css";
import FilterProvider from "../../context/FilterContext/FilterContext";
import Table from "../../modules/Table/Table";

function OrderPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <Table />
    </div>
  );
}

export default OrderPage;
