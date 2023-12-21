import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CamFeature from "modules/campaign/CamFeature";
import CampaignItem from "modules/campaign/CampaignItem";
import CampainGrid from "modules/campaign/CampainGrid";
import React from "react";
import { v4 } from "uuid";

const DashBoard = () => {
  return (
    <>
      <Heading children="Your Campaign" number={4}></Heading>
      <CamFeature></CamFeature>
      <Heading children="Your Campaign" number={4}></Heading>
      <CampainGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampainGrid>
      <Heading children="Popular Campaign" number={4}></Heading>
      <CampainGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} id></CampaignItem>
          ))}
      </CampainGrid>
      <Heading children="Recent Campaign" number={4}></Heading>
      <CampainGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} id></CampaignItem>
          ))}
      </CampainGrid>
    </>
  );
};

export default DashBoard;
