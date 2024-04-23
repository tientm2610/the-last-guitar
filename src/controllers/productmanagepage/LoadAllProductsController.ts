import Product from "../../entities/Product";
import apiFetch from "../../scripts/APIFetcher";
import Controller from "../Controller";

export default class LoadAllProductsController implements Controller<LoadAllProductsParam> {
    // Constructors:
    public constructor() {

    }

    // Methods:
    public async execute({ onError, onSuccess }: LoadAllProductsParam): Promise<void> {
        await apiFetch(
            {
                path: '/products',
                method: "GET",
                onSuccess: async function (response) {
                    const products: Product[] = await response.json();
                    onSuccess(products);
                },
                onFailed: async function (reason) {
                    onError(reason);
                },
            }
        );
    }
}

export interface LoadAllProductsParam {
    onSuccess(products: Product[]): void;
    onError(reason: any): void;
}