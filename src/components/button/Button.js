import React from "react";
import PropTypes from "prop-types";
import classNames from "components/classname/className";
import { Link } from "react-router-dom";
const Button = ({
  children,
  className = "",
  type = "button",
  isLoading = false,
  ...rest
}) => {
  let classNameButton =
    "flex items-center justify-center rounded-xl min-h-[56px] font-semibold p-4 rounded-[10px]";
  switch (rest.kind) {
    case "primary":
      classNameButton += " bg-primary text-white";
      break;
    case "secondary":
      classNameButton += " bg-secondary text-white ";
      break;
    case "ghost":
      classNameButton += " bg-secondary text-secondary bg-opacity-20";
      break;
    default:
      break;
  }
  const child = !!isLoading ? (
    <div className="w-10 h-10 p-4 border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(classNameButton, className)}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        classNameButton,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
};
export default Button;
