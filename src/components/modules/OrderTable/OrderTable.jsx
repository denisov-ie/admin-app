import { Table } from "components/shared/Table";
import OrderTableHeader from "components/modules/OrderTableHeader";
import OrderTableBody from "components/modules/OrderTableBody";
import OrderTableFooter from "components/modules/OrderTableFooter";

function OrderTable({ orders }) {
  return (
    <Table>
      <OrderTableHeader />
      <OrderTableBody orders={orders} />
      <OrderTableFooter />
    </Table>
  );
}

export default OrderTable;
