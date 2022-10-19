import classnames from "classnames";
import styles from "./Dropdown.module.css";

export const dropdownStyles = {
  list: styles.dropdown_withList,
  default: styles.dropdown_default,
};

function Dropdown({
  className,
  style = dropdownStyles.default,
  title,
  children,
  ...props
}) {
  const classNames = classnames(styles.dropdown, {
    [styles.dropdown_withList]: style === styles.dropdown_withList,
    [styles.dropdown_default]: style === styles.dropdown_default,
    [className]: !!className,
  });
  const keys = children.map((child, index) => index);

  return (
    <div className={classNames} {...props}>
      {title && <span className={styles.dropdown__title}>{title}</span>}
      {style === dropdownStyles.default && children}
      {style === dropdownStyles.list && (
        <ul className={styles.dropdown__list}>
          {children.map((child, index) => (
            <label key={keys[index]}>
              <li className={styles.dropdown__item}>{child}</li>
            </label>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
