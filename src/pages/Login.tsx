import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Input } from "../components/ui/input";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import RightImage from "../assets/image19.png";
import LeftImage from "../assets/image20.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Signup page

  return (
    <div className="min-h-screen">
      <div className="flex items-start justify-between h-screen">
        {/* Left Image - Hidden on md and sm screens */}
        <div className="hidden lg:block w-[400px] h-screen overflow-hidden relative">
          <img
            src={LeftImage}
            alt="Left Profile"
            className="absolute w-[322px] h-[1063px] -top-[21px] left-8"
          />
        </div>

        {/* Center Form - Responsive */}
        <div className="flex-1 px-4 md:px-8 py-6 overflow-y-auto w-full max-w-[900px] mx-auto">
          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-[2px] mb-6">
            <div className="w-[30px]">
              <div className="h-[3px] bg-gradient-to-r from-[#FF6200] via-[#FF00EE] to-[#FF6200]"></div>
            </div>
            <div className="w-[30px]">
              <div className="h-[3px] bg-gradient-to-r from-[#2c23232c]"></div>
            </div>
          </div>

          <div className="rounded-[20px] p-4 md:p-8">
            <div className="text-center mb-8">
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-[16px] text-black mb-1 tracking-wide"
              >
                Welcome to
              </p>
              <h1
                style={{ fontFamily: "Dancing Script" }}
                className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF0676] tracking-wide mb-1"
              >
                Biogram
              </h1>
              <p style={{ fontFamily: "Poppins" }} className="text-black">
                Networking just got an upgrade
              </p>
            </div>

            <Tabs defaultValue="personal" className="w-full">
              <div className="px-2 md:px-6">
                <TabsList className="grid w-full grid-cols-2 p-1 bg-[#F8F8F8] rounded-full mb-8">
                  <TabsTrigger
                    value="personal"
                    className="w-full rounded-full py-3 text-gray-500 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF00EE] data-[state=active]:to-[#FF6200] data-[state=active]:text-white"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="business"
                    className="w-full rounded-full py-3 text-gray-500 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF00EE] data-[state=active]:to-[#FF6200] data-[state=active]:text-white"
                  >
                    Business
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="personal" className="space-y-4">
                <form className="space-y-4">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    autoComplete="email"
                    className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                  />
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      id="birthDay"
                      name="birthDay"
                      placeholder="Day"
                      autoComplete="bday-day"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                    <Input
                      id="birthMonth"
                      name="birthMonth"
                      placeholder="Month"
                      autoComplete="bday-month"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                    <Input
                      id="birthYear"
                      name="birthYear"
                      placeholder="Year"
                      autoComplete="bday-year"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                  </div>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                  />
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 pr-12 focus:border-black focus:ring-black"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOffIcon size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="termsAgreement"
                        name="termsAgreement"
                        className="mt-1 rounded border-gray-300"
                      />
                      <span>
                        By checking the box and signing continue, you
                        acknowledge that you have read the{" "}
                        <span className="text-black font-medium">
                          privacy policy
                        </span>{" "}
                        and agree to the{" "}
                        <span className="text-black font-medium">
                          Terms of service
                        </span>
                      </span>
                    </label>
                  </div>
                  <Link
                    to="/otp"
                    className="block w-full h-[52px] bg-gradient-to-r from-[#FF5C00] to-[#FF0676] text-white rounded-full text-base font-medium text-center leading-[52px] hover:opacity-90"
                  >
                    Continue
                  </Link>
                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#FF0676] hover:underline">
                      Login
                    </a>
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="business" className="space-y-4">
                <form className="space-y-4">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    autoComplete="email"
                    className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                  />
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      id="birthDay"
                      name="birthDay"
                      placeholder="Day"
                      autoComplete="bday-day"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                    <Input
                      id="birthMonth"
                      name="birthMonth"
                      placeholder="Month"
                      autoComplete="bday-month"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                    <Input
                      id="birthYear"
                      name="birthYear"
                      placeholder="Year"
                      autoComplete="bday-year"
                      className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                    />
                  </div>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                  />
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 pr-12 focus:border-black focus:ring-black"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOffIcon size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="termsAgreement"
                        name="termsAgreement"
                        className="mt-1 rounded border-gray-300"
                      />
                      <span>
                        By checking the box and signing continue, you
                        acknowledge that you have read the{" "}
                        <span className="text-black font-medium">
                          privacy policy
                        </span>{" "}
                        and agree to the{" "}
                        <span className="text-black font-medium">
                          Terms of service
                        </span>
                      </span>
                    </label>
                  </div>
                  <Link
                    to="/otp"
                    className="block w-full h-[52px] bg-gradient-to-r from-[#FF5C00] to-[#FF0676] text-white rounded-full text-base font-medium text-center leading-[52px] hover:opacity-90"
                  >
                    Continue
                  </Link>
                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#FF0676] hover:underline">
                      Login
                    </a>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Image - Hidden on md and sm screens */}
        <div className="hidden lg:block w-[400px] h-screen overflow-hidden relative">
          <img
            src={RightImage}
            alt="Right Profile"
            className="absolute w-[322px] h-[1063px] -top-[3px] right-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
