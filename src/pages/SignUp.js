import useToggleValue from "hooks/useToggleValue";
import SignIn from "./SignIn";
import React, { useEffect, useState } from "react";
import LayoutAuthencation from "../layout/LayoutAuthencation";
import Input from "components/input/Input";

import EyeToggle from "components/icon/EyeToggle";
import Button from "components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Checkbox } from "components/checkbox";
import ButtonGoogle from "components/button/ButtonGoogle";
import { FromGroup } from "components/form";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup
  .object({
    fullname: yup.string().required(),
    email: yup.string().email("invalid email").required(),
    password: yup.string().min(8).required(),
  })
  .required();
const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    //cái mode dùng để bắt lỗi ô input vd khi submit mới báo lỗi || khi giá trị ô input thay đổi thì báo lỗi
  });

  const handleSubmitSignUp = async (values) => {
    if (!isValid) return;
    console.log(values);
    reset({
      fullname: "",
      email: "",
      password: "",
    });
    toast.success("Create a account is successfully");
  };

  useEffect(() => {
    document.title = "Sign Up Page";
  }, []);
  const { value: check, handleToggleValue: handleCheck } = useToggleValue();
  const { value: show, handleToggleValue: handleShow } = useToggleValue();
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    dispatch(authRegister(values));
    reset({});
  };
  return (
    <LayoutAuthencation heading="Sign Up">
      <p className="block mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign Up with Google"></ButtonGoogle>
      <p className="mb-[5px] text-xs font-medium text-center text-text3 lg:text-sm lg:mb-[10px] dark:text-white1">
        Or sign up with email
      </p>
      <form action="" onSubmit={handleSubmit(handleSignUp)} autoComplete="on">
        <FromGroup>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            type="text"
            control={control}
            placeholder={"John Doe"}
            name={"fullname"}
            error={errors?.fullname?.message}
          ></Input>
        </FromGroup>
        <FromGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="text"
            control={control}
            placeholder="example@gmail.com"
            name={"email"}
            error={errors.email?.message}
          ></Input>
        </FromGroup>
        <FromGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${show ? "text" : "password"}`}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <EyeToggle onClick={handleShow} open={show}></EyeToggle>
          </Input>
        </FromGroup>
        <div className="flex items-start mt-5 mb-5 gap-x-5">
          <Checkbox name="term" onClick={handleCheck} checked={check}>
            <p className="flex-1 cursor-pointer text-sx lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Tearms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>

        <FromGroup>
          <Button kind="primary" type="submit">
            Create my account
          </Button>
        </FromGroup>
      </form>
    </LayoutAuthencation>
  );
};

export default SignUp;
