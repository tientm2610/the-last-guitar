import React from 'react';

function UserPage() {
  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Thêm</button>

      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Tài khoản</th>
              <th className="p-4">Tên</th>
              <th className="p-4">Số điện thoại</th>
              <th className="p-4">Địa chỉ</th>
              <th className="p-4">Giới tính</th>
              <th className="p-4">Ngày sinh</th>
              <th className="p-4">Hành động</th>
            </tr>
          </thead>

              {/* Hàng Thông tin người dùng */}
          <tbody>
            <tr className="border-b">
              <td className="p-4">but2610</td>
              <td className="p-4">Nguyễn Văn A</td>
              <td className="p-4">0785174058</td>
              <td className="p-4">Hoàng Văn Thụ</td>
              <td className="p-4">Nam</td>
              <td className="p-4">26-10-2003</td>
              <td className="p-4">
              <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Sửa</button>
                <button className="ml-2 px-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Xóa</button>
              </td>
            </tr>
          </tbody>
          <tbody>
            {/* Ví dụ về một hàng dữ liệu */}
            <tr className="border-b">
              <td className="p-4">but2610</td>
              <td className="p-4">Nguyễn Văn A</td>
              <td className="p-4">0785174058</td>
              <td className="p-4">Hoàng Văn Thụ</td>
              <td className="p-4">Nam</td>
              <td className="p-4">26-10-2003</td>
              <td className="p-4">
              <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Sửa</button>
                <button className="ml-2 px-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Xóa</button>
              </td>
            </tr>
            {/* Bạn có thể thêm nhiều hàng dữ liệu tương tự */}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default UserPage;
