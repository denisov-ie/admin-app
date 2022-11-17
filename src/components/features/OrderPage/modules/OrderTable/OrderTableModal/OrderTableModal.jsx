import OrderTableModalHeader from "components/features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalHeader";
import OrderTableModalBody from "components/features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalBody";
import OrderTableModalFooter from "components/features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalFooter";
import { useSelector } from "react-redux";
import { getOrdersBySelectedIds } from "components/features/OrderPage/model/selectors";
import { useState } from "react";
import styles from "./OrderTableModal.module.css";

function OrderTableModal({ isModalActiveSetter }) {
  const selectedOrders = useSelector(getOrdersBySelectedIds);

  const [order, setOrder] = useState({ ...selectedOrders[0] });

  const [code, setCode] = useState("");

  const errorsInitialState = {
    isNameError: { value: false, description: "ФИО покупателя" },
    isCodeError: { value: true, description: "код подтверждения" },
  };

  const [errors, setErrors] = useState({ ...errorsInitialState });

  return (
    <div className={styles._}>
      <div className={styles.orderForm}>
        <OrderTableModalHeader
          isModalActiveSetter={isModalActiveSetter}
          order={order}
        />
        <OrderTableModalBody
          orderState={[order, setOrder]}
          codeState={[code, setCode]}
          errorsState={[errors, setErrors]}
        />
        <OrderTableModalFooter
          order={order}
          errors={errors}
          isModalActiveSetter={isModalActiveSetter}
        />
      </div>
    </div>
  );
}

export default OrderTableModal;
