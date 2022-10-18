import classnames from "classnames";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

export const buttonSizes = {
  buttonMedium: styles.button_medium,
  buttonSmall: styles.button_small,
};

export const buttonColors = {
  buttonBlue: styles.button_blue,
  buttonBlueReverse: styles.button_blueReverse,
  buttonBlackReverse: styles.button_blackReverse,
};

function Button({
  className,
  size = buttonSizes.buttonMedium,
  color = buttonColors.buttonBlue,
  buttonText,
  icon,
  ...props
}) {
  const classNames = classnames(styles.button, size, color, {
    [styles.button_iconOnly]: !buttonText,
    [className]: !!className,
  });

  return (
    <button className={classNames} {...props}>
      {icon && <Icon name={icon} className={styles.button__icon} />}
      {buttonText && <div className={styles.button__text}>{buttonText}</div>}
    </button>
  );
}

export default Button;
