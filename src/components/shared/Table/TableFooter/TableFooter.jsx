import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { ICON_TYPE as icon } from "components/shared/Icon";
import TableRow from "components/shared/Table/TableRow";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownListItem,
  DropdownSingleItem,
} from "components/shared/Dropdown";
import { Input } from "components/shared/Input";
import { useState } from "react";
import classnames from "classnames";
import Radio from "components/shared/Radio";
import { STATUSES as status } from "components/modules/Status";
import styles from "./TableFooter.module.css";

function TableFooter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const [page, setPage] = useState("");

  const handleOnChangePageNumber = (e) => {
    setPage(e.target.value);
  };

  const handleOnClearPageNumber = () => {
    setPage("");
  };

  return (
    <TableRow className={baseClassNames}>
      <div className={styles.leftBlock}>
        Выбрано записей: n
        <Dropdown
          className={styles.changeStateDropdownWrapper}
          trigger={
            <Button
              text="Изменить статус"
              size={size.small}
              color={color.blue}
              icon={icon.pencil}
            />
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
            <Button
              text="Удалить"
              size={size.small}
              color={color.red}
              icon={icon.bin}
            />
          }
        >
          <DropdownSingleItem>
            <Button
              color={color.blueReverse}
              size={size.small}
              text="Удалить"
            />
          </DropdownSingleItem>
          <DropdownItemDivider />
          <DropdownSingleItem>
            <Button color={color.blue} size={size.small} text="Отмена" />
          </DropdownSingleItem>
        </Dropdown>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.pages}>
          <Button text="1" size={size.small} color={color.blue} />
          <Button text="2" size={size.small} color={color.blueReverse} />
          <Button text="3" size={size.small} color={color.blueReverse} />
          <span>...</span>
          <Button text="18" size={size.small} color={color.blueReverse} />
        </div>
        <Dropdown
          className={styles.pageSelectionDropdownWrapper}
          trigger={
            <Button text="#" size={size.small} color={color.blueReverse} />
          }
        >
          <DropdownSingleItem>
            <Input
              label="Номер страницы"
              placeholder="Введите номер"
              pattern="\d*"
              onClear={handleOnClearPageNumber}
              onChange={handleOnChangePageNumber}
              value={page}
            />
          </DropdownSingleItem>
        </Dropdown>
      </div>
    </TableRow>
  );
}

export default TableFooter;
