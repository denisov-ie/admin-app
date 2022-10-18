import classnames from "classnames";
import Icon, { iconTypes as icon } from "../Icon/Icon";
import styles from "./Checkbox.module.css";

function Checkbox({ className, checkboxText, defaultChecked, ...props }) {
  const classNames = classnames(styles.checkbox, {
    [styles.checkbox_withText]: checkboxText,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <label className={styles.checkbox__label}>
        <input
          className={styles.checkbox__area}
          type="checkbox"
          defaultChecked={defaultChecked}
        />
        <Icon name={icon.checkmark} className={styles.checkbox__icon} />
        {checkboxText && (
          <span className={styles.checkbox__text}>{checkboxText}</span>
        )}
      </label>
    </div>
  );
}

export default Checkbox;
