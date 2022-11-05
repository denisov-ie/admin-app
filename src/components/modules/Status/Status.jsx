import { Icon, ICON_TYPE as icons } from "components/shared/Icon";
import classnames from "classnames";
import styles from "components/modules/Status/Status.module.css";

export const STATUSES = {
  new: { value: "new", name: "Новый" },
  calculation: { value: "calculation", name: "Рассчет" },
  confirmed: { value: "confirmed", name: "Подтвержден" },
  postponed: { value: "postponed", name: "Отложен" },
  executed: { value: "executed", name: "Выполнен" },
  canceled: { value: "canceled", name: "Отменен" },
};

const COLORS = {
  green: "green",
  lightBlack: "lightBlack",
  blue: "blue",
  darkBlue: "darkBlue",
  orange: "orange",
};

function Status({ className, status }) {
  let icon = null;
  let iconColor = null;
  let text = null;
  let textColor = null;

  switch (status) {
    case STATUSES.new.value: {
      icon = icons.dot;
      iconColor = COLORS.orange;
      text = STATUSES.new.name;
      break;
    }
    case STATUSES.calculation.value: {
      icon = icons.dot;
      iconColor = COLORS.blue;
      text = STATUSES.calculation.name;
      break;
    }
    case STATUSES.confirmed.value: {
      icon = icons.dot;
      iconColor = COLORS.darkBlue;
      text = STATUSES.confirmed.name;
      break;
    }
    case STATUSES.postponed.value: {
      icon = icons.dot;
      iconColor = COLORS.orange;
      text = STATUSES.postponed.name;
      break;
    }
    case STATUSES.executed.value: {
      icon = icons.checkmark;
      iconColor = COLORS.green;
      textColor = COLORS.green;
      text = STATUSES.executed.name;
      break;
    }
    case STATUSES.canceled.value: {
      icon = icons.abort;
      iconColor = COLORS.lightBlack;
      textColor = COLORS.lightBlack;
      text = STATUSES.canceled.name;
      break;
    }
    default: {
      break;
    }
  }

  const baseClassNames = classnames(styles._, className, {
    [styles.green]: textColor === COLORS.green,
    [styles.lightBlack]: textColor === COLORS.lightBlack,
  });

  const baseIconClassNames = classnames(styles.icon, {
    [styles.green]: iconColor === COLORS.green,
    [styles.lightBlack]: iconColor === COLORS.lightBlack,
    [styles.blue]: iconColor === COLORS.blue,
    [styles.darkBlue]: iconColor === COLORS.darkBlue,
    [styles.orange]: iconColor === COLORS.orange,
  });

  return (
    <div className={baseClassNames}>
      {icon && <Icon name={icon} className={baseIconClassNames} />}
      {text}
    </div>
  );
}

export default Status;
