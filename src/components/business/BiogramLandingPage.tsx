import manimage from "../../assets/Group1.png";
import { Button } from "../ui/button";
import banner from "../../assets/Group2.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const BiogramLandingPage = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "100%",
        backgroundPosition: "center 5rem",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-[60%]">
        <h1 className="font-poppins font-extrabold text-[40px] sm:text-[60px] md:text-[130px] leading-tight tracking-tight text-black w-full md:w-[821px]">
          Your World, In one link.
        </h1>
        <p className="font-[Poppins] font-medium text-[20px] leading-[20px] tracking-normal text-black max-w-[670px]">
          Biogram puts your entire digital world in one smart link. From socials
          to stores, content to contact — bring everything together in one
          sleek, shareable place. One link. Zero limits.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 border border-gray-300 rounded-[46px] px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 w-full md:w-[655px]">
          <input
            type="text"
            placeholder="Biogram/Your name"
            className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none w-full sm:w-auto py-3"
          />
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-lg px-6 py-3 rounded-full font-poppins w-full sm:w-auto hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-300 h-[60px]">
            Signup Free
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[40%] mt-10 md:mt-0 flex justify-center">
        <img
          src={manimage}
          alt="Biogram image"
          className="w-[250px] sm:w-[400px] md:w-[600px] lg:w-[719px] h-auto"
        />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute bottom-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-lg border flex items-center justify-between gap-2"
              style={{
                background:
                  "linear-gradient(97.29deg, rgba(255, 98, 0, 0.8) 13.65%, rgba(255, 0, 238, 0.8) 90.87%)",
                borderWidth: "1px",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                color: "white",
              }}
            >
              For People
              <ChevronDownIcon className="w-5 h-5 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>For People</DropdownMenuItem>
            <DropdownMenuItem>For Business</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default BiogramLandingPage;
