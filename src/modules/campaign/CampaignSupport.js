import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="shadow-sthirty py-5 px-[25px] rounded-default">
        <h2 className="mb-5 text-xl font-medium text-center text-text3">
          Pledge without reward
        </h2>
        <form action="">
          <Input
            placeholder="$10"
            control={control}
            name="support"
            type="text"
          ></Input>
          <div className="mt-5 bg-[#f6f6f6] rounded-default p-5">
            <h4 className="text-sm font-semibold text-text2">
              Back it because you believe in it.
            </h4>
            <p className="mt-5 text-sm text-text3">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>
          <Button type="submit" kind="secondary" className="w-full mt-5">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CampaignSupport;
