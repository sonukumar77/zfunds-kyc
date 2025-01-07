interface ButtonProps {
  btnText: string;
  btnStyle?: string;
  isDisabled?: boolean;
  onBtnClick: () => void;
}

const Button = ({
  btnText,
  btnStyle,
  onBtnClick,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`bg-primary-100 text-white px-4 py-2 rounded-md cursor-pointer font-bold ${
        isDisabled ? "bg-primary-10" : ""
      } ${btnStyle}`}
      disabled={isDisabled}
      onClick={onBtnClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
