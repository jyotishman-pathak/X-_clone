import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
      <div className="border-8 border-white border-opacity-20 rounded-full w-20 h-20 animate-spin"></div>
      <img src="twitter-logo.png" alt="Twitter Logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-auto" />
    </div>
  );
};

export default Loader;
