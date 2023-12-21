import { defaultImage } from "constants/global";
import React from "react";
import CamTitlte from "./parts/CamTitlte";
import { Button } from "components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white rounded-default shadow-sthirty">
        <div className="h-[232px] rounded-default">
          <img
            src={defaultImage}
            alt=""
            className="block object-cover w-full h-full rounded-default"
          />
        </div>
        <div className="p-5">
          <span className="px-3 py-[3px] text-xs font-medium text-white rounded-[2px] bg-secondary">
            Feature
          </span>
          <CamTitlte
            text="Special One Camera"
            className="mt-5 text-xl font-semibold"
          ></CamTitlte>
          <div className="flex items-center gap-x-[10px] mt-[5px]">
            <span className="text-xl font-bold">$2,724 USD</span>
            <div className="text-[#EB5757] flex items-center gap-x-[5px] text-sm font-medium">
              <span className="line-through">$1,504 USD</span>
              <span>(12% OFF)</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px] text-sm mt-[15px]">
            <strong className="text-[16px] font-semibold">
              Estimated Shipping
            </strong>
            <span className="text-text2">October 2022</span>
            <p className="text-text2">
              <span className="font-medium text-text1">05</span> claimed
            </p>
            <p className="text-text2">Ships worldwide</p>
          </div>
        </div>
      </div>
      <Button type="button" kind="secondary" className="w-full mt-[25px]">
        Get this perk
      </Button>
    </div>
  );
};

export default CampaignPerk;
