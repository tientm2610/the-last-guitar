import React from 'react';
import { Link } from 'react-router-dom';

function SlideBar() {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed">
      <div className="p-5 text-xl font-semibold border-b border-gray-600">Admin Panel</div>
      <ul className="flex flex-col p-2">
        <li><Link to="/product-manage" className="block p-3 hover:bg-gray-700">Product Manage</Link></li>
        <li><Link to="/user-manage" className="block p-3 hover:bg-gray-700">User Manage</Link></li>
        <li><Link to="/category" className="block p-3 hover:bg-gray-700">Category</Link></li>
        <li><Link to="/order-manage" className="block p-3 hover:bg-gray-700">Order Manage</Link></li>
        <li><Link to="/category-manage" className="block p-3 hover:bg-gray-700">Category Manage</Link></li>
      </ul>
    </div>
  );
}

export default SlideBar;