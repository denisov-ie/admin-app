import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersBySelectedIds } from "components/features/OrderPage/model/selectors";
import { clearSelection } from "components/features/OrderPage/model/slices/selectionSlice";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownSingleItem,
} from "components/shared/Dropdown";
import { useState } from "react";
import styles from "./OrderTableModalHeader.module.css";

function OrderTableModalHeader({ isModalActiveSetter, order }) {
  const dispatch = useDispatch();

  const selectedOrder = useSelector(getOrdersBySelectedIds)[0];

  const setIsModalActive = isModalActiveSetter;

  const [isSavingDropdownActive, setIsSavingDropdownActive] = useState(false);

  const handleCloseButtonClick = () => {
    dispatch(clearSelection());
    setIsModalActive(false);
  };

  const handleClearChangesClick = () => {
    dispatch(clearSelection());
    setIsSavingDropdownActive(false);
    setIsModalActive(false);
  };

  const handleCloseCancelClick = () => {
    setIsSavingDropdownActive(false);
  };

  const isChanged =
    order.name !== selectedOrder.name || order.status !== selectedOrder.status;

  return (
    <div className={styles._}>
      <h1 className={styles.title}>Заявка #{selectedOrder.orderNumber}</h1>
      {!isChanged && (
        <Button
          icon={icon.xLarge}
          color={color.blue}
          size={size.medium}
          onClick={handleCloseButtonClick}
        />
      )}
      {isChanged && (
        <Dropdown
          title="Есть несохраненные изменения"
          className={styles.savingDropdownWrapper}
          outerState={[isSavingDropdownActive, setIsSavingDropdownActive]}
          trigger={
            <Button icon={icon.xLarge} color={color.blue} size={size.medium} />
          }
        >
          <DropdownSingleItem>
            <Button
              color={color.blueReverse}
              size={size.small}
              onClick={handleClearChangesClick}
            >
              Сбросить
            </Button>
          </DropdownSingleItem>
          <DropdownItemDivider />
          <DropdownSingleItem>
            <Button
              color={color.blue}
              size={size.small}
              onClick={handleCloseCancelClick}
            >
              Остаться
            </Button>
          </DropdownSingleItem>
        </Dropdown>
      )}
    </div>
  );
}

export default OrderTableModalHeader;
