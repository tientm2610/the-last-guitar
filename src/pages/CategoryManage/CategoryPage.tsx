

function CategoryPage() {
  return (
    <div className="p-8 ml-60 mr-60">
      <div className="flex items-center justify-center mb-2">
        <span className="text-green-500 text-2xl font-bold">Quản lý danh mục</span>
      </div>
      <div className="mb-4 flex justify-center items-center"> {/* Chỉnh sửa lớp CSS ở đây */}
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Find Category in here..."
            className="w-1/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-00">Add Category</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Category Id</th>
              <th className="p-4">Category Name</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Ví dụ về một hàng dữ liệu */}
            <tr className="border-b">
              <td className="p-4">P01</td>
              <td className="p-4">Piano</td>
              <td className="p-4">
                <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Update</button>
                <button className="ml-2 px-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
              </td>
            </tr>
        
            {/* Bạn có thể thêm nhiều hàng dữ liệu tương tự */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryPage;
