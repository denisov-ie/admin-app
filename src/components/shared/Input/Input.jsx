import classnames from "classnames";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Input.module.css";

const noop = () => {};

function Component({ element, className }) {
  return <div className={className}>{element}</div>;
}

function Input({
  className,
  label,
  placeholder,
  prefix,
  postfix,
  hideReset,
  disabled,
  incorrect,
  message,
  onChange = noop,
  onClearButtonClick = noop,
  ...props
}) {
  const baseClassNames = classnames(styles._, {
    [styles.disabled]: disabled,
    [styles.incorrect]: incorrect,
    [className]: !!className,
  });

  return (
    <div className={baseClassNames} {...props}>
      <label className={styles.label}>
        {label && <div className={styles.labelDivider}>{label}</div>}
        <div className={styles.field}>
          {prefix && <Component element={prefix} className={styles.prefix} />}
          <input
            className={styles.area}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={message}
          />
          {postfix && (
            <Component element={postfix} className={styles.postfix} />
          )}
          {!disabled && !hideReset && message.length > 0 && (
            <button className={styles.button} onClick={onClearButtonClick}>
              <Icon name={icon.xLarge} className={styles.iconCross} />
            </button>
          )}
          {disabled && <Icon name={icon.locked} className={styles.iconLock} />}
        </div>
      </label>
    </div>
  );
}

export default Input;
