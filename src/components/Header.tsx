import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white bg-opacity-70 backdrop-blur-md border-b border-gray-200 border-opacity-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="w-28 md:w-36">
          <img 
            src="/src/assets/Nu10_Logo-removebg-preview.png" 
            alt="Nu10 Logo"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Consent Recorder
        </h1>
        <div className="w-28 md:w-36"></div>
      </div>
    </header>
  );
};

export default Header;