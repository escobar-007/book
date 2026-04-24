import React, { useEffect } from "react";
import LoginAuthIcon from "../assets/login-auth.svg";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/api/useLogin";
import { toast } from "react-toastify";
const SignIn = () => {
  const form = useForm();
  const navigate = useNavigate();
  const { data, error, isSuccess, isLoading, mutateAsync } = useLogin();
  useEffect(() => {
    document.body.style.background = "none";
  }, []);
  const onSubmit = (values) => {
    mutateAsync(values);
  };
  useEffect(() => {
    if (isSuccess) {
      form.reset();
      toast.success("success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error) {
      toast.error(error?.response.data.message);
    }
  }, [error]);
  return (
    <div className="flex h-screen">
      <div className="w-[50%] bg-[#C9AC8CED]">
        <div className="flex h-full justify-center">
          <img width={500} height={500} src={LoginAuthIcon} alt="" />
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center p-[75px_134px]">
        <div className="max-w-82.5 w-full">
          <h1 className="text-[34px] font-bold">Sign In</h1>
          <span className="text-sm font-semibold">
            Do not you have an account?{" "}
            <Link className="text-blue-400 mt-2.5 inline-block" to={"/sign-up"}>
              Sign Up
            </Link>
          </span>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 mt-6"
          >
            <Input name={"email"} form={form} placeholder={"Email"} />
            <Input name={"password"} form={form} placeholder={"Password"} />
            <Button type={"submit"}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
