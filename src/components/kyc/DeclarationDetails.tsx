import ToggleButton from "../base/ToogleButton";
import { DECLARTION_LIST } from "@/constants/common.js";
// interface DectaDetailsProps {
//   labelText: string;
//   labelStyle?: string;
// }

const DeclarationDetails = () => {
  return (
    <>
      {DECLARTION_LIST.map(({ id, title }) => (
        <div className="flex justify-between items-center" key={id}>
          <label className={`text-primary-100`}>{title}</label>
          <ToggleButton />
        </div>
      ))}
    </>
  );
};

export default DeclarationDetails;
