import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const MagnifyingGlass = (props: Props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.88 18.75a7.88 7.88 0 1 0 0-15.75 7.88 7.88 0 0 0 0 15.75ZM16.44 16.44 21 21"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MagnifyingGlass;
