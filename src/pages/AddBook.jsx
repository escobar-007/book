import React from "react";
import addbook from "../assets/addbook.svg";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const form = useForm();
  return (
    <div className="h-screen flex">
      <div className="flex flex-col w-[50%] bg-[#F3F3F3ED] justify-center items-center gap-y-4">
        <div>
          <img src={addbook} alt="" />
        </div>
        <h1 className="text-center text-[24px] font-bold">Ulugbek hazinasi</h1>
        <Button className={"min-w-82.5"}>Upload cover</Button>
      </div>
      <div className="w-[50%] p-[31px_138px]">
        <div className="max-w-82.5">
          <h1 className="text-[36px] font-bold">Add book</h1>
          <form className="flex flex-col gap-y-4 mt-6">
            <Input name={"title"} form={form} placeholder={"Title"} />
            <Input name={"pages"} form={form} placeholder={"Pages"} />
            <Input name={"year"} form={form} placeholder={"Year"} />
            <Input name={"price"} form={form} placeholder={"Price"} />
            <Input name={"country"} form={form} placeholder={"Country"} />
            <Input name={"author"} form={form} placeholder={"Author"} />
            <Input
              name={"description"}
              form={form}
              placeholder={"Description"}
              className={"py-8"}
            />
            <Button type={"submit"}>Create</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
