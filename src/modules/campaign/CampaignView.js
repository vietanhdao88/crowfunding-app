import React from "react";
import CamMeta from "./parts/CamMeta";
import CamDesc from "./parts/CamDesc";
import CamTitlte from "./parts/CamTitlte";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import GapRow from "components/common/GapRow";
import FaceBookIcon from "components/icon/FaceBookIcon";
import TwitterIcon from "components/icon/TwitterIcon";
import ShareIcon from "components/icon/ShareIcon";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";
import { Button } from "components/button";
import { defaultImage } from "constants/global";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampainGrid from "./CampainGrid";
import CampaignItem from "./CampaignItem";
import { v4 } from "uuid";

const CampaignView = () => {
  return (
    <>
      <div
        className="min-h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center flex items-center justify-center font-bold text-white text-[40px]"
        style={{
          backgroundImage: `linear-gradient(179deg, rgba(32, 18, 63, 0.00) -7.14%, #000 87.01%),url(https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <GapRow></GapRow>
      <div className="flex items-start w-full gap-x-[40px] max-w-[1066px] mb-[30px]">
        <div className="flex-1">
          <CampImage className="h-[398px]"></CampImage>
          <div className="flex items-center gap-x-5 mt-[30px] ml-[85px]">
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  src={defaultImage}
                  className="h-[70px] w-[80px] rounded-md object-cover"
                  alt=""
                ></img>
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <div className="flex items-center justify-between">
            <CampCategory text="Architecture"></CampCategory>
            <div className="flex items-center gap-x-5">
              <span>
                <FaceBookIcon></FaceBookIcon>
              </span>
              <span>
                <TwitterIcon></TwitterIcon>
              </span>
              <span>
                <ShareIcon></ShareIcon>
              </span>
            </div>
          </div>
          <CamTitlte
            text="Remake - We Make architecture exhibition"
            className="text-xl font-bold"
          ></CamTitlte>
          <CamDesc
            text="Remake - We Make: an exhibition about architecture's social
agency in the face of urbanisation"
            className="text-sm text-text3 mt-[15px]"
          ></CamDesc>
          <CampaignViewAuthor image={defaultImage}></CampaignViewAuthor>
          <div className="w-full h-[5px] bg-[#efefefef] rounded-md mt-[35px]">
            <div className="w-3/5 h-full rounded-md bg-primary"></div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <CamMeta
              amount={"$2000"}
              title="Raised of $2500"
              size="big"
            ></CamMeta>
            <CamMeta amount={"173"} title="Total backers" size="big"></CamMeta>
            <CamMeta amount={"30"} title="Days left" size="big"></CamMeta>
          </div>
          <Button kind="primary" type="button" className="w-full mt-[15px]">
            Back this project
          </Button>
        </div>
      </div>
      <div className="mt-[94px] px-[125px] py-5 flex items-center justify-between bg-white shadow-ssecondary">
        <div className="flex items-center gap-x-[60px]">
          <span>CamPaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button type="button" kind="primary">
          Back this project
        </Button>
      </div>
      <div className="grid grid-cols-[1.3fr,1fr] gap-x-[124px] mt-[25px] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            {Array(3)
              .fill(0)
              .map((item) => (
                <CampaignPerk key={v4()}></CampaignPerk>
              ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-10 text-xl font-semibold">
          You also may be interested in
        </h2>
        <CampainGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampainGrid>
      </div>
    </>
  );
};

export default CampaignView;
