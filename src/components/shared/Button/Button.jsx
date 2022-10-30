import classnames from "classnames";
import { Icon } from "components/shared/Icon";
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
  const baseClassNames = classnames(styles._, className, {
    [styles.small]: size === BUTTON_SIZE.small,
    [styles.medium]: size === BUTTON_SIZE.medium,
    [styles.blue]: color === BUTTON_COLOR.blue,
    [styles.red]: color === BUTTON_COLOR.red,
    [styles.blueReverse]: color === BUTTON_COLOR.blueReverse,
    [styles.blackReverse]: color === BUTTON_COLOR.blackReverse,
    [styles.iconOnly]: !text,
  });

  return (
    <button className={baseClassNames} {...props}>
      {icon && <Icon name={icon} className={styles.icon} />}
      {text && <div className={styles.text}>{text}</div>}
    </button>
  );
}

export default Button;
