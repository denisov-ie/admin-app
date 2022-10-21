import classnames from "classnames";
import styles from "./AmountFilter.module.css";
import InputContainer, {
  DEFAULT_PREFIX as prefix,
} from "../../shared/InputContainer/InputContainer";

function AmountFilter({ className }) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      <InputContainer
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
      />
      <InputContainer placeholder="₽" prefix={prefix.text("до")} />
    </div>
  );
}

export default AmountFilter;
