import RadioInput from "../base/RadioInput";
import {
  MARITAL_STATUS_LIST,
  INCOME_LIST,
  EMAIL_SUBDOMAINS,
} from "../../constants/common.js";
import { useState } from "react";
import InputBox from "../base/InputBox";
import Button from "../base/Button";
import FormHeader from "./FormHeader";
import UploadDocuments from "./UploadDocuments";
import DeclarationDetails from "./DeclarationDetails";

const PersonalDetails = () => {
  const [gender, setGender] = useState<string>(MARITAL_STATUS_LIST[0].value);
  const [income, setIncome] = useState<string>(INCOME_LIST[0].value);

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <>
      <RadioInput
        radioList={MARITAL_STATUS_LIST}
        selected={gender}
        onChange={onRadioChange}
        labelText="Maritial Status"
      />
      <InputBox
        inputType="text"
        labelText="Father's Name"
        onInputChange={() => null}
        placeholder="Enter Father's name here"
      />
      <InputBox
        inputType="text"
        labelText="Mothers's Name"
        onInputChange={() => null}
        placeholder="Enter Mother's name here"
      />
      <InputBox
        inputType="email"
        labelText="Email"
        onInputChange={() => null}
        placeholder="|@gmail.com"
        inputStyle="placeholder:text-primary-100"
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
        selected={income}
        onChange={(e) => setIncome(e.target.value)}
        labelText="Maritial Status"
        radioOptionStyle="flex-col"
      />
    </>
  );
};

export default PersonalDetails;
