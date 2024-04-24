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

import apiRequest from "../Api/ApiRequest";

export default class Product {
    //field
    public productId: string;
    public productName: string;
    public unit: number;
    public price: number;
    public image: string;
    public categoryId: string;
    public description: string

    //constructor
    public constructor(productId: string, productName: string, unit: number, price: number, image: string, categoryId: string, description: string) {
        this.productId = productId;
        this.productName = productName;
        this.unit = unit;
        this.price = price;
        this.image = image;
        this.categoryId = categoryId;
        this.description = description;
    }

    toJson() {
        return {
            "productId": this.productId,
            "productName": this.productName,
            "unit": this.unit,
            "price": this.price,
            "image": this.image,
            "categoryId": this.categoryId,
            "description": this.description
        }
    }
    //getAllProduct
    public static async getAllProduct(): Promise<Product[] | null> {
        const res = await apiRequest("GET", "/products");

        return res.map((item: any) => new Product(item.productId, item.productName, item.unit, item.price, item.image, item.categoryId, item.description));

    }

    //getProductById
    public static async getProductById(productId: string): Promise<Product | null> {
        const res = await apiRequest("GET", `/products/${productId}`);

        return new Product(res.productId, res.productName, res.unit, res.price, res.image, res.categoryId, res.description);
    }
    
    //insertProduct
    public static async insertProduct(product: Product): Promise<any> {
        const res = await apiRequest('POST', '/products/add', product.toJson());
       
        return res;
    }

    //updateProduct
    public static async updateProduct(product: Product): Promise<any> {
        const res = await apiRequest('PUT', `/products/${product.productId}`, product.toJson());
        
        return res;
    }

    //deletProduct
    public static async deleteProduct(productId: string): Promise<any> {
        const res = await apiRequest('DELETE', `/products/${productId}`);
        
        return res;
    }

    //lay hinh anh
    public static async getProductImage(productId: string): Promise<string|any> {
        const res = await apiRequest('GET', `/products/${productId}/image`);
        return res;
    }
}