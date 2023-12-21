import classNames from "components/classname/className";
import React from "react";

const CamMeta = ({ amount = null, title = "", size = "small" }) => {
  return (
    <div className="flex flex-col gap-y-[3px]">
      <span
        className={classNames(
          " font-semibold text-text2",
          size === "small" ? "text-sm" : "text-xl"
        )}
      >
        {amount}
      </span>
      <span
        className={classNames(
          " text-text4",
          size === "small" ? "text-xs" : "text-base"
        )}
      >
        {title}
      </span>
    </div>
  );
};

export default CamMeta;
