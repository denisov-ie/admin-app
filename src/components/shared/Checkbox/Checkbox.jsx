import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Checkbox.module.css";

function Checkbox({ className, text, name, checked, textOnly, ...props }) {
  const classNames = classnames(styles.checkbox, {
    [styles.checkbox_withText]: text,
    [styles.checkbox_withTextOnly]: textOnly,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <label className={styles.checkbox__label}>
        <input
          className={styles.checkbox__area}
          type="checkbox"
          name={name}
          checked={checked}
        />
        <Icon name={icon.checkmark} className={styles.checkbox__icon} />
        {text && <span className={styles.checkbox__text}>{text}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
