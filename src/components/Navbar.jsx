import { Link } from "react-router-dom";
import rentalLogo from "../assets/rental-logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#FBFAFF] border-y-2 shadow-md">
      <Link to="/" className="flex items-center">
        <img src={rentalLogo} alt="" className="h-[80px]" />
        <p className="text-xl font-semibold">RentEase</p>
      </Link>

      <div className="flex gap-5 px-10">
        <button className="border-slate-100 shadow-lg  rounded-lg px-2 h-[35px] w-[100px] lg:block sm:hidden">
          Login
        </button>
        <button className="border-slate-100 shadow-lg rounded-lg px-2 h-[35px] w-[100px] lg:block sm:hidden">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
