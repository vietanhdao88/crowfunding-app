import React, { useEffect } from "react";
import LayoutAuthencation from "../layout/LayoutAuthencation";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import Label from "../components/label/Label";

import Button from "../components/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import EyeToggle from "components/icon/EyeToggle";
import useToggleValue from "hooks/useToggleValue";
import ButtonGoogle from "components/button/ButtonGoogle";
import { FromGroup } from "components/form";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
const SignIn = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    if (!isValid) return;
    console.log(values);
    await toast.success("Welcome to my Crowfunding App");
    await reset({
      email: "",
      password: "",
    });
  };
  // useEffect(() => {
  //   const arrayError = Object.values(errors);
  //   if (arrayError.length > 0) {
  //     toast.error(arrayError[0].message);
  //   }
  // }, [errors]);
  const { value: show, handleToggleValue: handleShow } = useToggleValue();
  useEffect(() => {
    document.title = "Sign In Page";
  }, []);

  return (
    <LayoutAuthencation heading="Welcome Back">
      <p className="block mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Don't have an account?
        <Link to={"/sign-up"}>
          <span className="font-medium underline text-primary">Sign Up</span>
        </Link>
      </p>
      <ButtonGoogle text="Sign In with Google"></ButtonGoogle>
      <p className="mb-[5px] text-xs font-medium text-center text-text3 lg:text-sm lg:mb-[10px] dark:text-white1">
        Or sign up with email
      </p>
      <form action="" onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
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
        <FromGroup>
          <Link>
            <span className="block my-5 text-sm text-right text-primary">
              Forget password
            </span>
          </Link>
        </FromGroup>
        <FromGroup>
          <Button kind="primary" type="submit">
            Sign In
          </Button>
        </FromGroup>
      </form>
    </LayoutAuthencation>
  );
};

export default SignIn;
