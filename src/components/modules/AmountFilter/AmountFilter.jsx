import classnames from "classnames";
import styles from "./AmountFilter.module.css";
import Input, {
  DEFAULT_PREFIX as prefix,
  INPUT_STYLE as input,
} from "../../shared/Input/Input";

function AmountFilter({ className }) {
  const blockClass = classnames(styles._, className);

  return (
    <div className={blockClass}>
      <Input
        style={input.default}
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
      />
      <Input style={input.default} placeholder="₽" prefix={prefix.text("до")} />
    </div>
  );
}

export default AmountFilter;
