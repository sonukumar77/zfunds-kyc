interface FormHeaderProps {
  heading: string;
  description: string;
  subheading: string;
}

const FormHeader = ({ heading, description, subheading }: FormHeaderProps) => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary-100  relative">
          {heading}
          <div className="absolute bottom-0 w-10 border-b-2 border-green-100"></div>
        </h1>
        <p className="text-sm my-4 font-normal">{description}</p>
      </div>
      <h2 className="text-xl bg-secondary p-4">{subheading}</h2>
    </>
  );
};

export default FormHeader;
