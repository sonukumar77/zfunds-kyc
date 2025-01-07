interface InputBoxProps {
  name?: string;
  initialValue?: string;
  inputType: string;
  labelText?: string;
  placeholder?: string;
  inputStyle?: string;
  inputContainerStyle?: string;
  labelStyle?: string;
  onInputChange: () => void;
}

const InputBox = ({
  name,
  initialValue,
  inputType,
  labelText,
  placeholder,
  onInputChange,
  inputStyle,
  inputContainerStyle,
  labelStyle,
}: InputBoxProps) => {
  return (
    <div className={`${inputContainerStyle}`}>
      {labelText && (
        <label className={`text-primary-100 ${labelStyle}`}>{labelText}</label>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        value={initialValue}
        className={`border border-gray-150 rounded-md my-2 p-2 text-lg font-semibold ${inputStyle}`}
      />
    </div>
  );
};

export default InputBox;
