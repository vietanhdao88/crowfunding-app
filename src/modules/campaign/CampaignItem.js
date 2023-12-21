import IconFolder from "components/icon/IconFolder";
import React from "react";
import { Link } from "react-router-dom";
import CampCategory from "./parts/CampCategory";
import CamTitlte from "./parts/CamTitlte";
import CamMeta from "./parts/CamMeta";

import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
  return (
    <div className="shadow-[0px_12px_20px_0px_rgba(184,_184,_184,_0.03),_0px_6px_12px_0px_rgba(184,_184,_184,_0.02),_0px_2px_4px_0px_rgba(184_184,_184,_0.03)] bg-purewhite rounded-2xl bg-white1">
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CamTitlte></CamTitlte>
        <div className="flex items-center justify-between gap-x-5 mt-[15px]">
          <CamMeta></CamMeta>
          <CamMeta></CamMeta>
        </div>
        <CampAuthor author="Dao Viet Anh"></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
