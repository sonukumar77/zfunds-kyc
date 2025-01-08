import RadioInput from "../base/RadioInput";
import {
  MARITAL_STATUS_LIST,
  INCOME_LIST,
  EMAIL_SUBDOMAINS,
} from "../../constants/common.js";
import InputBox from "../base/InputBox";
import Button from "../base/Button";
import { INITIAL_KYC_DATA_Props } from "@/models/kyc";
import React from "react";

interface PersonalDetailsProps {
  inputData: INITIAL_KYC_DATA_Props | null;
  handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDetails = ({ inputData, handleInputs }: PersonalDetailsProps) => {
  if (!inputData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <RadioInput
        radioList={MARITAL_STATUS_LIST}
        selected={inputData.maritalStatus}
        onChange={handleInputs}
        labelText="Maritial Status"
        name="maritalStatus"
      />
      <InputBox
        inputType="text"
        labelText="Father's Name"
        onInputChange={handleInputs}
        placeholder="Enter Father's name here"
        name="fatherName"
        initialValue={inputData.fatherName}
      />
      <InputBox
        inputType="text"
        labelText="Mothers's Name"
        onInputChange={handleInputs}
        placeholder="Enter Mother's name here"
        name="motherName"
        initialValue={inputData.motherName}
      />
      <InputBox
        inputType="email"
        labelText="Email"
        onInputChange={handleInputs}
        placeholder="|@gmail.com"
        inputStyle="placeholder:text-primary-100"
        name="email"
        initialValue={inputData.email}
      >
        <small className="text-gray-150">
          you will recieve portfolio statements on this email id
        </small>
        <div className="flex gap-2 flex-wrap my-4">
          {EMAIL_SUBDOMAINS.map((domain, i) => (
            <Button
              btnText={domain}
              key={i}
              onBtnClick={() => null}
              btnStyle="p-1 bg-white border border-primary-100 text-primary-100 p-0 rounded-lg"
            />
          ))}
        </div>
      </InputBox>
      <RadioInput
        radioList={INCOME_LIST}
        selected={inputData.income}
        onChange={handleInputs}
        labelText="Maritial Status"
        radioOptionStyle="flex-col"
        name="income"
      />
    </>
  );
};

export default PersonalDetails;
