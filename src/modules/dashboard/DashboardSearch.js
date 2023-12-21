import { Button } from "components/button";
import { defaultImage } from "constants/global";
import useToggleValue from "hooks/useToggleValue";
import CampImage from "modules/campaign/parts/CampImage";
import React from "react";
import { v4 } from "uuid";

const DashboardSearch = () => {
  const { value, handleToggleValue } = useToggleValue();
  return (
    <div className="relative z-50">
      <div className="bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] w-full max-w-[458px] p-2 rounded-full flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            className="w-full p-3 text-sm bg-transparent placeholder:text-text4 text-text1"
            placeholder="Do fundrise now"
            onClick={handleToggleValue}
          />
        </div>
        <button className="flex items-center justify-center text-white rounded-full bg-primary w-[72px] h-10 flex-shrink-0">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {value && (
        <div className="absolute left-0 z-50 translate-y-[20px] pb-6 bg-graySoft rounded-[20px] max-w-[832px] w-full">
          <div className="flex items-center justify-between p-[10px] ">
            <span className="block p-[10px] font-medium">
              See all <span className="underline">10,124</span> fundraisier
            </span>
            <Button
              type="submit"
              className="bg-redSoft text-error px-[24px] py-[5px] rounded-[10px]"
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
            </Button>
          </div>
          <div className="mt-[20px] px-[25px] flex flex-col gap-y-[15px]">
            {Array(5)
              .fill(0)
              .map((item) => (
                <div
                  key={v4()}
                  id
                  className="py-[5px] flex items-center gap-x-[20px]"
                >
                  <img
                    src={defaultImage}
                    className="w-[50px] h-[50px] rounded-[10px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-y-[5px] flex-1">
                    <span>
                      <span className="text-sm font-bold text-text1">
                        Education
                      </span>{" "}
                      fund for Durgham Family
                    </span>
                    <span className="text-sm text-text3">
                      By Durgham Family
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-[25px] px-[25px] text-sm">
            <h4 className="font-semibold text-text1">Related results</h4>
            <div className="flex flex-col text-text2 gap-y-[10px] mt-[15px]">
              <p>Education fund</p>
              <p>Scholarship fund</p>
              <p>Education and schools fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSearch;
