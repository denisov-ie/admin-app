import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Radio.module.css";

const noop = () => {};

function Radio({
  className,
  text,
  name,
  value,
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
          type="radio"
          name={name}
          value={value}
          checked={checked}
          hidden={textOnly}
          onChange={onChange}
        />
        {!textOnly && <Icon name={icon.dot} className={styles.icon} />}
        {text && <span className={textClassNames}>{text}</span>}
      </label>
    </div>
  );
}

export default Radio;
