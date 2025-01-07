import Image from "next/image";
import { Inter } from "next/font/google";

import { useState } from "react";
import Header from "@/components/Header";
import PersonalDetails from "@/components/kyc/PersonalDetails";
import { MARITAL_STATUS_LIST } from "@/constants/common";
import UploadDocuments from "@/components/kyc/UploadDocuments";
import DeclarationDetails from "@/components/kyc/DeclarationDetails";
import Button from "@/components/base/Button";
import FormHeader from "@/components/kyc/FormHeader";
import KycDetails from "@/components/kyc/KycDetails";

const inter = Inter({ subsets: ["latin"] });
// {
//   heading:"",
//   subHeading:"",
//   description:"",
//   maritalStatus:"",
//   fatherName:"",
//   motherName:"",
//   email:"",
//   income:""
// },
const KYC_STEPS = [
  {
    id: 1,
    component: <PersonalDetails />,
    heading: "Personal Details",
    subHeading: "Personal Details",
    description: "These details are require to complete your KYC verification.",
  },
  {
    id: 2,
    component: <UploadDocuments />,
    heading: "Documents",
    subHeading: "Upload Documents",
    description:
      "These documents are require to complete your KYC verification.",
  },
  {
    id: 3,
    component: <DeclarationDetails />,
    heading: "FATCA Declaration",
    subHeading: "Declaration",
    description: "Declare your FATCA details.",
  },
  {
    id: 4,
    component: <KycDetails />,
    heading: "KYC Details",
    subHeading: "Confirm Details.",
    description: "Read below details carefully,they can not be changed later.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string>(
    MARITAL_STATUS_LIST[0].value
  );

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <main className="min-h-screen relative bg-gray-150">
      <Header />

      <section className="bg-white w-full min-h-screen max-w-[500px] mx-auto">
        <div className="border-t-4 border-gray-100 mt-16">
          <div className="p-4 flex flex-col gap-4">
            <FormHeader
              heading={KYC_STEPS[currentIndex].heading}
              subheading={KYC_STEPS[currentIndex].subHeading}
              description={KYC_STEPS[currentIndex].description}
            />
            {KYC_STEPS[currentIndex].component}
            <Button
              btnText="Next"
              onBtnClick={() => setCurrentIndex((prev) => prev + 1)}
              btnStyle="text-white"
            />
            <Button
              btnText="Skip For Now"
              onBtnClick={() => null}
              btnStyle="text-gray-150 bg-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
