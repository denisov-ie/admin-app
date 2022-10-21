import classnames from "classnames";
import { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Searchbar.module.css";
import InputContainer, {
  DEFAULT_PREFIX as prefix,
} from "../InputContainer/InputContainer";

function Searchbar({ className, placeholder, ...props }) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames} {...props}>
      <InputContainer
        placeholder={placeholder}
        prefix={prefix.icon(icon.search, styles.iconSearch)}
      />
    </div>
  );
}

export default Searchbar;
