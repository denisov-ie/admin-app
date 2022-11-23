import { TableBody } from "shared/components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getOpenedOrderId,
  getOrdersIsLoading,
  getPaginatedOrders,
  getSelectedOrderIds,
} from "features/OrderPage/model/selectors";
import {
  clearSelection,
  toggleSelection,
  setOpenedOrderId,
} from "features/OrderPage/model/slices/selectionSlice";
import OrderTableRow from "features/OrderPage/modules/OrderTable/OrderTableRow";
import { useEffect, useState } from "react";
import { loadOrders } from "features/OrderPage/model/slices/orderSlice";
import OrderTableModal from "features/OrderPage/modules/OrderTable/OrderTableModal";
import styles from "../OrderTable.module.css";

function OrderTableBody() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  const [isModalActive, setIsModalActive] = useState(false);

  const { orders } = useSelector(getPaginatedOrders);

  const selectedOrderIds = useSelector(getSelectedOrderIds);

  const openedOrderId = useSelector(getOpenedOrderId);

  const isLoading = useSelector(getOrdersIsLoading);

  const handleCheckboxChange = (id) => {
    dispatch(toggleSelection({ ids: [id] }));
  };

  const handleRowClick = (e, id) => {
    if (e.target.tagName === "DIV") {
      dispatch(clearSelection());
      dispatch(setOpenedOrderId({ id }));
      setIsModalActive(true);
    }
  };

  return (
    <>
      <TableBody>
        {orders.length === 0 && (
          <div className={styles.message}>
            {isLoading
              ? "Данные загружаются"
              : "По вашему запросу ничего не найдено"}
          </div>
        )}
        {orders.map((order) => (
          <OrderTableRow
            key={order.id}
            order={order}
            onClick={(e) => handleRowClick(e, order.id)}
            onChange={() => handleCheckboxChange(order.id)}
            checked={selectedOrderIds.includes(order.id)}
            expanded={openedOrderId === order.id}
          />
        ))}
      </TableBody>
      {isModalActive && (
        <OrderTableModal isModalActiveSetter={setIsModalActive} />
      )}
    </>
  );
}

export default OrderTableBody;
