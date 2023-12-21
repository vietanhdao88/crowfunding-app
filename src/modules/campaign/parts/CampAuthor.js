import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { defaultImage } from "constants/global";
const CampAuthor = ({ image = defaultImage, author = "" }) => {
  return (
    <div className="flex items-center mt-[20px] gap-x-[10px]">
      <div className="w-[30px] h-[30px] rounded-full ">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <p className="text-xs text-text3">
        by <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};
CampAuthor.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default withErrorBoundary(CampAuthor, {
  FallbackComponent: ErrorComponent,
});
