import { forwardRef, Ref, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const BackArrowIcon = (props: Props, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BackArrowIcon;
