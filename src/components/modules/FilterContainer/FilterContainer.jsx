import { useState } from "react";
import Filter from "../Filter/Filter";

function FilterContainer() {
  const [isActive, setIsActive] = useState(false);

  const handleShowFilterButtonClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      isActive={isActive}
    />
  );
}

export default FilterContainer;
