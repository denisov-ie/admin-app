import { useState } from "react";
import styles from "../Input/Input.module.css";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";

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

function InputContainer({
  className,
  value = "",
  label,
  placeholder,
  prefix,
  postfix,
  hideReset,
  disabled,
  incorrect,
  ...props
}) {
  const [message, setMessage] = useState(value);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClearButtonClick = () => {
    setMessage("");
  };

  return (
    <Input
      className={className}
      prefix={prefix}
      postfix={postfix}
      disabled={disabled}
      incorrect={incorrect}
      message={message}
      hideReset={hideReset}
      label={label}
      placeholder={placeholder}
      onClearButtonClick={handleClearButtonClick}
      onChange={handleChange}
      {...props}
    />
  );
}

export default InputContainer;
