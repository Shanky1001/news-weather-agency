import { FaSearch } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between my-3">
      <h3 className="flex items-center gap-1 font-bold text-base">
        <span className="p-2 rounded bg-[#121221] text-white">News</span>{" "}
        <span>Portal</span>
      </h3>
      <div className="flex items-center gap-8 text-[#444444] text-xl">
        <FaSearch />
        <MdOutlineLogout />
      </div>
    </nav>
  );
}

export default Navbar;
