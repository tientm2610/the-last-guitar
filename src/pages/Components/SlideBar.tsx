import React from 'react';

function SlideBar() {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed">
      <div className="p-5 text-xl font-semibold border-b border-gray-600">Admin Panel</div>
      <ul className="flex flex-col p-2">
      <a href="/"><li className="block p-3 hover:bg-gray-700">Product Manage</li></a>
      <a href="/users"><li className="block p-3 hover:bg-gray-700">User Manage</li></a>
      <a href="/categories"><li  className="block p-3 hover:bg-gray-700">Category Manage</li></a>
      <a href="/orders"><li className="block p-3 hover:bg-gray-700">Order Manage</li></a>
      </ul>
    </div>
  );
}

export default SlideBar;