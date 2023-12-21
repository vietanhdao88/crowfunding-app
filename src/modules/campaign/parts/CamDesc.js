import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "components/classname/className";
import ErrorComponent from "components/common/ErrorComponent";
const CamDesc = ({ text = "", className = "text-xs" }) => {
  return (
    <p
      className={
        (classNames("font-normal mt-[5px] max-w-[220px] text-text3"), className)
      }
    >
      {text}
    </p>
  );
};
CamDesc.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default withErrorBoundary(CamDesc, {
  FallbackComponent: ErrorComponent,
});
