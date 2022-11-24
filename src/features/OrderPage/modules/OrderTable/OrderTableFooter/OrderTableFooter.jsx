import { TableFooter } from "shared/components/Table";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownListItem,
  DropdownSingleItem,
} from "shared/components/Dropdown";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "shared/components/Button";
import { ICON_TYPE as icon } from "shared/components/Icon";
import { STATUSES as status } from "features/OrderPage/modules/Status";
import Radio from "shared/components/Radio";
import { Input } from "shared/components/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "features/OrderPage/model/slices/paginationSlice";
import {
  getOrdersBySelectedIds,
  getPaginatedOrders,
  getSelectedOrderIds,
} from "features/OrderPage/model/selectors";
import OrderTablePages from "features/OrderPage/modules/OrderTable/OrderTablePages";
import wordDeclination from "shared/utils/wordDeclination";
import { clearSelection } from "features/OrderPage/model/slices/selectionSlice";
import {
  deleteOrders,
  UPDATABLE_FIELDS as field,
  updateOrder,
} from "features/OrderPage/model/slices/orderSlice";
import styles from "./OrderTableFooter.module.css";

const ENTER_KEY_CODE = 13;

function OrderTableFooter() {
  const [page, setPage] = useState("");

  const [isDeletionDropdownActive, setIsDeletionDropdownActive] =
    useState(false);

  const [isPageDropdownActive, setIsPageDropdownActive] = useState(false);

  const dispatch = useDispatch();

  const { pageCount } = useSelector(getPaginatedOrders);

  const selectedOrderIds = useSelector(getSelectedOrderIds);

  const selectedOrders = useSelector(getOrdersBySelectedIds);

  const handleOnChangePageNumber = ({ target: { value } }) => {
    setPage(value);
  };

  const handleOnClearPageNumber = () => {
    setPage("");
  };

  const isPageNumberValid =
    /^$/.test(page) || (/^\d+$/.test(page) && page > 0 && page <= pageCount);

  const handlePageSelectKeyPress = ({ keyCode }) => {
    if (keyCode === ENTER_KEY_CODE && page > 0 && page <= pageCount) {
      const pageNumber = page - 1;
      setIsPageDropdownActive(false);
      dispatch(clearSelection());
      dispatch(setPageNumber({ pageNumber }));
    }
  };

  const handleStatusChangeClick = (value) => {
    for (const id of selectedOrderIds) {
      dispatch(updateOrder({ id, field: field.status, value }));
    }
    dispatch(clearSelection());
    setIsDeletionDropdownActive(false);
  };

  const handleDeletionClick = () => {
    dispatch(deleteOrders({ selectedOrderIds }));
    dispatch(clearSelection());
    setIsDeletionDropdownActive(false);
  };

  const handleDeletionCancelClick = () => {
    setIsDeletionDropdownActive(false);
  };

  const dropdownDeletionTitle = `Удалить ${
    selectedOrderIds.length
  } ${wordDeclination(selectedOrderIds.length, [
    "запись",
    "записи",
    "записей",
  ])}?`;

  const getIsChecked = (value) => {
    if (selectedOrders.length === 1) {
      const order = selectedOrders[0];
      return order.status === value;
    }
    return false;
  };

  return (
    <TableFooter className={styles._}>
      <div className={styles.leftBlock}>
        {selectedOrderIds.length > 0 && (
          <>
            Выбрано записей: {selectedOrderIds.length}
            <Dropdown
              className={styles.changeStateDropdownWrapper}
              trigger={
                <Button size={size.small} color={color.blue} icon={icon.pencil}>
                  Изменить статус
                </Button>
              }
            >
              {Object.values(status).map(({ value, name }) => (
                <DropdownListItem key={value}>
                  <Radio
                    name="status"
                    value={value}
                    text={name}
                    textOnly
                    onChange={() => handleStatusChangeClick(value)}
                    checked={getIsChecked(value)}
                  />
                </DropdownListItem>
              ))}
            </Dropdown>
            <Dropdown
              title={dropdownDeletionTitle}
              className={styles.deletionDropdownWrapper}
              isActive={isDeletionDropdownActive}
              setIsActive={setIsDeletionDropdownActive}
              trigger={
                <Button size={size.small} color={color.red} icon={icon.bin}>
                  Удалить
                </Button>
              }
            >
              <DropdownSingleItem>
                <Button
                  color={color.blueReverse}
                  size={size.small}
                  onClick={handleDeletionClick}
                >
                  Удалить
                </Button>
              </DropdownSingleItem>
              <DropdownItemDivider />
              <DropdownSingleItem>
                <Button
                  color={color.blue}
                  size={size.small}
                  onClick={handleDeletionCancelClick}
                >
                  Отмена
                </Button>
              </DropdownSingleItem>
            </Dropdown>
          </>
        )}
      </div>
      <div className={styles.rightBlock}>
        <div>
          <OrderTablePages />
        </div>
        <Dropdown
          className={styles.pageSelectionDropdownWrapper}
          isActive={isPageDropdownActive}
          setIsActive={setIsPageDropdownActive}
          trigger={
            <Button size={size.small} color={color.blueReverse}>
              #
            </Button>
          }
        >
          <DropdownSingleItem>
            <Input
              label="Номер страницы"
              placeholder="Введите номер"
              invalid={!isPageNumberValid}
              onClear={handleOnClearPageNumber}
              onChange={handleOnChangePageNumber}
              onKeyDown={handlePageSelectKeyPress}
              value={page}
            />
          </DropdownSingleItem>
        </Dropdown>
      </div>
    </TableFooter>
  );
}

export default OrderTableFooter;
