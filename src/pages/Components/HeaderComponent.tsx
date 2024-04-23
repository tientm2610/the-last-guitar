import React, { useState } from 'react';

export default function HeaderComponent() {
    // States
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    
    // Event Handlers
    const handleLogoutClick = () => {
        setShowLogoutPopup(true);
    }
    const handleLogoutConfirm = () => {
        setShowLogoutPopup(false);
    }
    const handleLogoutCancel = () => {
        setShowLogoutPopup(false);
    }

    // Design
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/logo copy.png" alt="Logo" className="h-8 mr-2" />
                <span className="font-bold text-2xl mr-4">Guitar Center</span>
            </div>

            <div className="flex">
                <a href="/" className="menu-link text-lg font-bold mr-4 hover:underline">Product</a>
                <a href="/orders" className="menu-link text-lg font-bold mr-4 hover:underline">Orders</a>
                <a href="/users" className="menu-link text-lg font-bold mr-4 hover:underline">Users</a>
                <a href="/categories" className="menu-link text-lg font-bold mr-4 hover:underline">Categories</a>
            </div>

            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Đăng Nhập</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleLogoutClick}
                >Đăng Xuất</button>
            </div>

            {/* Logout Popup */}
            {showLogoutPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-lg font-semibold mb-4">Bạn có chắc chắn muốn đăng xuất không?</p>
                        <div className="flex justify-center">
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mr-4"
                                onClick={handleLogoutConfirm}
                            >
                                Đồng ý
                            </button>
                            <button 
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={handleLogoutCancel}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    
}
