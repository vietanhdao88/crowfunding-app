import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthencation = ({ children, heading = "" }) => {
  return (
    <div className="relative flex w-full min-h-screen p-10 bg-lite isolate dark:bg-darkBg">
      <img
        srcSet="/bg-sign.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1] lg:block w-full "
      />

      <Link to="/" className="lg:inline-block mb-5 lg:mb-[60px] hidden">
        <img srcSet="/Logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-[10px] px-5 py-[30px] lg:px-[60px] lg:py-[50px] mx-auto dark:bg-darkBg">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthencation.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthencation, {
  FallbackComponent: ErrorComponent,
});
