import classnames from "classnames";
import { useState } from "react";
import Icon, { iconTypes as icon } from "../Icon/Icon";
import styles from "./Searchbar.module.css";

function Searchbar({ className, placeholderText, ...props }) {
  const classNames = classnames(styles.searchbar, {
    [className]: !!className,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClearButtonClick = () => {
    setMessage("");
  };

  return (
    <div className={classNames} {...props}>
      <div className={styles.searchbar__field}>
        <Icon name={icon.search} className={styles.searchbar__iconSearch} />
        <input
          className={styles.searchbar__area}
          placeholder={placeholderText}
          onInput={handleInputChange}
          value={message}
        />
        <button
          className={classnames(styles.searchbar__button, {
            [styles.searchbar__button_hidden]: message.length <= 0,
          })}
          onClick={handleClearButtonClick}
        >
          <Icon name={icon.xLarge} className={styles.searchbar__iconCross} />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
