

export default function HeaderComponent() {
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            {/* Phần Logo */}
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="font-bold text-xl">Guitar Center</span>
            </div>

            {/* Phần Tiêu Đề */}
            <div className="flex">
                <a href="/products" className="mr-4 hover:text-gray-300">Product</a>
                <a href="/orders" className="mr-4 hover:text-gray-300">Orders</a>
                <a href="/users" className="hover:text-gray-300">Users</a>
                <a href="/categories" className="hover:text-gray-300">Categories</a>
            </div>

            {/* Phần Đăng Nhập/Đăng Xuất */}
            <div className="flex items-center">
                {/* Thêm nút giỏ hàng */}
                <a href="/cart" className="mr-4">
                    <img src="/cart-icon.png" alt="Giỏ Hàng" className="h-6 mr-2" />
                    Giỏ Hàng
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Đăng Nhập</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Đăng Xuất</button>
            </div>
        </div>
    );
}