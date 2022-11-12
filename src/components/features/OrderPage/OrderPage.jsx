import Header from "components/features/OrderPage/modules/Header";
import Filter from "components/features/OrderPage/modules/Filter";
import OrderTable from "components/features/OrderPage/modules/OrderTable";
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
