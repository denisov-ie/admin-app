import { DEFAULT_POSTFIX as postfix, Input } from "shared/components/Input";
import { useEffect, useState } from "react";
import { ICON_TYPE as icon } from "shared/components/Icon";
import { STATUSES as status } from "features/OrderPage/modules/Status";
import { Dropdown, DropdownListItem } from "shared/components/Dropdown";
import Radio from "shared/components/Radio";
import OrderTableModalBodyTable from "features/OrderPage/modules/OrderTable/OrderTableModal/OrderTableModalBody/OrderTableModalBodyTable";
import styles from "./OrderTableModalBody.module.css";

const LOYALTY_LEVEL_MAP = {
  novice: "Новичек",
  standard: "Стандартный",
  expert: "Эксперт",
};

function OrderTableModalBody({ orderState, codeState, errorsState }) {
  const [order, setOrder] = orderState;

  const [code, setCode] = codeState;

  const [isActiveStatusDropdown, setIsActiveStatusDropdown] = useState(false);

  const [errors, setErrors] = errorsState;

  const isNameValid = (value) => /^[А-Яа-яЁё -]+$/.test(value);

  const isCodeValid = (value) => /^\d+$|^$/.test(value);

  useEffect(() => {
    setErrors((previousState) => ({
      ...previousState,
      isNameError: {
        ...previousState.isNameError,
        value: !isNameValid(order.name),
      },
      isCodeError: { ...previousState.isCodeError, value: !isCodeValid(code) },
    }));
  }, [order, code, setErrors]);

  const handleNameChange = ({ target: { value } }) => {
    setOrder({ ...order, name: value });
  };

  const handleCodeChange = ({ target: { value } }) => {
    setCode(value);
  };

  const handleNameClearClick = () => {
    setOrder({ ...order, name: "" });
  };

  const handleCodeClearClick = () => {
    setCode("");
  };

  const handleStatusChangeClick = (value) => {
    setOrder({ ...order, status: value });
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
          invalid={errors.isNameError.value}
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
          isActive={isActiveStatusDropdown}
          setIsActive={setIsActiveStatusDropdown}
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
          invalid={errors.isCodeError.value}
          value={code}
          onChange={handleCodeChange}
          onClear={handleCodeClearClick}
        />
      </div>
    </div>
  );
}

export default OrderTableModalBody;
