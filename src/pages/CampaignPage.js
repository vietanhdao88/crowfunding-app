import { Button } from "components/button";
import Heading from "components/common/Heading";
import CamFeature from "modules/campaign/CamFeature";
import CampainGrid from "modules/campaign/CampainGrid";
import React from "react";
import { v4 } from "uuid";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-10 bg-white rounded-3xl">
        <div className="flex items-start mt-8 gap-x-6">
          <div>
            <button className="flex items-center justify-center font-semibold text-white rounded-full w-14 h-14 bg-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-1 gap-y-2">
            <h3 className="text-xl font-semibold text-text1">
              Create your Campaign
            </h3>
            <p className="text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="@" className="text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button type="button" kind="ghost" className="py-3 px-[30px]">
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampainGrid type="secondary">
        {Array(3)
          .fill(0)
          .map((item) => (
            <CamFeature key={v4()}></CamFeature>
          ))}
      </CampainGrid>
      <Button
        type="button"
        kind="ghost"
        className="mx-auto mt-[10px] mb-10 px-14 py-3"
      >
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Button>
      <Heading number={4}>Recent Campaign</Heading>
      <CampainGrid type="secondary">
        {Array(3)
          .fill(0)
          .map((item) => (
            <CamFeature key={v4()}></CamFeature>
          ))}
      </CampainGrid>
    </>
  );
};

export default CampaignPage;
