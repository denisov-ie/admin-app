import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import styles from "./Input.module.css";

const noop = () => {};

function Component({ element, className }) {
  return <div className={className}>{element}</div>;
}

export const DEFAULT_PREFIX = {
  text: (text, className = styles.prefixTextDefault) => (
    <span className={className}>{text}</span>
  ),
  icon: (iconName, className = styles.prefixIconDefault) => (
    <Icon name={iconName} className={className} />
  ),
};

export const DEFAULT_POSTFIX = {
  text: (text, className = styles.postfixTextDefault) => (
    <span className={className}>{text}</span>
  ),
  icon: (iconName, className = styles.postfixIconDefault) => (
    <Icon name={iconName} className={className} />
  ),
};

function Input({
  className,
  label,
  placeholder,
  prefix,
  postfix,
  disabled,
  invalid,
  value = "",
  onChange = noop,
  onClear,
  ...props
}) {
  const baseClassNames = classnames(styles._, className, {
    [styles.disabled]: disabled,
    [styles.invalid]: invalid,
  });

  return (
    <div className={baseClassNames}>
      <label className={styles.label}>
        {label && <div className={styles.labelDivider}>{label}</div>}
        <div className={styles.field}>
          {prefix && <Component element={prefix} className={styles.prefix} />}
          <input
            className={styles.area}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
            {...props}
          />
          {postfix && (
            <Component element={postfix} className={styles.postfix} />
          )}
          {!disabled && onClear && value.length > 0 && (
            <button className={styles.button} onClick={onClear}>
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
