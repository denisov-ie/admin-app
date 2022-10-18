import classnames from "classnames";
import Icon, { iconTypes as icon } from "../Icon/Icon";
import styles from "./Radio.module.css";

function Radio({
  className,
  radioText,
  groupName,
  defaultChecked,
  textOnly,
  ...props
}) {
  const classNames = classnames(styles.radio, {
    [styles.radio_withText]: radioText,
    [styles.radio_withTextOnly]: textOnly,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <label className={styles.radio__label}>
        <input
          className={styles.radio__area}
          type="radio"
          name={groupName}
          defaultChecked={defaultChecked}
        />
        <Icon name={icon.dot} className={styles.radio__icon} />
        {radioText && <span className={styles.radio__text}>{radioText}</span>}
      </label>
    </div>
  );
}

export default Radio;
