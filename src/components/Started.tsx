import { Button } from "./ui/button";
import Dashboard from "./Dashboard";
import DropDown from "./DropDown";
import bground from "../assets/Rectangle67.png";
import LogoStartNow from "./LogoStartNow";
// this is the started page
const Started = () => {
  return (
    <div className="relative min-h-screen bg-white xl:h-screen xl:overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src={bground} alt="background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <LogoStartNow />
        <div className="container mx-auto pt-[60px] pb-20 xl:pb-0 xl:h-full">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between px-4 xl:px-16">
            <div className="w-full xl:w-[500px] xl:ml-36 pt-8 xl:pt-16 text-center xl:text-left px-4 xl:px-0">
              <h1 className="text-[40px] xl:text-[56px] font-bold leading-[1.1] text-black">
                Reach Millions. <br />
                Your <span className="text-red-500">Business</span>, <br />
                Our Platform.
              </h1>
              <p className="mt-6 text-gray-600 text-base xl:text-lg max-w-[600px] mx-auto xl:mx-0">
                Over 200 million people have a Biogram profile. Unlock your business's potential with
                Biogram cutting-edge marketing tools and ad solutions, designed to elevate your business.
              </p>
              <Button className="mt-8 bg-gradient-to-r from-orange-400 to-red-500 text-white text-lg px-8 py-2.5 rounded-lg">
                Get Started
              </Button>
            </div>

            <div className="relative w-full xl:w-[520px] mt-12 xl:mt-0 px-4 xl:px-0">
              <Dashboard />
              <div className="absolute bottom-[-10px] right-0">
                {/* <Button variant="outline" className="text-orange-500 border-orange-500 px-4 py-2 flex items-center gap-1">
                  For Business
                  <ChevronDown className="h-4 w-4" />
                </Button> */}
                <div className="absolute top-full right-0 mt-1">
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;