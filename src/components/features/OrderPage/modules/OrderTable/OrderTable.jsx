import { Table } from "components/shared/Table";
import { OrderTableHeader } from "components/features/OrderPage/modules/OrderTable/OrderTableHeader";
import OrderTableBody from "components/features/OrderPage/modules/OrderTable/OrderTableBody";
import OrderTableFooter from "components/features/OrderPage/modules/OrderTable/OrderTableFooter";

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
