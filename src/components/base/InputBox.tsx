import React, { ReactNode } from "react";

interface InputBoxProps {
  name?: string;
  initialValue?: string;
  inputType: string;
  labelText?: string;
  placeholder?: string;
  inputStyle?: string;
  inputContainerStyle?: string;
  labelStyle?: string;
  children?: ReactNode;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  name,
  initialValue,
  inputType,
  labelText,
  placeholder,
  onInputChange,
  inputStyle = "",
  inputContainerStyle = "",
  labelStyle = "",
  children,
}: InputBoxProps) => {
  return (
    <div className={`flex flex-col ${inputContainerStyle}`}>
      {labelText && (
        <label className={`text-primary-100 ${labelStyle}`}>{labelText}</label>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        value={initialValue}
        className={`border border-gray-150 rounded my-2 p-2 text-lg font-semibold placeholder:font-normal placeholder:text-gray-100 ${inputStyle}`}
      />
      {children}
    </div>
  );
};

export default InputBox;
