import { TableFooter } from "components/shared/Table";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownListItem,
  DropdownSingleItem,
} from "components/shared/Dropdown";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { STATUSES as status } from "components/modules/Status";
import Radio from "components/shared/Radio";
import { Input } from "components/shared/Input";
import { useState } from "react";
import styles from "components/modules/OrderTable/OrderTableFooter/OrderTableFooter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "components/redux/slices/paginationSlice";
import { getPaginatedOrders } from "components/redux/selectors";
import OrderTablePages from "components/modules/OrderTable/OrderTablePages";

function OrderTableFooter() {
  const [page, setPage] = useState("");

  const dispatch = useDispatch();

  const pageCount = useSelector(getPaginatedOrders)[1];

  const handleOnChangePageNumber = ({ target: { value } }) => {
    setPage(value);
  };

  const handleOnClearPageNumber = () => {
    setPage("");
  };

  const handlePageSelectKeyPress = ({ which }) => {
    if (which === 13 && page > 0 && page <= pageCount) {
      const pageNumber = page - 1;
      dispatch(setPageNumber({ pageNumber }));
    }
  };

  return (
    <TableFooter className={styles._}>
      <div className={styles.leftBlock}>
        Выбрано записей: n
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
              <Radio name="status" value={value} text={name} textOnly />
            </DropdownListItem>
          ))}
        </Dropdown>
        <Dropdown
          title="Удалить n записей?"
          className={styles.deletionDropdownWrapper}
          trigger={
            <Button size={size.small} color={color.red} icon={icon.bin}>
              Удалить
            </Button>
          }
        >
          <DropdownSingleItem>
            <Button color={color.blueReverse} size={size.small}>
              Удалить
            </Button>
          </DropdownSingleItem>
          <DropdownItemDivider />
          <DropdownSingleItem>
            <Button color={color.blue} size={size.small}>
              Отмена
            </Button>
          </DropdownSingleItem>
        </Dropdown>
      </div>
      <div className={styles.rightBlock}>
        <div>
          <OrderTablePages />
        </div>
        <Dropdown
          className={styles.pageSelectionDropdownWrapper}
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
              invalid={
                !/^$/.test(page) &&
                !(/^\d*$/.test(page) && page > 0 && page <= pageCount)
              }
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
