import { ReactNode } from "react";
import PencilIcon from "../icons/PencilIcon";
import { IS_EDIT_OPEN } from "@/constants/common";

interface CardProps {
  cardHeaderTitle: string;
  editIndex?: number;
  handleEdit?: (index: number) => void;
  children?: ReactNode;
}

const Card = ({
  children,
  cardHeaderTitle,
  handleEdit,
  editIndex,
}: CardProps) => {
  const isEditable =
    typeof editIndex === "number" && handleEdit && IS_EDIT_OPEN;

  return (
    <div className="border-2 border-gray-100 rounded-xl">
      {/* card header */}
      <div className="flex justify-between items-center p-4">
        <label className="text-primary-100">{cardHeaderTitle}</label>
        {isEditable && (
          <div
            className="text-green-100 flex cursor-pointer"
            onClick={() => handleEdit(editIndex)}
          >
            <span>Edit</span>
            <PencilIcon
              svgProps={{
                width: 24,
                height: 24,
              }}
              pathProps={{ fill: "#03A87C" }}
            />
          </div>
        )}
      </div>
      {/* card body */}
      {children}
    </div>
  );
};

export default Card;
