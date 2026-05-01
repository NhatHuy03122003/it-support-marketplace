import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-3 bg-white max-sm:px-5 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">TechSupport</h1>
      <nav className="flex gap-8 items-center max-md:hidden">
        <a href="#" className="text-sm text-gray-500 cursor-pointer">
          Marketplace
        </a>
        <a href="#" className="text-sm text-gray-500 cursor-pointer">
          Services
        </a>
        <a href="#" className="text-sm text-gray-500 cursor-pointer">
          Enterprise
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        <a href="#" className="text-sm text-gray-500 cursor-pointer">
          Log In
        </a>
        <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer">
          Register
        </button>
        <i className="ti ti-menu-2 hidden text-2xl text-gray-900 cursor-pointer max-md:block" />
      </div>
    </header>
  );
};
