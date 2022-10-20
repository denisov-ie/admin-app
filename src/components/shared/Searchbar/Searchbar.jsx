import classnames from "classnames";
import { ICON_TYPE as icon } from "../Icon/Icon";
import styles from "./Searchbar.module.css";
import Input, {
  DEFAULT_PREFIX as prefix,
  INPUT_STYLE as input,
} from "../Input/Input";

function Searchbar({ className, placeholder, ...props }) {
  const classNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={classNames} {...props}>
      <Input
        style={input.default}
        placeholder={placeholder}
        prefix={prefix.icon(icon.search, styles.iconSearch)}
      />
    </div>
  );
}

export default Searchbar;
