import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "shared/components/Button";
import { ICON_TYPE as icon } from "shared/components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getOpenedOrder } from "features/OrderPage/model/selectors";
import { clearSelection } from "features/OrderPage/model/slices/selectionSlice";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownSingleItem,
} from "shared/components/Dropdown";
import { useState } from "react";
import styles from "./ModalHeader.module.css";

function ModalHeader({ order }) {
  const dispatch = useDispatch();

  const openedOrder = useSelector(getOpenedOrder);

  const [isSavingDropdownActive, setIsSavingDropdownActive] = useState(false);

  const handleCloseButtonClick = () => {
    dispatch(clearSelection());
  };

  const handleClearChangesClick = () => {
    dispatch(clearSelection());
    setIsSavingDropdownActive(false);
  };

  const handleCloseCancelClick = () => {
    setIsSavingDropdownActive(false);
  };

  const isChanged =
    order.name !== openedOrder.name || order.status !== openedOrder.status;

  return (
    <div className={styles._}>
      <h1 className={styles.title}>Заявка #{openedOrder.orderNumber}</h1>
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
          isActive={isSavingDropdownActive}
          setIsActive={setIsSavingDropdownActive}
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

export default ModalHeader;
