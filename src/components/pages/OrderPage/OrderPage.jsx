import Header from "components/modules/Header";
import Filter from "components/modules/Filter";
import OrderTable from "components/modules/OrderTable";
import styles from "./OrderPage.module.css";

function OrderPage() {
  return (
    <div className={styles._}>
      <Header />
      <Filter />
      <OrderTable />
    </div>
  );
}

export default OrderPage;
