import Header from "features/OrderPage/modules/Header";
import Filter from "features/OrderPage/modules/Filter";
import OrderTable from "features/OrderPage/modules/OrderTable";
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
