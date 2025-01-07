import { MaritalStatusProps } from "@/models/kyc";

interface RadioInput {
  radioList: MaritalStatusProps[];
  selected: string;
  radioContainerStyle?: string;
  labelText?: string;
  labelStyle?: string;
  radioOptionStyle?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({
  radioList,
  selected,
  labelStyle = "",
  labelText,
  onChange,
  radioContainerStyle = "",
  radioOptionStyle = "",
}: RadioInput) => {
  return (
    <div className={`flex flex-col gap-2 ${radioContainerStyle}`}>
      {labelText && (
        <label className={`text-primary-100 ${labelStyle}`}>{labelText}</label>
      )}
      <div className={`flex gap-2 ${radioOptionStyle}`}>
        {radioList.map(({ value, label }, index) => {
          return (
            <span key={index} className="flex gap-2">
              <input
                type="radio"
                value={value}
                onChange={onChange}
                checked={selected === value}
                className="cursor-pointer"
                id={`${value}${index}`}
              />
              <label
                className="text-center cursor-pointer"
                htmlFor={`${value}${index}`}
              >
                {label}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
