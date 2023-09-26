// InputField.js

import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  as?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  name,
  label,
  placeholder,
  as,
}) => {
  return (
    <div className="relative mb-4 h-full">
      <Field
        type="text"
        as={as}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-[#fff] flex w-full h-full focus:outline-none text-[#ADADAD] rounded-[10px] py-[10px] px-[20px]"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputBox;
