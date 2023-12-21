import React from "react";

const CampainGrid = ({ children, type = "default" }) => {
  if (type !== "default")
    return <div className="grid grid-cols-1 md:gap-y-[10px]">{children}</div>;
  return <div className="grid grid-cols-4 md:gap-x-[30px]">{children}</div>;
};

export default CampainGrid;
