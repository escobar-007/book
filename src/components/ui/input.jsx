import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ type, name, placeholder, form, className }) => {
  return (
    <input
      {...form.register(name)}
      placeholder={placeholder}
      className={twMerge(
        "w-full p-[13px_0px_10px_29px] focus:outline-none rounded-[10px] border border-[#B4B4BB]",
        className,
      )}
      type={type}
    />
  );
};

export default Input;
