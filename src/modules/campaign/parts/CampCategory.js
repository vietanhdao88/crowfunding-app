import classNames from "components/classname/className";
import ErrorComponent from "components/common/ErrorComponent";
import IconFolder from "components/icon/IconFolder";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CampCategory = ({ text = "Motobike", className = "text-sm" }) => {
  return (
    <Link
      to={"/"}
      className={classNames(
        "flex md:gap-x-[10px]  font-medium text-text3 items-baseline",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

CampCategory.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default withErrorBoundary(CampCategory, {
  FallbackComponent: ErrorComponent,
});
