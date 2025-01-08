const ToggleButton = ({ name, inputData, handleInputs }) => {
  const isToggled = inputData[name] || false;

  const toggleButton = () => {
    const inputEvent = {
      target: {
        name: name,
        value: !isToggled,
      },
    };
    handleInputs(inputEvent);
  };

  return (
    <button
      onClick={toggleButton}
      className={`w-14 h-8 flex items-center rounded-full p-1 ${
        isToggled ? "bg-primary-100" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
          isToggled ? "translate-x-6" : "translate-x-0"
        } transition-transform duration-300`}
      />
    </button>
  );
};

export default ToggleButton;
