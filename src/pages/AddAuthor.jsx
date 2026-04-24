import React from "react";
import addauthor from "../assets/addauthor.svg";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { useForm } from "react-hook-form";

const AddAuthor = () => {
  const form = useForm();
  return (
    <div className="h-screen flex">
      <div className="flex flex-col w-[50%] bg-[#F3F3F3ED] justify-center items-center gap-y-6">
        <div>
          <img src={addauthor} alt="" />
        </div>
        <h1 className="text-center text-[24px] font-bold">Ulugbek hazinasi</h1>
        <Button className={"min-w-82.5"}>Upload image</Button>
      </div>
      <div className="w-[50%] p-[31px_138px] ">
        <div className="max-w-82.5">
          <h1 className="text-[36px] font-bold">Add author</h1>
          <form className="flex flex-col gap-y-4 mt-6">
            <Input name={"firstname"} form={form} placeholder={"First name"} />
            <Input name={"lastname"} form={form} placeholder={"Last name"} />
            <Input
              name={"date_of_birth"}
              form={form}
              placeholder={"Date of birth"}
            />
            <Input
              name={"date_of_death"}
              form={form}
              placeholder={"Date of death"}
            />
            <Input name={"country"} form={form} placeholder={"Country"} />
            <Input
              name={"bio"}
              form={form}
              placeholder={"Bio"}
              className={"py-[15px_52px]"}
            />
            <Button className={"mt-12"} type={"submit"}>Create</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;
