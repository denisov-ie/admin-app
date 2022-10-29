import classnames from "classnames";
import { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Searchbar.module.css";
import Input, { DEFAULT_PREFIX as prefix } from "../Input/Input";

function Searchbar({ className, placeholder, ...props }) {
  const baseClassNames = classnames(styles._, className);

  return (
    <div className={baseClassNames}>
      <Input
        placeholder={placeholder}
        prefix={prefix.icon(icon.search, styles.iconSearch)}
        {...props}
      />
    </div>
  );
}

export default Searchbar;
