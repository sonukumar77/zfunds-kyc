import CaretLeftIcon from "./icons/CaretLeftIcon";
import CartIcon from "./icons/CartIcon";
import MagnifyingGlass from "./icons/MagnifyGlassIcon";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <CaretLeftIcon svgProps={{ width: 32, height: 32 }} />
          <span>Back</span>
        </div>
        <div>ZFunds</div>
        <div className="flex gap-2">
          <MagnifyingGlass className="stroke-current fill-transparent stroke-[1.5] h-6 w-6 cursor-pointer" />
          <CartIcon svgProps={{ width: 24, height: 24, cursor: "pointer" }} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
