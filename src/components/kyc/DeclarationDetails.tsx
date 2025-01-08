import { INITIAL_KYC_DATA_Props } from "@/models/kyc";
import ToggleButton from "../base/ToogleButton";
import { DECLARTION_LIST } from "@/constants/data";
import React from "react";

export interface DectaDetailsProps {
  inputData: INITIAL_KYC_DATA_Props | null;
  handleInputs: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string | boolean } }
  ) => void;
}

const DeclarationDetails = ({ inputData, handleInputs }: DectaDetailsProps) => {
  if (!inputData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {DECLARTION_LIST.map(({ id, title, name }) => (
        <div className="flex justify-between items-center" key={id}>
          <label className={`text-primary-100`}>{title}</label>
          <ToggleButton
            inputData={inputData}
            handleInputs={handleInputs}
            name={name}
          />
        </div>
      ))}
    </>
  );
};

export default DeclarationDetails;
