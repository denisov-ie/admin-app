import { useState } from "react";
import { BUTTON_COLOR as color } from "../../shared/Button/Button";
import Filter from "../Filter/Filter";

function FilterContainer({ className }) {
  const [isActive, setIsActive] = useState(false);

  const handleShowExtendedFilters = () => {
    setIsActive((current) => !current);
  };

  const filterButtonColor = isActive ? color.blue : color.blueReverse;

  return (
    <Filter
      className={className}
      filterButtonColor={filterButtonColor}
      isActive={isActive}
      onShowExtendedFiltersButtonClick={handleShowExtendedFilters}
    />
  );
}

export default FilterContainer;
