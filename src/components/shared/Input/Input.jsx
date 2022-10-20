import classnames from "classnames";
import { useState } from "react";
import Icon, { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Input.module.css";

function Component({ element, className }) {
  return <div className={className}>{element}</div>;
}

export const INPUT_STYLE = {
  default: "default",
  incorrect: "incorrect",
};

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
  hideReset,
  style = INPUT_STYLE.default,
  disabled,
  ...props
}) {
  const classNames = classnames(styles._, {
    [styles.disabled]: disabled,
    [styles.incorrect]: !disabled && style === INPUT_STYLE.incorrect,
    [className]: !!className,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClearButtonClick = () => {
    setMessage("");
  };

  return (
    <div className={classNames} {...props}>
      <label className={styles.label}>
        {label && <div className={styles.labelDivider}>{label}</div>}
        <div className={styles.field}>
          {prefix && <Component element={prefix} className={styles.prefix} />}
          <input
            className={styles.area}
            placeholder={placeholder}
            onChange={handleInputChange}
            disabled={disabled}
            value={message}
          />
          {postfix && (
            <Component element={postfix} className={styles.postfix} />
          )}
          {!disabled && !hideReset && (
            <button
              className={classnames(styles.button, {
                [styles.hidden]: message.length <= 0,
              })}
              onClick={handleClearButtonClick}
            >
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
