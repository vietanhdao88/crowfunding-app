import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-[30px]">
      <div className="flex items-center gap-x-[50px] flex-1">
        <img srcSet="/Logo.png 2x" alt="crowfunding-app" />
        <div className="w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          type="button"
          kind="secondary"
          href="/start-campaign"
          className="py-[13px] px-[26px]"
        >
          Start a campain
        </Button>
        <div className="rounded-full">
          <img
            srcSet="/avatar.png 2x"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
