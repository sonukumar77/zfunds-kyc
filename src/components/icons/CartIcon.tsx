import { SVGProps } from "react";

interface CartIconProps {
  svgProps?: SVGProps<SVGSVGElement>;
  pathProps?: SVGProps<SVGPathElement>;
}
const CartIcon = ({ svgProps, pathProps }: CartIconProps) => {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M6.3 5H21l-2 7H7.377M20 16H8L6 3H3m6 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default CartIcon;
