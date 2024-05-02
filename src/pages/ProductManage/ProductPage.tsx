import { useEffect, useState } from "react";
import Product from "../../entities/Product";

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInfo, setProductInfo] = useState<any>({});

  useEffect(() => {
   
    fetchAllProducts();

  }, []);

  const fetchAllProducts = async () => {
    const products = await Product.getAllProduct();
    if (products) {
      setProducts(products);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (!productInfo) {
        throw new Error("Không có sản phẩm nào được chọn");
      }
      try {
       await Product.updateProduct(productInfo);
        alert(`Cập nhật thành công`); // In ra kết quả từ API
        fetchAllProducts();
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  };

  const deleteProduct = async (productId:string) => {
    try {
     const result =   await Product.deleteProduct(productId);
     
     alert(`Xóa sản phẩm thành công`);
     fetchAllProducts();

    } catch (error) {
      alert(`Sản phẩm đang tồn tại trong một đơn hàng`)
      console.error(error);
    }
      
  }
  

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setProductInfo({...productInfo, [name]: value})
  };
 

  // Design:
  return (
    <div className="p-8 ml-60 mr-60">
      <div className="flex items-center justify-center mb-2">
        <span className="text-gray-500 text-2xl font-bold">
          Quản lý sản phẩm
        </span>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-1/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-60">
          Thêm
        </button>
      </div>

      <div className="flex">
        {/* Bảng hiển thị danh sách sản phẩm */}
        <div className="overflow-x-auto w-8/12 mr-4">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Mã sản phẩm</th>
                <th className="p-4">Hình ảnh</th>
                <th className="p-4">Tên sản phẩm</th>
                <th className="p-4">Giá</th>
                <th className="p-4">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="border-b" key={product.productId}>
                  <td className="p-4">{product.productId}</td>
                  <td className="p-4">
                    <img
                      src={`http://localhost:3333/api/products/${product.productId}/image`}
                      alt="productImage"
                    className="size-20"
                    />
                  </td>
                  <td className="p-4">{product.productName}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">
                    <button
                     onClick={() => setProductInfo(product)}
                    className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                      Sửa
                    </button>
                    <button 
                    onClick={() => deleteProduct(product.productId)}
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Biểu mẫu cập nhật thông tin sản phẩm */}
        <div className="w-4/12 " >
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Thông tin sản phẩm</h2>
             {/* form cập nhật thông tin */}
            <form  onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                 className="block text-sm font-medium text-gray-600">
                  Mã sản phẩm
                </label>
                <input
                 name="productId"
                 value={productInfo && productInfo.productId}
                 onChange={handleChange}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md bg-slate-500 text-zinc-50"
                  disabled
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tên sản phẩm
                </label>
                {/**Tên sản phẩm */}
                <input
                 name="productName"
                 value={productInfo && productInfo.productName}
                 onChange={handleChange}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Danh mục
                </label>
                <input
                 name="categoryId"
                 value={productInfo && productInfo.categoryId}
                 onChange={handleChange}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Số lượng
                </label>
                <input
                 name="unit"
                 value={productInfo && productInfo.unit}
                 onChange={handleChange}
                  type="number"
className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Giá
                </label>
                <input
                 name="price"
                 value={productInfo && productInfo.price}
                 onChange={handleChange}
                  type="number"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Hình ảnh
                </label>
                <input
                 name="image"
                 value={productInfo && productInfo.image}
                 onChange={handleChange}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mô tả
                </label>
                <input
                 name="description"
                 value={productInfo && productInfo.description}
                 onChange={handleChange}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button

                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-48"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
