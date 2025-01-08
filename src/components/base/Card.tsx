import { ReactNode } from "react";
import PencilIcon from "../icons/PencilIcon";

interface CardProps {
  cardHeaderTitle: string;
  children?: ReactNode;
}

const Card = ({ children, cardHeaderTitle }: CardProps) => {
  return (
    <div className="border-2 border-gray-100 rounded-xl">
      {/* card header */}
      <div className="flex justify-between items-center p-4">
        <label className="text-primary-100">{cardHeaderTitle}</label>
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

export default Card;
