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

import apiRequest from "../Api/ApiRequest";

export default class Order{
    public orderId: string;
    public address: string;
    public orderDate: string;
    public phone: string;
    public status: string;
    public totalPrice: number;
    public username: string

    public constructor(orderId: string, address: string, orderDate: string, phone: string, status: string, totalPrice: number, username: string) {
        this.orderId = orderId;
        this.address = address;
        this.orderDate = orderDate;
        this.phone = phone;
        this.status = status;
        this.totalPrice = totalPrice;
        this.username = username;
    }


    //getAllOrder
    public static async getAllOrder(): Promise<Order[] | null> {
        const res = await apiRequest("GET", "/orders");

        return res.map((item: any) => new Order(item.orderId, item.address, item.orderDate, item.phone, item.status, item.totalPrice, item.username));
    }

    public static async updateOrderStatus(orderId: string, status: string): Promise<any> {
        try {
        
            const res = await apiRequest(`PUT`,`/orders/${orderId}`, {"status": status});
        
            return res;
        } catch (error:any) {
            throw new Error(`Lỗi khi cập nhật đơn hàng: ${error.message}`);
        }
        
        
    }
}