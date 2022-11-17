import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { useDispatch } from "react-redux";
import {
  UPDATABLE_FIELDS as field,
  updateOrder,
} from "components/features/OrderPage/model/slices/orderSlice";
import { clearSelection } from "components/features/OrderPage/model/slices/selectionSlice";
import { useState } from "react";
import styles from "./OrderTableModalFooter.module.css";

function OrderTableModalFooter({ order, errors, isModalActiveSetter }) {
  const dispatch = useDispatch();

  const [isMessageActive, setIsMessageActive] = useState(false);

  const invalidFields = [];

  for (const key in errors) {
    if (errors[key].value) {
      invalidFields.push(errors[key].description);
    }
  }

  const handleSaveButtonClick = () => {
    if (invalidFields.length === 0) {
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

  const message = `Не сохранено: исправьте ${invalidFields.join(" и ")}`;

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
