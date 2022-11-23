import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "shared/components/Button";
import { ICON_TYPE as icon } from "shared/components/Icon";
import { useDispatch } from "react-redux";
import {
  UPDATABLE_FIELDS as field,
  updateOrder,
} from "features/OrderPage/model/slices/orderSlice";
import { clearSelection } from "features/OrderPage/model/slices/selectionSlice";
import { useState } from "react";
import styles from "./OrderTableModalFooter.module.css";

const CODE_MOCK = 123;

const getInvalidFields = (errors) => {
  const invalidFields = [];
  for (const key in errors) {
    if (errors[key].value) {
      invalidFields.push(errors[key].description);
    }
  }

  return invalidFields;
};

function OrderTableModalFooter({
  order,
  code,
  errorsState,
  isModalActiveSetter,
}) {
  const dispatch = useDispatch();

  const [errors, setErrors] = errorsState;

  const [isMessageActive, setIsMessageActive] = useState(false);

  const handleSaveButtonClick = () => {
    if (code.length === 0 || +code !== CODE_MOCK) {
      const copyErrors = { ...errors };
      copyErrors.isCodeError.value = true;
      setErrors(copyErrors);
    }
    if (getInvalidFields(errors).length === 0) {
      dispatch(
        updateOrder({ id: order.id, field: field.status, value: order.status })
      );
      dispatch(
        updateOrder({ id: order.id, field: field.name, value: order.name })
      );
      dispatch(clearSelection());
      isModalActiveSetter(false);
    } else {
      setIsMessageActive(true);
      setTimeout(() => setIsMessageActive(false), 3000);
    }
  };

  const message = `Не сохранено: ${getInvalidFields(errors).join(" и ")}`;

  return (
    <div className={styles._}>
      {isMessageActive && <span className={styles.message}>{message}</span>}
      <Button
        icon={icon.checkmark}
        color={color.blue}
        size={size.medium}
        onClick={handleSaveButtonClick}
      >
        Сохранить
      </Button>
    </div>
  );
}

export default OrderTableModalFooter;
