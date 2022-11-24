import { ReactComponent as IconAbort } from "./assets/abort.svg";
import { ReactComponent as IconBin } from "./assets/bin.svg";
import { ReactComponent as IconCheckmark } from "./assets/checkmark.svg";
import { ReactComponent as IconDot } from "./assets/dot.svg";
import { ReactComponent as IconFilter } from "./assets/filter.svg";
import { ReactComponent as IconLocked } from "./assets/locked.svg";
import { ReactComponent as IconMoon } from "./assets/moon.svg";
import { ReactComponent as IconPencil } from "./assets/pencil.svg";
import { ReactComponent as IconRefresh } from "./assets/refresh.svg";
import { ReactComponent as IconSearch } from "./assets/search.svg";
import { ReactComponent as IconSun } from "./assets/sun.svg";
import { ReactComponent as IconVArrow } from "./assets/v_arrow.svg";
import { ReactComponent as IconXLarge } from "./assets/x-large.svg";
import { ReactComponent as IconXMedium } from "./assets/x-medium.svg";

export const ICON_TYPE = {
  abort: IconAbort,
  bin: IconBin,
  checkmark: IconCheckmark,
  dot: IconDot,
  filter: IconFilter,
  locked: IconLocked,
  moon: IconMoon,
  pencil: IconPencil,
  refresh: IconRefresh,
  search: IconSearch,
  sun: IconSun,
  vArrow: IconVArrow,
  xLarge: IconXLarge,
  xMedium: IconXMedium,
};

function Icon({ name, ...props }) {
  const IconComponent = name;

  return IconComponent ? <IconComponent {...props} /> : null;
}

export default Icon;
