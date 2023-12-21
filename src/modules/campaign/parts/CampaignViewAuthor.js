import StarIcon from "components/icon/StarIcon";
import { defaultImage } from "constants/global";
import React from "react";

const CampaignViewAuthor = ({
  countStar = 5,
  authorName = "Saiful Islam",
  countCampaign = 2,
  address = "Dhaka, Bangladesh",
  imageAuthor = defaultImage,
}) => {
  return (
    <div className="flex items-center gap-x-5 mt-[25px]">
      <div className="w-[60px] h-[60px] rounded-full flex-shrink-0">
        <img
          src={imageAuthor}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-x-[15px]">
          <h3 className="text-lg font-medium text-text1">{authorName}</h3>
          <span className="flex items-center gap-x-1">
            {Array(countStar)
              .fill(0)
              .map((item) => (
                <StarIcon key={item}></StarIcon>
              ))}
          </span>
        </div>
        <div className="flex items-center gap-x-[10px] text-sm">
          <span className="font-semibold text-primary">
            {countCampaign} Campaign
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={6}
              height={6}
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx={3} cy={3} r={3} fill="#808191" />
            </svg>
          </span>
          <span className=" text-text3">{address}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewAuthor;
