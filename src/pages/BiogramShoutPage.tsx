import React from 'react';
import { ChevronDown } from 'lucide-react';

// Phone component that shows the user profile
const PhoneDisplay: React.FC = () => {
  return (
    <div className="relative mx-auto w-64 h-128 md:w-72 md:h-144">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
        
        {/* Phone content */}
        <div className="relative h-full bg-gray-100 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
          
          {/* Profile content */}
          <div className="absolute inset-0 flex flex-col">
            {/* User image */}
            <div className="flex-grow flex items-center justify-center">
              <img 
                src="/api/placeholder/300/400" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* User info overlay at bottom */}
            <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
              <h2 className="text-white text-3xl font-bold">Max James</h2>
              <p className="text-white/80 text-sm mb-4">@ Maxjames23.com</p>
              
              {/* Social icons */}
              <div className="flex space-x-2 mb-4">
                <button className="bg-blue-600 p-2 rounded-full">
                  <div className="w-5 h-5 bg-white mask-image-facebook"></div>
                </button>
                <button className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 p-2 rounded-full">
                  <div className="w-5 h-5 bg-white mask-image-instagram"></div>
                </button>
                <button className="bg-blue-400 p-2 rounded-full">
                  <div className="w-5 h-5 bg-white mask-image-twitter"></div>
                </button>
                <button className="bg-black p-2 rounded-full">
                  <div className="w-5 h-5 bg-white mask-image-tiktok"></div>
                </button>
                <button className="bg-green-500 p-2 rounded-full">
                  <div className="w-5 h-5 bg-white mask-image-whatsapp"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats component showing profile views
const StatsCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl p-4 shadow-lg max-w-xs">
      <div className="flex flex-col h-full justify-between">
        <h3 className="text-4xl font-bold text-gray-800">8.5M</h3>
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-medium">Profile View</p>
          <div className="bg-green-500 text-white text-xs w-16 px-2 py-1 rounded-full flex items-center justify-center">
            <span>↑ 40%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Introduction text card component
const IntroCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl p-4 shadow-lg max-w-xs">
      <p className="text-gray-800 text-sm">
        Introducing Shouts. Helping you share, amplify, and grow. Your audience is waiting on Biogram. When a Shout resonates, others can give it a Shoutout, helping you reached even more people worldwide.
      </p>
    </div>
  );
};

// Music player component
const MusicPlayer: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-200 to-pink-100 rounded-xl p-4 shadow-lg max-w-md">
      <div className="flex items-center gap-3 mb-4">
        <img src="/api/placeholder/48/48" alt="Album Art" className="w-12 h-12 rounded-md" />
        <div>
          <h3 className="font-bold text-xl text-gray-800">Planet Her</h3>
          <p className="text-gray-700 text-sm">Doja Cat</p>
        </div>
        <div className="ml-auto bg-pink-500 rounded-full p-2">
          <div className="w-5 h-5 bg-white mask-image-music"></div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-white/50 rounded-full mb-2 relative">
        <div className="absolute left-0 top-0 h-full w-1/4 bg-pink-500 rounded-full"></div>
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>
      
      {/* Time */}
      <div className="flex justify-between text-xs text-gray-700">
        <span>52:25</span>
        <span>02:52:25</span>
      </div>
    </div>
  );
};

// Signup input component
const SignupInput: React.FC = () => {
  return (
    <div className="flex w-full max-w-md">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Biogram/your name"
          className="w-full h-12 pl-4 pr-32 rounded-full bg-gradient-to-r from-orange-200 to-pink-100 border-none focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
        />
        <button className="absolute right-0 top-0 h-full px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-full">
          Signup Free
        </button>
      </div>
    </div>
  );
};

// Dropdown button component
const DropdownButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg">
      <span>For Peoples</span>
      <ChevronDown size={16} />
    </button>
  );
};

// Main Biogram Shout Page Component
const BiogramShoutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-pink-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="relative">
              <IntroCard />
              <div className="absolute -bottom-4 -right-4 z-20">
                <StatsCard />
              </div>
            </div>
            <div className="relative mt-8 flex justify-center">
              <PhoneDisplay />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Post your Contant directly on Biogram.
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Introducing Shouts. Helping you share, amplify, and grow. Your audience is waiting on Biogram. When a Shout resonates, others can give it a Shoutout, helping you reached even more people worldwide.
              </p>
              <SignupInput />
            </div>
            
            <div>
              <MusicPlayer />
            </div>
            
            <div className="flex justify-end">
              <DropdownButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiogramShoutPage;