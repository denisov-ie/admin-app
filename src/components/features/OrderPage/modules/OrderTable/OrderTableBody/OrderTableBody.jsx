import { TableBody } from "components/shared/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersIsLoading,
  getPaginatedOrders,
  getSelectedOrderIds,
} from "components/features/OrderPage/model/selectors";
import {
  addToSelection,
  clearSelection,
  removeFromSelection,
} from "components/features/OrderPage/model/slices/selectionSlice";
import OrderTableRow from "components/features/OrderPage/modules/OrderTable/OrderTableRow";
import { useEffect, useState } from "react";
import { loadOrders } from "components/features/OrderPage/model/slices/orderSlice";
import OrderTableModal from "components/features/OrderPage/modules/OrderTable/OrderTableModal";
import styles from "../OrderTable.module.css";

function OrderTableBody() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  const [isModalActive, setIsModalActive] = useState(false);

  const { orders } = useSelector(getPaginatedOrders);

  const { selectedOrderIds } = useSelector(getSelectedOrderIds);

  const isLoading = useSelector(getOrdersIsLoading);

  const handleCheckboxChange = (e, id) => {
    dispatch(
      selectedOrderIds.includes(id)
        ? removeFromSelection({ id })
        : addToSelection({ id })
    );
  };

  const handleRowClick = (e, id) => {
    if (e.target.tagName === "DIV") {
      dispatch(clearSelection());
      dispatch(addToSelection({ id }));
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
            onChange={(e) => handleCheckboxChange(e, order.id)}
            checked={selectedOrderIds.includes(order.id)}
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
