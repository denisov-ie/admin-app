import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Checkbox.module.css";

function Checkbox({ className, text, name, checked, textOnly, ...props }) {
  const classNames = classnames(styles._, {
    [styles.withText]: text,
    [styles.withTextOnly]: textOnly,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <label className={styles.label}>
        <input
          className={styles.area}
          type="checkbox"
          name={name}
          checked={checked}
        />
        <Icon name={icon.checkmark} className={styles.icon} />
        {text && <span className={styles.text}>{text}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
