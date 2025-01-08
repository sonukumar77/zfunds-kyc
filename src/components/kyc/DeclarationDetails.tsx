import { INITIAL_KYC_DATA_Props } from "@/models/kyc";
import ToggleButton from "../base/ToogleButton";
import { DECLARTION_LIST } from "@/constants/common.js";

export interface DectaDetailsProps {
  inputData: INITIAL_KYC_DATA_Props;
  handleInputs: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: boolean } }
  ) => void;
}

const DeclarationDetails = (props: DectaDetailsProps) => {
  return (
    <>
      {DECLARTION_LIST.map(({ id, title, name }) => (
        <div className="flex justify-between items-center" key={id}>
          <label className={`text-primary-100`}>{title}</label>
          <ToggleButton {...props} name={name} />
        </div>
      ))}
    </>
  );
};

export default DeclarationDetails;
