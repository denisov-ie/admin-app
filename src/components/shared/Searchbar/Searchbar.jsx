import classnames from "classnames";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ className, placeholder, ...props }) {
  const baseClassNames = classnames(styles._, className);

  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClearButtonClick = () => {
    setValue("");
  };

  return (
    <div className={baseClassNames}>
      <Input
        placeholder={placeholder}
        prefix={prefix.icon(icon.search, styles.iconSearch)}
        value={value}
        onChange={handleOnChange}
        onClear={handleOnClearButtonClick}
        {...props}
      />
    </div>
  );
}

export default Searchbar;
