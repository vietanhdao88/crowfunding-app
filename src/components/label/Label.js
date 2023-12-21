import React from "react";
import { PropTypes } from "prop-types";
import classNames from "components/classname/className";
const Label = ({ children, htmlFor = "", className = "", ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "text-sm font-medium text-text2 cursor-pointer py-[10px] inline-block dark:text-text3",
        className
      )}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};
export default Label;
