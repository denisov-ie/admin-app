import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import styles from "./Checkbox.module.css";

function Checkbox({ className, text, name, checked, textOnly, ...props }) {
  const baseClassNames = classnames(styles._, className);

  const textClassNames = classnames(styles.text, {
    [styles.withTextOnly]: textOnly,
    [styles.withText]: text && !textOnly,
  });

  return (
    <label className={baseClassNames}>
      <input
        className={styles.area}
        type="checkbox"
        name={name}
        checked={checked}
        hidden={textOnly}
        {...props}
      />
      {!textOnly && <Icon name={icon.checkmark} className={styles.icon} />}
      {text && <span className={textClassNames}>{text}</span>}
    </label>
  );
}

export default Checkbox;
