import classNames from "components/classname/className";
import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ src = defaultImage, className = "h-[158px]" }) => {
  return (
    <div className={classNames("rounded-2xl", className)}>
      <img
        src={src}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
