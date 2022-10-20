import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Radio.module.css";

function Radio({ className, text, name, value, checked, textOnly, ...props }) {
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
          type="radio"
          name={name}
          value={value}
          checked={checked}
        />
        <Icon name={icon.dot} className={styles.icon} />
        {text && <span className={styles.text}>{text}</span>}
      </label>
    </div>
  );
}

export default Radio;
