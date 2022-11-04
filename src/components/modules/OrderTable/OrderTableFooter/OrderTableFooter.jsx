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

function OrderTableFooter() {
  const [page, setPage] = useState("");

  const handleOnChangePageNumber = (e) => {
    setPage(e.target.value);
  };

  const handleOnClearPageNumber = () => {
    setPage("");
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
        <div className={styles.pages}>
          <Button size={size.small} color={color.blue}>
            1
          </Button>
          <Button size={size.small} color={color.blueReverse}>
            2
          </Button>
          <Button size={size.small} color={color.blueReverse}>
            3
          </Button>
          <span>...</span>
          <Button size={size.small} color={color.blueReverse}>
            18
          </Button>
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
              invalid={!/^\d*$|^$/.test(page)}
              onClear={handleOnClearPageNumber}
              onChange={handleOnChangePageNumber}
              value={page}
            />
          </DropdownSingleItem>
        </Dropdown>
      </div>
    </TableFooter>
  );
}

export default OrderTableFooter;
