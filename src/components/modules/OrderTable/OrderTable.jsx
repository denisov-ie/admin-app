import { Table } from "components/shared/Table";
import { OrderTableHeader } from "components/modules/OrderTable/OrderTableHeader";
import OrderTableBody from "components/modules/OrderTable/OrderTableBody";
import OrderTableFooter from "components/modules/OrderTable/OrderTableFooter";

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
