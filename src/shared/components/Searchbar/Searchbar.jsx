import classnames from "classnames";
import { ICON_TYPE as icon } from "shared/components/Icon";
import { DEFAULT_PREFIX as prefix, Input } from "shared/components/Input";
import styles from "./Searchbar.module.css";

function Searchbar({
  className,
  value,
  placeholder,
  invalid,
  onChange,
  onClear,
  ...props
}) {
  const baseClassNames = classnames(styles._, className);

  return (
    <div className={baseClassNames}>
      <Input
        placeholder={placeholder}
        prefix={prefix.icon(icon.search, styles.iconSearch)}
        value={value}
        invalid={invalid}
        onChange={onChange}
        onClear={onClear}
        {...props}
      />
    </div>
  );
}

export default Searchbar;
