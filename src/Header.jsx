import logo from "./assets/images/logo.png";
import cart from "./assets/images/cart.png";
const Header = () => {
  return (
    <div className="flex items-center px-40 py-8">
      <img src={logo} className="w-40" />
      <div className="HeaderPage flex flex-1 justify-center space-x-5">
        <div className="text-white text-center">Home</div>
        <div className="text-white text-center">About</div>
        <div className="text-white text-center">Features</div>
        <div className="text-white text-center">Contact</div>
      </div>
      <img src={cart} alt="" className="w-8" />
    </div>
  );
};

export default Header;
