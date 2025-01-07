import { SVGProps } from "react";

interface CaretLeftIconProps {
  svgProps?: SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}

const CaretLeftIcon = ({ svgProps, pathProps }: CaretLeftIconProps) => {
  return (
    <svg width="800" height="800" viewBox="0 0 24 24" {...svgProps}>
      <path
        d="m14 8-4 4 4 4"
        stroke="#200E32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default CaretLeftIcon;
