import classNames from "components/classname/className";
import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const CamTitlte = ({
  text = "Powered Kits Learning Boxes",
  className = "",
}) => {
  return (
    <h3
      className={classNames(" text-text1 mt-[15px] font-semibold", className)}
    >
      {text}
    </h3>
  );
};
CamTitlte.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default withErrorBoundary(CamTitlte, {
  FallbackComponent: ErrorComponent,
});
