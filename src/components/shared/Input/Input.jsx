import classnames from "classnames";
import { useState } from "react";
import Icon, { iconTypes as icon } from "../Icon/Icon";
import styles from "./Input.module.css";

export const inputStyles = {
  default: null,
  disabled: styles.input_disabled,
  incorrect: styles.input_incorrect,
  dropdown: styles.input_dropdown,
};

function isDisabled(style) {
  return style === inputStyles.disabled;
}

function isDropdown(style) {
  return style === inputStyles.dropdown;
}

function Input({
  className,
  labelText,
  placeholderText,
  annotationText,
  style = inputStyles.default,
  ...props
}) {
  const classNames = classnames(styles.input, {
    [styles.input_disabled]: style === inputStyles.disabled,
    [styles.input_incorrect]: style === inputStyles.incorrect,
    [styles.input_dropdown]: style === inputStyles.dropdown,
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
        {labelText}
        <div className={styles.input__field}>
          {annotationText && (
            <span className={styles.input__annotation}>{annotationText}</span>
          )}
          <input
            className={styles.input__area}
            placeholder={!isDisabled(style) ? placeholderText : null}
            onChange={handleInputChange}
            disabled={isDisabled(style) || isDropdown(style)}
            value={message}
          />
          {!isDisabled(style) && !isDropdown(style) && (
            <button
              className={classnames(styles.input__button, {
                [styles.input__button_hidden]: message.length <= 0,
              })}
              onClick={handleClearButtonClick}
            >
              <Icon name={icon.xLarge} className={styles.input__iconCross} />
            </button>
          )}
          {isDisabled(style) && (
            <Icon name={icon.locked} className={styles.input__iconLock} />
          )}
          {isDropdown(style) && (
            <Icon name={icon.vArrow} className={styles.input__iconVArrow} />
          )}
        </div>
      </label>
    </div>
  );
}

export default Input;
