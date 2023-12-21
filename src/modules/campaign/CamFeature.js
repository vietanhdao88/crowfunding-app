import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CamTitlte from "./parts/CamTitlte";
import CamDesc from "./parts/CamDesc";
import CamMeta from "./parts/CamMeta";

const CamFeature = () => {
  return (
    <div className="flex items-center w-full gap-x-[30px] max-w-[1048px] mb-[30px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text="Architecture" className=""></CampCategory>
        <CamTitlte
          text="Remake - We Make architecture exhibition"
          className="text-xl font-bold"
        ></CamTitlte>
        <CamDesc
          text="Remake - We Make: an exhibition about architecture's social
agency in the face of urbanisation"
          className="text-sm text-text3 "
        ></CamDesc>
        <div className="w-full h-[5px] bg-[#efefefef] rounded-md mt-[22px]">
          <div className="w-3/5 h-full rounded-md bg-primary"></div>
        </div>
        <div className="flex justify-between mt-[22px]">
          <CamMeta
            amount={"$2000"}
            title="Raised of $2500"
            size="big"
          ></CamMeta>
          <CamMeta amount={"173"} title="Total backers" size="big"></CamMeta>
          <CamMeta amount={"30"} title="Days left" size="big"></CamMeta>
        </div>
      </div>
    </div>
  );
};

export default CamFeature;
