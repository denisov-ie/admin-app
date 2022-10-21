import classnames from "classnames";
import styles from "./DateFilter.module.css";
import InputContainer, {
  DEFAULT_PREFIX as prefix,
} from "../../shared/InputContainer/InputContainer";

function DateFilter({ className }) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      <InputContainer
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
      />
      <InputContainer placeholder="dd.mm.yyyy" prefix={prefix.text("по")} />
    </div>
  );
}

export default DateFilter;
