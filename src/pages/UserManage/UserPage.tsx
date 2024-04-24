import React, { useEffect,useState } from 'react';
import User from '../../entities/User';

function UserPage() {

  const[users, setUsers] = useState<User[]>([]);
  
  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      const users = await User.getAllUser();
      if(users){
        setUsers(users);
    }
  };

  fetchAllUsers();
}, []);
  return (
    <div className="p-8  ml-60 mr-60"  >
      <div className="flex items-center justify-center mb-2">
            <span className="text-gray-500 text-2xl font-bold">Quản lý sản phẩm</span>
          </div>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className=" w-1/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-60">Thêm</button>
      </div>

      <div className="overflow-x-auto w-10/12">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
          <tr>
              <th className="p-4">Tài khoản</th>
              <th className="p-4">Tên</th>
              <th className="p-4">Số điện thoại</th>
              <th className="p-4">Địa chỉ</th>
              <th className="p-4">Hành động</th>
            </tr>
          </thead>

              {/* Hàng danh sách user*/}
          <tbody>
            {users.map((user) => (
               <tr className="border-b">
               <td className="p-4">{user.username}</td>
               <td className="p-4">{user.fullname}</td>
               <td className="p-4">{user.phone}</td>
               <td className="p-4">{user.address}</td>
               <td className="p-4">
               <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Sửa</button>
                 <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Xóa</button>
               </td>
             </tr>
            ))}
        
          </tbody>
        
        </table>
      </div>
     
      {/**Form cập nhật thông tin */}

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Thông tin người dùng</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" >Tài khoản</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md bg-slate-500 text-zinc-50"  disabled/>
        </div>
      
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Họ tên</label>
          <input type="text"className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
          <input type="text"  className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Giới tính</label>
          <select  className="mt-1 p-2 w-full border rounded-md">
            <option>Nam</option>
            <option >Nữ</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
          <input type="date"  className="mt-1 p-2 w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Quyền</label>
          <select className="mt-1 p-2 w-full border rounded-md">
            <option >User</option>
            <option >Admin</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-48">Cập nhật</button>
        </div>
      </form>
    </div>
    </div>

    
  );
}

export default UserPage;

