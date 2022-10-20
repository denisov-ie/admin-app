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
  text: (text, className = styles.input__prefix_textDefault) => (
    <span className={className}>{text}</span>
  ),
  icon: (iconName, className = styles.input__prefix_iconDefault) => (
    <Icon name={iconName} className={className} />
  ),
};

export const DEFAULT_POSTFIX = {
  text: (text, className = styles.input__postfix_textDefault) => (
    <span className={className}>{text}</span>
  ),
  icon: (iconName, className = styles.input__postfix_iconDefault) => (
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
  const classNames = classnames(styles.input, {
    [styles.input_disabled]: disabled,
    [styles.input_incorrect]: !disabled && style === INPUT_STYLE.incorrect,
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
      <label className={styles.input__label}>
        {label && <div className={styles.input__labelDivider}>{label}</div>}
        <div className={styles.input__field}>
          {prefix && (
            <Component element={prefix} className={styles.input__prefix} />
          )}
          <input
            className={styles.input__area}
            placeholder={placeholder}
            onChange={handleInputChange}
            disabled={disabled}
            value={message}
          />
          {postfix && (
            <Component element={postfix} className={styles.input__postfix} />
          )}
          {!disabled && !hideReset && (
            <button
              className={classnames(styles.input__button, {
                [styles.input__button_hidden]: message.length <= 0,
              })}
              onClick={handleClearButtonClick}
            >
              <Icon name={icon.xLarge} className={styles.input__iconCross} />
            </button>
          )}
          {disabled && (
            <Icon name={icon.locked} className={styles.input__iconLock} />
          )}
        </div>
      </label>
    </div>
  );
}

export default Input;
