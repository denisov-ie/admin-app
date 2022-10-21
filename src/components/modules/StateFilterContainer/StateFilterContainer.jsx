import { useState } from "react";
import StateFilter from "../StateFilter/StateFilter";

function StateFilterContainer({ className }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowStateDropdown = (e) => {
    e.preventDefault();
    setIsVisible((current) => !current);
  };

  return (
    <StateFilter
      className={className}
      isVisible={isVisible}
      onClickShowStateDropdownInput={handleShowStateDropdown}
    />
  );
}

export default StateFilterContainer;
