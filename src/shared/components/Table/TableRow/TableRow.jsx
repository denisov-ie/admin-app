import classnames from "classnames";
import styles from "./TableRow.module.css";

function TableRow({ className, highlighted, onClick, children }) {
  const baseClassNames = classnames(styles._, className, {
    [styles.highlighted]: highlighted,
  });

  return (
    <div role="presentation" className={baseClassNames} onClick={onClick}>
      {children}
    </div>
  );
}

export default TableRow;
