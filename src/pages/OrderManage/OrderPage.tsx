import { useEffect, useState } from "react";
import Order from "../../entities/Order";

function OrderPage() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [orderInfor, setOrderInfor] = useState<any>({});

    useEffect(() => {

    fetchAllOrders();

  },[]);

  const fetchAllOrders = async () => {
    const orders = await Order.getAllOrder();
    if(orders){
      setOrders(orders);
    }
  };

  const handleUpdateStatus = async (order:Order) => {
    try {
      setOrderInfor(order);
      const updatedOrderInfo = { ...orderInfor, orderId: order.orderId, status: orderInfor.status };
        await Order.updateOrderStatus(updatedOrderInfo.orderId,orderInfor.status);
      alert(`Cập nhật đơn hàng thành công`);
      fetchAllOrders();
    } catch (error:any) {
        console.error(error);
    }
  }


  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Cập nhật giá trị của option đã chọn vào orderInfo
    setOrderInfor({ ...orderInfor, status: e.target.value });
  };

  return (
    <div className="p-8 ml-60 mr-60">
      <div className="flex items-center justify-center mb-2">
        <span className="text-green-500 text-2xl font-bold">Quản lý đơn hàng</span>
      </div>
      <div className="mb-4 flex justify-center items-center"> {/* Chỉnh sửa lớp CSS ở đây */}
        <div className="flex-1 mr-4">
          <input
            type="text"
            placeholder="Find Order in here..."
            className="w-1/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white justify-items-center" >
            <tr>
              <th className="p-4">Mã đơn hàng</th>
              <th className="p-4">Địa chỉ</th>
              <th className="p-4">Ngày đặt hàng</th>
              <th className="p-4">Số điện thoại</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4">Tổng thành tiền</th>
              <th className="p-4">Hành động </th>
            </tr>
          </thead>
          <tbody>
            {/* Ví dụ về một hàng dữ liệu */}
            {orders.map((order) => (
                <tr className="border-b" key={order.orderId} >
                <td className="p-4">{order.orderId}</td>
                <td className="p-4">{order.address}</td>
                <td className="p-4">{order.orderDate}</td>
                <td className="p-4">{order.phone}</td>
                <td className="p-4">{order.status}</td>

                <td className="p-4">{order.totalPrice}$</td>
                <td className="p-4">
                  <button onClick={()=>handleUpdateStatus(order)} 
                  className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Cập nhật</button>
                <select 
                 value={orderInfor.status}
                 onChange={handleStatusChange}
                  className="mt-1 p-2 w-full border rounded-md">
                    <option>Đang xử lý</option>
                    <option>Giao hàng thành công</option>
                    <option>Giao hàng thất bại</option>
                  </select>
                </td>
                
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
  }
  
  export default OrderPage;
