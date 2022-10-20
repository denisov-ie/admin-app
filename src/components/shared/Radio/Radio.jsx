import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Radio.module.css";

function Radio({ className, text, name, value, checked, textOnly, ...props }) {
  const classNames = classnames(styles.radio, {
    [styles.radio_withText]: text,
    [styles.radio_withTextOnly]: textOnly,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <label className={styles.radio__label}>
        <input
          className={styles.radio__area}
          type="radio"
          name={name}
          value={value}
          checked={checked}
        />
        <Icon name={icon.dot} className={styles.radio__icon} />
        {text && <span className={styles.radio__text}>{text}</span>}
      </label>
    </div>
  );
}

export default Radio;
