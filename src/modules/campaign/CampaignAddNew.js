import { Button } from "components/button";
import GapRow from "components/common/GapRow";
import { FormRow, FromGroup } from "components/form";
import { Input, TextArea } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DropDown from "components/dropdown/DropDown";
import { List, Options, Select } from "components/dropdown";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import Search from "components/dropdown/Search";
import useOnChange from "hooks/useOnChange";
import axios from "axios";
import { v4 } from "uuid";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { baseUrl, imgbbApi } from "config/config";
import FormGroup from "components/form/FormGroup";
import ImageUpload from "components/image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);
const schema = yup.object({
  title: yup.string().required(),
  category: yup.string().required(),
  short_description: yup.string().required(),
  goal: yup.number(8).required(),
  raised_amount: yup.number().required(),
  amount_prefilled: yup.string().required(),
  video: yup.string().required(),
});
const categoiresData = ["film", "architecture", "moto", "education"];
const methodData = ["method1", "method2", "method3", "method4"];
const CampaignAddNew = () => {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    // mode: "onChange",
    // resolver: yupResolver(schema),
  });
  const handleGetDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const hanldeAddCampaign = async (values) => {
    try {
      console.log(values);
      await axios.post(`${baseUrl}/campaigns`, {
        ...values,
        startDate,
        endDate,
        content,
      });
      reset({
        title: "",
        category: "",
        short_description: "",
        goal: "",
        raised_amount: "",
        amount_prefilled: "",
        video: "",
        start_date: new Date(),
        end_date: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDropdown = (name, value) => {
    setValue(name, value);
    console.log(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbApi,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const { value: filterCountries, handleOnChange: handleFilterCountries } =
    useOnChange(500);
  useEffect(() => {
    if (!filterCountries) return;
    async function filterData() {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountries}`
        );
        //https://restcountries.com/v3.1/name/${filterCountry}

        setCountries(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    filterData();
  }, [filterCountries]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="rounded-default bg-white px-16 py-10 mt-[10px] ml-[53px] shadow-sprimary">
      <h1 className="text-text2 bg-text4 bg-opacity-4 px-[60px] py-4 flex items-center justify-center gap-x-[10px] font-bold text-2xl max-w-[379px] mx-auto mb-10 rounded-default">
        <span>Start Campaign</span>
        <img src="/rocket.png" alt="" />
      </h1>
      <form action="" onSubmit={handleSubmit(hanldeAddCampaign)}>
        <FormRow>
          <FromGroup>
            <Label>Campaign Title*</Label>
            <Input
              type="text"
              control={control}
              placeholder="Write a title"
              name="title"
            ></Input>
          </FromGroup>
          <FromGroup>
            <Label>Select a Category *</Label>
            <DropDown>
              <Select
                placeholder={handleGetDropdownLabel(
                  "category",
                  "Select a category"
                )}
              ></Select>
              <List>
                {categoiresData.length > 0 &&
                  categoiresData.map((category) => (
                    <Options
                      key={v4()}
                      onClick={() => handleDropdown("category", category)}
                    >
                      <span className="capitalize">{category}</span>
                    </Options>
                  ))}
              </List>
            </DropDown>
          </FromGroup>
        </FormRow>
        <GapRow></GapRow>
        <FromGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FromGroup>
        <GapRow></GapRow>
        <FromGroup>
          <Label>Short Description*</Label>
          <TextArea
            name="short_description"
            control={control}
            placeholder="Write a short description"
          ></TextArea>
        </FromGroup>
        <h1 className="min-h-[120px] bg-secondary text-white px-11 flex items-center justify-start gap-x-5 rounded-default mb-10 mt-10">
          <svg
            width={32}
            height={40}
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4997 9.979H9.16634C8.66634 9.979 8.33301 10.3123 8.33301 10.8123C8.33301 11.3123 8.66634 11.6457 9.16634 11.6457H22.4997C22.9997 11.6457 23.333 11.3123 23.333 10.8123C23.333 10.3123 22.9997 9.979 22.4997 9.979Z"
              fill="white"
            />
            <path
              d="M8.4999 7.81266C8.4999 8.146 8.83324 8.31266 9.16657 8.31266H22.4999C22.8332 8.31266 23.1666 8.146 23.1666 7.81266L26.4999 1.146C26.6666 0.812663 26.6666 0.479329 26.3332 0.145996C26.1666 -0.0206706 25.8332 -0.0206706 25.4999 0.145996L19.3332 3.146L16.4999 0.312663C16.1666 -0.0206706 15.6666 -0.0206706 15.3332 0.312663L12.3332 3.146L6.16657 0.145996C5.83324 -0.0206706 5.4999 -0.0206706 5.16657 0.145996C4.83324 0.312663 4.9999 0.812663 5.16657 1.146L8.4999 7.81266Z"
              fill="white"
            />
            <path
              d="M23.1667 13.6456C23 13.4789 22.6667 13.3123 22.5 13.3123H9.16667C9 13.3123 8.66667 13.4789 8.5 13.6456C8.16667 13.9789 0 22.6456 0 27.4789C0 34.3123 7.16667 39.9789 15.8333 39.9789C24.5 39.9789 31.6667 34.3123 31.6667 27.4789C31.6667 22.6456 23.5 13.9789 23.1667 13.6456ZM16.6667 33.3123V34.1456C16.6667 34.6456 16.3333 34.9789 15.8333 34.9789C15.3333 34.9789 15 34.6456 15 34.1456V33.3123C13.1667 32.9789 11.8333 31.8123 11.6667 30.3123C11.6667 29.8123 12 29.4789 12.5 29.4789C13 29.4789 13.3333 29.8123 13.3333 30.3123C13.3333 30.9789 14.1667 31.6456 15 31.8123V28.4789C12.8333 27.9789 11.6667 26.8123 11.6667 25.3123C11.6667 23.6456 13.1667 22.3123 15 21.9789V21.1456C15 20.6456 15.3333 20.3123 15.8333 20.3123C16.3333 20.3123 16.6667 20.6456 16.6667 21.1456V21.6456C18.5 21.9789 19.8333 23.1456 20 24.6456C20 25.1456 19.6667 25.4789 19.1667 25.4789C18.6667 25.4789 18.3333 25.1456 18.3333 24.6456C18.3333 23.9789 17.5 23.3123 16.6667 23.1456V26.4789C18.8333 26.9789 20 28.1456 20 29.6456C20 31.6456 18.5 32.9789 16.6667 33.3123Z"
              fill="white"
            />
            <path
              d="M16.667 28.4785V31.4785C17.667 31.3119 18.3337 30.6452 18.3337 29.9785C18.3337 29.3119 17.8337 28.8118 16.667 28.4785Z"
              fill="white"
            />
            <path
              d="M13.333 24.9788C13.333 25.6454 13.833 26.1454 14.9997 26.4788V23.4788C13.9997 23.6454 13.333 24.3121 13.333 24.9788Z"
              fill="white"
            />
          </svg>

          <span className="text-2xl font-bold">
            You will get 90% of total raised
          </span>
        </h1>
        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload onChange={setValue} name="feature_image"></ImageUpload>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FromGroup>
            <Label>Goal*</Label>
            <Input
              type="text"
              control={control}
              placeholder="$0.00 USD"
              name="goal"
            ></Input>
          </FromGroup>
          <FromGroup>
            <Label>Raised Amount*</Label>
            <Input
              type="text"
              control={control}
              placeholder="$0.00 USD"
              name="raised_amount"
            ></Input>
          </FromGroup>
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <FromGroup>
            <Label>Amount Prefilled*</Label>
            <Input
              type="text"
              control={control}
              placeholder="Amount Prefilled"
              name="amount_prefilled"
            ></Input>
            <p className="max-w-[387px] text-sm text-text3 mt-[15px]">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FromGroup>
          <FromGroup>
            <Label>Video*</Label>
            <Input
              type="text"
              control={control}
              placeholder="Video"
              name="video"
            ></Input>
            <p className="text-sm text-text3 mt-[15px]">
              Place Youtube or Vimeo Video URL
            </p>
          </FromGroup>
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <FromGroup>
            <Label>Campaign End Method</Label>
            <DropDown>
              <Select
                placeholder={handleGetDropdownLabel("method", "Select one")}
              ></Select>
              <List>
                {methodData.length > 0 &&
                  methodData.map((method) => (
                    <Options
                      key={v4()}
                      onClick={() => handleDropdown("method", method)}
                    >
                      <span className="capitalize">{method}</span>
                    </Options>
                  ))}
              </List>
            </DropDown>
          </FromGroup>
          {/* <FromGroup>
            <Label>Country</Label>
            <DropDown>
              <Select
                placeholder={handleGetDropdownLabel(
                  "country",
                  "Select a country"
                )}
              ></Select>
              <List>
                <Search
                  placeholder="Seach country"
                  onChange={handleFilterCountries}
                ></Search>
                {countries.length > 0 &&
                  countries.map((item) => (
                    <Options
                      key={v4()}
                      onClick={() =>
                        hanldeAddCampaign("country", item.name.common)
                      }
                    >
                      {item?.name?.common}
                    </Options>
                  ))}
              </List>
            </DropDown>
          </FromGroup> */}
        </FormRow>
        <GapRow></GapRow>
        <FormRow>
          <FromGroup>
            <Label>Start Date*</Label>

            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
          </FromGroup>

          <FromGroup>
            <Label>End Date*</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FromGroup>
        </FormRow>
        <GapRow></GapRow>
        <Button type="submit" kind="primary" className="px-10 mx-auto">
          Submit new campaign
        </Button>
      </form>
    </div>
  );
};

export default CampaignAddNew;
