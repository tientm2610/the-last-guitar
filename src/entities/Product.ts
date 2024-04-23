/**
 * {
        "productId": "P01",
        "productName": "Đàn Piano Yamaha U1",
        "unit": 5,
        "price": 5000,
        "image": "piano.jpg",
        "categoryId": "P",
        "description": "Đàn Piano Yamaha U1 nhập khẩu từ Nhật Bản"
    },
 */

export default interface Product {
    productId: string;
    productName: string;
    unit: number;
    price: number;
    image: string;
    categoryId: string;
    description: string
}