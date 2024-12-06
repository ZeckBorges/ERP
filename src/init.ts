// src/init.ts
import { init as initUsers } from './modules/users/routes/usersRoute';
import { init as initProducts } from './modules/produtcs/routes/productRoute';

export const init = (expressInstance: any, basePath: string) => {
  initUsers(expressInstance, basePath);
  initProducts(expressInstance, basePath)
};