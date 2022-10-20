import classnames from "classnames";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

export const BUTTON_SIZE = {
  medium: "medium",
  small: "small",
};

export const BUTTON_COLOR = {
  blue: "blue",
  red: "red",
  blueReverse: "blueReverse",
  blackReverse: "blackReverse",
};

function Button({
  className,
  size = BUTTON_SIZE.medium,
  color = BUTTON_COLOR.blue,
  text,
  icon,
  ...props
}) {
  const classNames = classnames(styles.button, {
    [styles.button_small]: size === BUTTON_SIZE.small,
    [styles.button_medium]: size === BUTTON_SIZE.medium,
    [styles.button_blue]: color === BUTTON_COLOR.blue,
    [styles.button_red]: color === BUTTON_COLOR.red,
    [styles.button_blueReverse]: color === BUTTON_COLOR.blueReverse,
    [styles.button_blackReverse]: color === BUTTON_COLOR.blackReverse,
    [styles.button_iconOnly]: !text,
    [className]: !!className,
  });

  return (
    <button className={classNames} {...props}>
      {icon && <Icon name={icon} className={styles.button__icon} />}
      {text && <div className={styles.button__text}>{text}</div>}
    </button>
  );
}

export default Button;
