/**
 *   {
        "orderId": "1042024211019",
        "address": "21 Hóc Môn",
        "orderDate": "2024-04-10T14:10:19.545Z",
        "phone": "01241475143",
        "status": "Đang xử lý",
        "totalPrice": 35000,
        "username": "user2"
    }
 */
export default interface Order{
    orderId: string;
    address: string;
    orderDate: string;
    phone: string;
    status: string;
    totalPrice: number;
    username: string
}