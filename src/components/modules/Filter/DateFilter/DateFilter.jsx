import classnames from "classnames";
import styles from "./DateFilter.module.css";
import Input, {
  DEFAULT_PREFIX as prefix,
  INPUT_STYLE as input,
} from "../../../shared/Input/Input";

function DateFilter({ className }) {
  const classNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={classNames}>
      <Input
        style={input.default}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
      />
      <Input
        style={input.default}
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
      />
    </div>
  );
}

export default DateFilter;
