interface RowDataProps {
  title: string;
  value: string;
  containerStyle?: string;
}

const RowData = ({ title, value, containerStyle = "" }: RowDataProps) => {
  return (
    <div className={`px-4 py-1 ${containerStyle}`}>
      <p className="text-gray-100 text-sm font-normal">{title}</p>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default RowData;
