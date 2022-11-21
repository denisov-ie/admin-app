import { Table } from "shared/components/Table";
import { OrderTableHeader } from "features/OrderPage/modules/OrderTable/OrderTableHeader";
import OrderTableBody from "features/OrderPage/modules/OrderTable/OrderTableBody";
import OrderTableFooter from "features/OrderPage/modules/OrderTable/OrderTableFooter";

function OrderTable() {
  return (
    <Table>
      <OrderTableHeader />
      <OrderTableBody />
      <OrderTableFooter />
    </Table>
  );
}

export default OrderTable;
