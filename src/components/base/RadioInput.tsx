interface RadioInput {
  radioList: string[];
  selected: string;
  radioContainerStyle?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({
  radioList,
  selected,
  onChange,
  radioContainerStyle,
}: RadioInput) => {
  return (
    <div className={`flex justify-start gap-2 ${radioContainerStyle}`}>
      {radioList.map((radio, index) => {
        return (
          <span key={index} className="flex gap-2">
            <input
              type="radio"
              value={radio}
              onChange={onChange}
              checked={selected === radio}
            />
            <label className="text-center">{radio}</label>
          </span>
        );
      })}
    </div>
  );
};

export default RadioInput;
