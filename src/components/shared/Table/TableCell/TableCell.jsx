import classnames from "classnames";
import styles from "./TableCell.module.css";

function TableCell({ className, onClick, children }) {
  const baseClassNames = classnames(styles._, className);

  return (
    <div role="presentation" className={baseClassNames} onClick={onClick}>
      {children}
    </div>
  );
}

export default TableCell;
