import OrderTableModalHeader from "features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalHeader";
import OrderTableModalBody from "features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalBody";
import OrderTableModalFooter from "features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalFooter";
import { useSelector } from "react-redux";
import { getOpenedOrder } from "features/OrderPage/model/selectors";
import { useState } from "react";
import styles from "./OrderTableModal.module.css";

function OrderTableModal({ isModalActiveSetter }) {
  const openedOrder = useSelector(getOpenedOrder);

  const [order, setOrder] = useState({ ...openedOrder });

  const [code, setCode] = useState("");

  const errorsInitialState = {
    isNameError: { value: false, description: "некорректное ФИО покупателя" },
    isCodeError: { value: false, description: "неверный код подтверждения" },
  };

  const [errors, setErrors] = useState(errorsInitialState);

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
          code={code}
          errorsState={[errors, setErrors]}
          isModalActiveSetter={isModalActiveSetter}
        />
      </div>
    </div>
  );
}

export default OrderTableModal;
