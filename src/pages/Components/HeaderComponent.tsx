import React from 'react';

export default function HeaderComponent() {
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="font-bold text-2xl mr-4">Guitar Center</span>
            </div>

            <div className="flex">
                <a href="/products" className="menu-link text-lg font-bold mr-4 hover:underline">Product</a>
                <a href="/orders" className="menu-link text-lg font-bold mr-4 hover:underline">Orders</a>
                <a href="/users" className="menu-link text-lg font-bold mr-4 hover:underline">Users</a>
                <a href="/categories" className="menu-link text-lg font-bold mr-4 hover:underline">Categories</a>
            </div>

            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Đăng Nhập</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Đăng Xuất</button>
            </div>
        </div>
    );
}