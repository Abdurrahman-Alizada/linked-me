import logo from "../../../assets/Biogram.png";
import { Button } from "../../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img src={logo} alt="Biogram Logo" className="w-40 md:w-48" />
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <Button className="bg-transparent border border-black text-black font-[Poppins] font-norm text-lg leading-[20px] tracking-normal font-poppins w-[108px] h-[48px] rounded-2xl px-4 py-2 hover:bg-transparent focus:outline-none focus:ring-0">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-base md:text-xl w-[140px] md:w-[168px] h-[44px] md:h-[48px] rounded-2xl hover:from-orange-600 hover:to-pink-600 transition duration-200">
              Signup Free
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Button className="bg-transparent border border-black text-black font-poppins text-base w-full h-12 rounded-2xl hover:bg-black hover:text-white transition duration-200">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-base w-full h-12 rounded-2xl hover:from-orange-600 hover:to-pink-600 transition duration-200">
              Signup Free
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
