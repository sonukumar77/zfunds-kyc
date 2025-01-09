import RadioInput from "../base/RadioInput";
import {
  MARITAL_STATUS_LIST,
  INCOME_LIST,
  EMAIL_SUBDOMAINS,
} from "../../constants/common.js";
import InputBox from "../base/InputBox";
import Button from "../base/Button";
import { INITIAL_KYC_DATA_Props } from "@/models/kyc";
import React, { useState } from "react";

interface PersonalDetailsProps {
  inputData: INITIAL_KYC_DATA_Props | null;
  handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setInputData: React.Dispatch<
    React.SetStateAction<INITIAL_KYC_DATA_Props | null>
  >;
}

const PersonalDetails = ({
  inputData,
  handleInputs,
  setInputData,
}: PersonalDetailsProps) => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  const handleDomain = (domain: string, index: number) => {
    setCurrentDomainIndex(index);
    if (!inputData || !inputData?.email) {
      return;
    }
    const currentEmail = inputData?.email;
    const baseEmail = currentEmail.split("@")[0];
    const completeEmail = baseEmail.concat(domain);

    setInputData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        email: completeEmail,
        maritalStatus: prev.maritalStatus || "",
        fatherName: prev.fatherName || "",
        motherName: prev.motherName || "",
        income: prev.income || "",
        isIndianCitizen: prev.isIndianCitizen ?? false,
        isIndianTaxResident: prev.isIndianTaxResident ?? false,
        isNotPoliticallyExpose: prev.isNotPoliticallyExpose ?? false,
        panImage: prev.panImage || "",
        signImage: prev.signImage || "",
      };
    });
  };

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
              onBtnClick={() => handleDomain(domain, i)}
              btnStyle={`p-1 border-primary-100 p-0 rounded-lg bg-primary-100 ${
                currentDomainIndex === i
                  ? "bg-primary-100 text-white"
                  : "bg-white border text-primary-100"
              }`}
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
