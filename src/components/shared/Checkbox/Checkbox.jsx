import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Checkbox.module.css";

const noop = () => {};

function Checkbox({
  className,
  text,
  name,
  checked,
  textOnly,
  onChange = noop,
  ...props
}) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  const textClassNames = classnames(styles.text, {
    [styles.withTextOnly]: textOnly,
    [styles.withText]: text && !textOnly,
  });

  return (
    <div className={baseClassNames} {...props}>
      <label className={styles.label}>
        <input
          className={styles.area}
          type="checkbox"
          name={name}
          checked={checked}
          hidden={textOnly}
          onChange={onChange}
        />
        {!textOnly && <Icon name={icon.checkmark} className={styles.icon} />}
        {text && <span className={textClassNames}>{text}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
