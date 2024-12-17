import { listProducts, Product } from "../controllers/productsController";

export const init = (expressInstance: any, basePath: string) => {
    expressInstance.get(`${basePath}/products`, listProducts);

    expressInstance.get(`${basePath}/products/:id`, Product);

    expressInstance.post(`${basePath}/products`);
}