import ModalHeader from "features/OrderPage/modules/Modal/ModalHeader";
import ModalBody from "features/OrderPage/modules/Modal/ModalBody";
import ModalFooter from "features/OrderPage/modules/Modal/ModalFooter";
import { useSelector } from "react-redux";
import { getOpenedOrder } from "features/OrderPage/model/selectors";
import { useState } from "react";
import styles from "./Modal.module.css";

function Modal() {
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
        <ModalHeader order={order} />
        <ModalBody
          orderState={[order, setOrder]}
          codeState={[code, setCode]}
          errorsState={[errors, setErrors]}
        />
        <ModalFooter
          order={order}
          code={code}
          errorsState={[errors, setErrors]}
        />
      </div>
    </div>
  );
}

export default Modal;
