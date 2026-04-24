import React, { useEffect, useRef } from "react";
import AuthIcon from "../assets/auth.svg";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/api/useRegister";
import Loader from "../components/ui/Loader";
import { toast } from "react-toastify";
const SignUp = () => {
  const form = useForm();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, mutateAsync, error } = useRegister();
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
      toast.error(error?.response?.data?.message);
    }
  }, [error]);
  return (
    <div className="flex h-screen">
      <div className="w-[50%] bg-[#C9AC8CED]">
        <div className="flex h-full justify-center">
          <img width={500} height={500} src={AuthIcon} alt="" />
        </div>
      </div>
      <div className="w-[50%] p-[75px_134px]">
        <div className="max-w-82.5">
          <h1 className="text-[34px] font-bold">Sign up</h1>
          <span className="text-sm font-semibold">
            Already have an account?{" "}
            <Link className="text-blue-400 mt-2.5 inline-block" to={"/sign-in"}>
              Sign in
            </Link>
          </span>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 mt-6"
          >
            <Input name={"firstname"} form={form} placeholder={"First name"} />
            <Input name={"lastname"} form={form} placeholder={"Last name"} />
            <Input name={"phone_number"} form={form} placeholder={"Phone"} />
            <Input name={"email"} form={form} placeholder={"Email"} />
            <Input name={"password"} form={form} placeholder={"Password"} />
            <Button
              className={"flex justify-center items-center"}
              type={"submit"}
            >
              {isLoading ? <Loader /> : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
