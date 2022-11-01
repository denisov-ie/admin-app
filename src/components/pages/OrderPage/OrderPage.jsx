import ordersMock from "components/mocks/ordersMock100Records";
import Header from "components/modules/Header";
import Filter from "components/modules/Filter";
import { FilterProvider } from "components/context/FilterContext";
import OrderTable from "components/modules/OrderTable";
import styles from "./OrderPage.module.css";

function OrderPage() {
  return (
    <div className={styles._}>
      <Header />
      <FilterProvider>
        <Filter />
      </FilterProvider>
      <OrderTable orders={ordersMock} />
    </div>
  );
}

export default OrderPage;
