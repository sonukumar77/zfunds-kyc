import ToggleButton from "../base/ToogleButton";
import { DECLARTION_LIST } from "@/constants/common.js";

export interface DectaDetailsProps {
  inputData: string;
  handleInputs: () => void;
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
