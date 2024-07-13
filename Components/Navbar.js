import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className="ml-30 bg-white shadow-xl px-8 py-2 text-gray-500 flex items-center justify-between">
      <div className="flex items-center space-x-10 md:space-x-20">
        <h1 className="font-bold md:text-lg">Payments</h1>
        <h3 className="font-semibold md:text-lg">! How it works</h3>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8 ml-10 md:ml-0">
        <input
          type="text"
          placeholder="Search here"
          className="hidden md:block rounded-md w-60 bg-white border-sky-100 px-2 py-1"
        />
        <div className="flex items-center">
          <TextsmsIcon />
          <ArrowDropDownIcon className="ml-2 md:ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
