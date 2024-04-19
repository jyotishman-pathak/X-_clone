import React from 'react';
import logo from '../assets/logo-black.png';
import menuItems from '../components/Left/objects/list';
const LeftSidebar = () => {
  return (
    <div className="md:w-[20%] ">
      <div>
        <img className="ml-5 " width={'24px'} src={logo} alt="logo"></img>
      </div>
      <div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center my-3 mr-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <div>{item.icon}</div>
            <h1 className="font-bold text-lg ml-2 hidden lg:block">{item.name}</h1>
          </div>
        ))}
        <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;