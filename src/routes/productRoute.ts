import { listProducts } from "../controllers/productsController";

export const init = (expressInstance: any, basePath: string) => {
    expressInstance.get(`${basePath}/products`, listProducts);

    expressInstance.post(`${basePath}/products`);
}