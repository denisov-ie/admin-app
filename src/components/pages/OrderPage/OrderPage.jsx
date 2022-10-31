import ordersMock from "components/mocks/ordersMock100Records";
import Header from "components/modules/Header";
import Filter from "components/modules/Filter";
import { FilterProvider } from "components/context/FilterContext";
import TableContainer from "components/modules/TableContainer";
import styles from "./OrderPage.module.css";

function OrderPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <TableContainer orders={ordersMock} />
    </div>
  );
}

export default OrderPage;
