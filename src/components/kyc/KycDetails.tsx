import { ReactNode } from "react";
import PencilIcon from "../icons/PencilIcon";
interface CardProps {
  cardHeader?: ReactNode;
  cardFooter?: ReactNode;
  children?: ReactNode;
}

const Card = ({ children, cardFooter, cardHeader }: CardProps) => {
  return (
    <div className="border-2 border-gray-100 rounded-xl">
      {/* card header */}
      <div className="flex justify-between items-center p-4">
        <label className="text-primary-100">User Details.</label>
        <div className="text-green-100 flex ">
          <span>Edit</span>
          <PencilIcon
            svgProps={{
              width: 24,
              height: 24,
              cursor: "pointer",
              fill: "#03A87C",
            }}
          />
        </div>
      </div>
      {/* card body */}
      {children}
    </div>
  );
};

const RowData = () => {
  return (
    <>
      {Array(4)
        .fill(undefined)
        .map((_, i) => (
          <div className="px-4 py-1" key={i}>
            <p className="text-gray-100 text-sm font-normal">Pan Card Number</p>
            <p className="text-lg">Sonu Kumar</p>
          </div>
        ))}
    </>
  );
};

const KycDetails = () => {
  return (
    <div className="space-y-4">
      <Card>
        <RowData />
        <div className="bg-secondary p-4">
          <p className="text-sm">
            <span className="text-lg">Note:</span> You can not edit above
            details as they are already verified through Digilocker.
          </p>
        </div>
      </Card>
      <Card>
        <RowData />
      </Card>
      <div className="flex items-center">
        <input type="checkbox" className="w-4 h-4 cheecked:bg-green-100" />
        <label htmlFor="" className="text-primary-10 ml-2">
          I agree to the
          <span className="text-primary-100 text-bold">
            Terrm and Condition
          </span>
        </label>
      </div>
    </div>
  );
};

export default KycDetails;
