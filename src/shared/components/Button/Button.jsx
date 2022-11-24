import classnames from "classnames";
import { Icon } from "shared/components/Icon";
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
  icon,
  children,
  ...props
}) {
  const baseClassNames = classnames(styles._, className, {
    [styles.small]: size === BUTTON_SIZE.small,
    [styles.medium]: size === BUTTON_SIZE.medium,
    [styles.blue]: color === BUTTON_COLOR.blue,
    [styles.red]: color === BUTTON_COLOR.red,
    [styles.blueReverse]: color === BUTTON_COLOR.blueReverse,
    [styles.blackReverse]: color === BUTTON_COLOR.blackReverse,
    [styles.iconOnly]: !children,
  });

  return (
    <button className={baseClassNames} {...props}>
      {icon && <Icon name={icon} className={styles.icon} />}
      {children && <div className={styles.text}>{children}</div>}
    </button>
  );
}

export default Button;
