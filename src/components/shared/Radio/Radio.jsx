import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import styles from "./Radio.module.css";

function Radio({ className, text, name, value, checked, textOnly, ...props }) {
  const baseClassNames = classnames(styles._, className);

  const textClassNames = classnames(styles.text, {
    [styles.withTextOnly]: textOnly,
    [styles.withText]: text && !textOnly,
  });

  return (
    <label className={baseClassNames}>
      <input
        className={styles.area}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        hidden={textOnly}
        {...props}
      />
      {!textOnly && <Icon name={icon.dot} className={styles.icon} />}
      {text && <span className={textClassNames}>{text}</span>}
    </label>
  );
}

export default Radio;
