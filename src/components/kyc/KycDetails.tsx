import { useState } from "react";
import { FAKE_USER_DATA, INITIAL_KYC_DATA } from "@/constants/common";
import { ImagePlaceholder } from "./UploadDocuments";
import { findIncomeLabel } from "@/utils/kycData";
import Card from "../base/Card";
import RowData from "../base/RowData";
import { INITIAL_KYC_DATA_Props } from "@/models/kyc";

interface KycDetailsProps {
  inputData: INITIAL_KYC_DATA_Props | null;
  handleEdit: (index: number) => void;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RowProps {
  title: string;
  value: string;
}

interface ListProps {
  arrList: RowProps[];
}

const List = ({ arrList }: ListProps) => {
  return (
    <>
      {arrList.map((items, i) => (
        <RowData key={i} {...items} />
      ))}
    </>
  );
};

const KycDetails = ({
  inputData,
  handleEdit,
  isChecked,
  setIsChecked,
}: KycDetailsProps) => {
  if (!inputData) {
    return <div>Loading...</div>;
  }

  const {
    maritalStatus,
    fatherName,
    motherName,
    email,
    income,
    panImage,
    signImage,
  } = inputData;

  return (
    <div className="space-y-4">
      <Card cardHeaderTitle="User Details">
        <List arrList={FAKE_USER_DATA.userDetails} />
        <div className="bg-secondary p-4">
          <p className="text-sm">
            <span className="text-lg">Note:</span> You can not edit above
            details as they are already verified through Digilocker.
          </p>
        </div>
      </Card>
      <Card cardHeaderTitle="Personal Details">
        <div className="pb-2">
          <List arrList={FAKE_USER_DATA.personalDetails} />
        </div>
      </Card>
      <Card cardHeaderTitle="KYC Details" handleEdit={handleEdit} editIndex={0}>
        <RowData title="Email" value={email} />
        <div className="flex justify-between">
          <RowData title="Marital Status" value={maritalStatus} />
          <RowData title="Annual Income" value={findIncomeLabel(income)} />
        </div>
        <div className="flex justify-between pb-2">
          <RowData title="Father's Name" value={fatherName} />
          <RowData title="Mother's Name" value={motherName} />
        </div>
      </Card>
      <Card cardHeaderTitle="Documents" handleEdit={handleEdit} editIndex={1}>
        <div className="py-2 flex justify-between items-center p-2">
          <div className="flex justify-center items-center flex-col gap-2">
            <p>Photo</p>
            <ImagePlaceholder
              imageUrl={FAKE_USER_DATA.DocumentDetails[0].value}
              altText="User Photo"
              containerStyle="m-0"
            />
          </div>
          {panImage && (
            <div className="flex justify-center items-center flex-col gap-2">
              <p>PAN</p>
              <ImagePlaceholder
                imageUrl={panImage}
                altText="Pan Image"
                containerStyle="m-0"
              />
            </div>
          )}
          {signImage && (
            <div className="flex justify-center items-center flex-col gap-2">
              <p>Signature</p>
              <ImagePlaceholder
                imageUrl={signImage}
                altText="Sign Image"
                containerStyle="m-0"
              />
            </div>
          )}
        </div>
      </Card>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 cheecked:bg-green-100 cursor-pointer"
          checked={isChecked}
          onChange={() => setIsChecked((prev: boolean) => !prev)}
        />
        <label htmlFor="" className="text-primary-10 ml-2">
          I agree to the
          <span className="text-primary-100 text-bold">
            Terrm and Condition
          </span>
        </label>
      </div>
    </div>
  );
};

export default KycDetails;
