import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import { v4 } from "uuid";
const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <Overlay></Overlay>
      <ReactModal
        isOpen={false}
        overlayClassName="bg-black bg-opacity-20 fixed inset-0 flex items-center justify-center z-50"
        className=" w-full max-w-[521px] bg-white rounded-[20px] border-none px-10 py-[10px] outline-none relative overflow-y-auto max-h-screen scroll-hidden"
      >
        <button
          type="button"
          className="absolute p-[10px] right-[40px] top-[10px] z-10 cursor-pointer text-text2 w-11 h-11 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="mb-10 text-2xl font-bold text-center mt-11">
          Back this project
        </h1>
        <p className="mb-[10px] font-semibold text-text2">
          Enter the contribute amount $10
        </p>
        <input
          type="text"
          placeholder="$10"
          className="px-[25px] py-[15px] border border-strock rounded-default w-full"
        />
        <p className="mt-5 text-sm text-text3">
          Contribution are not associatied with perks
        </p>
        <button className="py-3 mt-5 font-semibold text-white bg-primary px-11 rounded-default">
          Continue
        </button>
        <div className="flex flex-col gap-y-10">
          {Array(3)
            .fill(0)
            .map((item) => (
              <CampaignPerk showButton={true} key={v4()}></CampaignPerk>
            ))}
        </div>
      </ReactModal>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
