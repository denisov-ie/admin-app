import { DEFAULT_POSTFIX as postfix, Input } from "components/shared/Input";
import { useState } from "react";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { STATUSES as status } from "components/features/OrderPage/modules/Status";
import { Dropdown, DropdownListItem } from "components/shared/Dropdown";
import Radio from "components/shared/Radio";
import OrderTableModalBodyTable from "components/features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalBody/OrderTableModalBodyTable";
import styles from "./OrderTableModalBody.module.css";

const CODE_MOCK = 123;

const LOYALTY_LEVEL_MAP = {
  novice: "Новичек",
  standard: "Стандартный",
  expert: "Эксперт",
};

function OrderTableModalBody({ orderState, codeState, errorsState }) {
  const namePattern = /^[А-Яа-яЁё -]*$/;

  const codePattern = /^\d*$/;

  const [order, setOrder] = orderState;

  const [code, setCode] = codeState;

  const [errors, setErrors] = errorsState;

  const [isActiveStatusDropdown, setIsActiveStatusDropdown] = useState(false);

  const isInvalid = (pattern, value) =>
    !pattern.test(value) || value.length === 0;

  const handleNameChange = ({ target: { value } }) => {
    order.name = value;
    errors.isNameError = isInvalid(namePattern, value);
    setOrder({ ...order });
    setErrors({ ...errors });
  };

  const handleCodeChange = ({ target: { value } }) => {
    errors.isCodeError = isInvalid(codePattern, value) || +value !== CODE_MOCK;
    setCode(value);
    setErrors({ ...errors });
  };

  const handleNameClearClick = () => {
    order.name = "";
    setOrder({ ...order });
  };

  const handleCodeClearClick = () => {
    setCode("");
  };

  const handleStatusChangeClick = (value) => {
    order.status = value;
    setOrder({ ...order });
    setIsActiveStatusDropdown(false);
  };

  return (
    <div className={styles._}>
      <div className={styles.wrapper}>
        <Input value={order.date} label="Дата и время заказа" disabled />
        <Input
          autoFocus
          value={order.name}
          label="ФИО покупателя"
          placeholder="Введите ФИО покупателя"
          invalid={isInvalid(namePattern, order.name)}
          onChange={handleNameChange}
          onClear={handleNameClearClick}
        />
        <OrderTableModalBodyTable order={order} />
        <Input
          value={LOYALTY_LEVEL_MAP[order.level]}
          label="Уровень лояльности"
          disabled
        />
        <Dropdown
          className={styles.dropdownWrapper}
          outerState={[isActiveStatusDropdown, setIsActiveStatusDropdown]}
          trigger={
            <Input
              className={styles.cursor}
              label="Статус заказа"
              postfix={postfix.icon(icon.vArrow)}
              value={status[order.status].name}
              readOnly
            />
          }
        >
          {Object.values(status).map(({ value, name }) => (
            <DropdownListItem key={value}>
              <Radio
                textOnly
                name="status"
                text={name}
                value={value}
                onChange={() => handleStatusChangeClick(value)}
                checked={order.status === value}
              />
            </DropdownListItem>
          ))}
        </Dropdown>
        <Input
          label="Код подтверждения"
          placeholder="Введите цифровой код"
          invalid={isInvalid(codePattern, code) || +code !== CODE_MOCK}
          value={code}
          onChange={handleCodeChange}
          onClear={handleCodeClearClick}
        />
      </div>
    </div>
  );
}

export default OrderTableModalBody;
