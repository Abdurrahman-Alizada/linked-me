import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/Biogramlogo2.png";
const Signup = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 relative flex flex-col items-center px-4 pt-5">
      {/* Top bar: Biogram left + Start Now right */}
      <div className="w-full flex justify-between items-center px-4 sm:px-6">
  <Link to="/">
    <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12" />
  </Link>
  <Link to="/signup">
    <Button className="bg-white hover:bg-white/90 text-orange-500 font-medium py-1.5 px-4 rounded-md text-sm">
      Start Now
    </Button>
  </Link>
</div>

      {/* Main content container */}
      <div className="text-center px-4 ">
  <h2 className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white">
    Apply to start
  </h2>
  <h3 className="text-xl sm:text-3xl lg:text-6xl font-bold text-white mt-2">
    Advertising on Biogram
  </h3>
  <p className="text-white/90 text-sm sm:text-base max-w-[800px] mx-auto mt-2">
    Due to high demand, Biogram ads is now an exclusive, invitation-only program.
    If your business meets our select criteria, our team will directly contact you
    with further instructions. We value your interest and anticipate a potential partnership.
  </p>
</div>


        {/* Form */}
        <form className="space-y-1 w-[80%] px-4 mt-3 ">
          <input
            type="text"
            placeholder="Name"
            className=" w-full p-1.5 rounded-md bg-white/20 text-white placeholder-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-1.5 rounded-md bg-white/20 text-white placeholder-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-1.5 rounded-md bg-white/20 text-white placeholder-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-1.5 rounded-md bg-white/20 text-white placeholder-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <select
            className="w-full p-1.5 rounded-md bg-white/20 text-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
            defaultValue="Country"
          >
            <option className="text-black" value="Country">Country</option>
            <option className="text-black" value="us">United States</option>
            <option className="text-black" value="uk">United Kingdom</option>
            <option className="text-black" value="ca">Canada</option>
          </select>
          <select
            className="w-full p-1.5 rounded-md bg-white/20 text-white/70 border-none focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
            defaultValue="Monthly Ad Budget"
          >
            <option className="text-black" value="Monthly Ad Budget">Monthly Ad Budget</option>
            <option className="text-black" value="1000">$1,000 - $5,000</option>
            <option className="text-black" value="5000">$5,000 - $10,000</option>
            <option className="text-black" value="10000">$10,000+</option>
          </select>

          <div className="pt-1.5">
            <Button className="w-full bg-white hover:bg-white/90 text-orange-500 font-medium py-1.5 rounded-md">
              Get Started
            </Button>
          </div>
        </form>
      </div>
    
  );
};

export default Signup;
