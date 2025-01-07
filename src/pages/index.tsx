import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/base/Button";
import InputBox from "@/components/base/InputBox";
import RadioInput from "@/components/base/RadioInput";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const radioList = ["male", "female"];
export default function Home() {
  const [selected, setSelected] = useState(radioList[0]);

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  console.log(selected);
  return (
    <main>
      <Button btnText="Sonu" onBtnClick={() => null} />
      <InputBox
        inputType="text"
        labelText="Enter Father's Name"
        labelStyle=""
        onInputChange={() => null}
        placeholder="Enter Father's name here"
        inputStyle="placeholder:font-normal placeholder:text-gray-100"
      />
      <div></div>

      <RadioInput
        radioList={radioList}
        selected={selected}
        onChange={onRadioChange}
      />
    </main>
  );
}
