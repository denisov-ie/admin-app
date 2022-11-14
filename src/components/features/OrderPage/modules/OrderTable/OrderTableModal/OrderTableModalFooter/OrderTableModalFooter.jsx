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
import styles from "./OrderTableModalFooter.module.css";

function OrderTableModalFooter({ order, errors, isModalActiveSetter }) {
  const dispatch = useDispatch();

  const handleSaveButtonClick = () => {
    if (!errors.isNameError && !errors.isCodeError) {
      dispatch(
        updateOrder({ id: order.id, field: field.status, value: order.status })
      );
      dispatch(
        updateOrder({ id: order.id, field: field.name, value: order.name })
      );
    }
    dispatch(clearSelection());
    isModalActiveSetter(false);
  };

  let message = "";

  if (errors.isNameError && !errors.isCodeError) message = "Некорректное ФИО";

  if (!errors.isNameError && errors.isCodeError) message = "Некорректный код";

  if (errors.isNameError && errors.isCodeError)
    message = "Некорректные ФИО и код";

  return (
    <div className={styles._}>
      <span className={styles.message}>{message}</span>
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
