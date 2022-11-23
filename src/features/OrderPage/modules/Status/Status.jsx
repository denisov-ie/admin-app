import { Icon, ICON_TYPE as icons } from "shared/components/Icon";
import classnames from "classnames";
import styles from "./Status.module.css";

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

const STATUS_MAP = {
  new: { icon: icons.dot, iconColor: COLORS.orange, text: STATUSES.new.name },
  calculation: {
    icon: icons.dot,
    iconColor: COLORS.blue,
    text: STATUSES.calculation.name,
  },
  confirmed: {
    icon: icons.dot,
    iconColor: COLORS.darkBlue,
    text: STATUSES.confirmed.name,
  },
  postponed: {
    icon: icons.dot,
    iconColor: COLORS.orange,
    text: STATUSES.postponed.name,
  },
  executed: {
    icon: icons.checkmark,
    iconColor: COLORS.green,
    text: STATUSES.executed.name,
    textColor: COLORS.green,
  },
  canceled: {
    icon: icons.abort,
    iconColor: COLORS.lightBlack,
    text: STATUSES.canceled.name,
    textColor: COLORS.lightBlack,
  },
};

function Status({ className, status }) {
  const statusParameters = STATUS_MAP[status];

  const baseClassNames = classnames(styles._, className, {
    [styles.green]: statusParameters.textColor === COLORS.green,
    [styles.lightBlack]: statusParameters.textColor === COLORS.lightBlack,
  });

  const baseIconClassNames = classnames(styles.icon, {
    [styles.green]: statusParameters.iconColor === COLORS.green,
    [styles.lightBlack]: statusParameters.iconColor === COLORS.lightBlack,
    [styles.blue]: statusParameters.iconColor === COLORS.blue,
    [styles.darkBlue]: statusParameters.iconColor === COLORS.darkBlue,
    [styles.orange]: statusParameters.iconColor === COLORS.orange,
  });

  return (
    <div className={baseClassNames}>
      {statusParameters.icon && (
        <Icon name={statusParameters.icon} className={baseIconClassNames} />
      )}
      {statusParameters.text}
    </div>
  );
}

export default Status;
