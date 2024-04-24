/**
 *  {
        "price": "5000",
        "unit": "2",
        "orderId": "1142024101628",
        "productId": "P01"
    }
 */
import apiRequest from "../Api/ApiRequest";

export default class OrderDetail{
   public price: number;
   public unit: number;
   public orderId: string;
   public productId: string

   constructor(unit: number, price: number, orderId: string, productId: string) {
       this.unit = unit;
       this.price = price;
       this.orderId = orderId;
       this.productId = productId;
   }

 

   //getAllOrderDetail
   public static async getAllOrderDetail(): Promise<OrderDetail[] | null> {
       const res = await apiRequest("GET", "/detail/:orderId");
       return res;
   }
}