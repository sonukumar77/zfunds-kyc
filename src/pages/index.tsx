import { useState } from "react";
import Header from "@/components/Header";
import PersonalDetails from "@/components/kyc/PersonalDetails";
import UploadDocuments from "@/components/kyc/UploadDocuments";
import DeclarationDetails from "@/components/kyc/DeclarationDetails";
import Button from "@/components/base/Button";
import FormHeader from "@/components/kyc/FormHeader";
import KycDetails from "@/components/kyc/KycDetails";

export interface INITIAL_KYC_DATA {
  maritalStatus: string;
  fatherName: string;
  motherName: string;
  email: string;
  income: string;
  isIndianCitizen: boolean;
  isIndianTaxResident: boolean;
  isNotPoliticallyExpose: boolean;
  panImage: string;
  signImage: string;
}

const INITIAL_KYC_DATA = {
  maritalStatus: "",
  fatherName: "",
  motherName: "",
  email: "",
  income: "",
  isIndianCitizen: false,
  isIndianTaxResident: false,
  isNotPoliticallyExpose: false,
  panImage: "",
  signImage: "",
};

export default function Home() {
  const [inputData, setInputData] = useState<INITIAL_KYC_DATA | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!inputData) return;

    setInputData((prev) =>
      prev ? { ...prev, [name]: value } : INITIAL_KYC_DATA
    );
  };

  const KYC_STEPS = [
    {
      id: 1,
      component: (
        <PersonalDetails inputData={inputData} handleInputs={handleInputs} />
      ),
      heading: "Personal Details",
      subHeading: "Personal Details",
      description:
        "These details are require to complete your KYC verification.",
    },
    {
      id: 2,
      component: (
        <UploadDocuments inputData={inputData} handleInputs={handleInputs} />
      ),
      heading: "Documents",
      subHeading: "Upload Documents",
      description:
        "These documents are require to complete your KYC verification.",
    },
    {
      id: 3,
      component: (
        <DeclarationDetails inputData={inputData} handleInputs={handleInputs} />
      ),
      heading: "FATCA Declaration",
      subHeading: "Declaration",
      description: "Declare your FATCA details.",
    },
    {
      id: 4,
      component: <KycDetails inputData={inputData} />,
      heading: "KYC Details",
      subHeading: "Confirm Details.",
      description:
        "Read below details carefully,they can not be changed later.",
    },
  ];

  // Form Submission
  const handleSubmit = () => {
    // Write code to save data in db and images on s3 bucket
    alert("Data Submitted SuccessFully");
  };

  return (
    <main className="min-h-screen relative bg-gray-150">
      <Header />

      <section
        className={`bg-white w-full min-h-screen max-w-[500px] mx-auto ${
          !inputData ? "flex justify-center items-center" : ""
        }`}
      >
        <div className="border-t-4 border-gray-100 mt-16">
          {inputData ? (
            <>
              <div className="p-4 flex flex-col gap-4">
                <FormHeader
                  heading={KYC_STEPS[currentIndex].heading}
                  subheading={KYC_STEPS[currentIndex].subHeading}
                  description={KYC_STEPS[currentIndex].description}
                />
                {KYC_STEPS[currentIndex]?.component}

                {currentIndex < KYC_STEPS.length - 1 ? (
                  <Button
                    btnText="Next"
                    onBtnClick={() => setCurrentIndex((prev) => prev + 1)}
                    btnStyle="text-white"
                  />
                ) : (
                  <Button
                    btnText="Submit"
                    onBtnClick={handleSubmit}
                    btnStyle="text-white"
                  />
                )}

                <Button
                  btnText="Skip For Now"
                  onBtnClick={() => null}
                  btnStyle="text-gray-150 bg-white"
                />
              </div>
            </>
          ) : (
            <Button
              btnText="Complete KYC"
              onBtnClick={() => setInputData(INITIAL_KYC_DATA)}
              btnStyle="text-white border-0"
            />
          )}
        </div>
      </section>
    </main>
  );
}
