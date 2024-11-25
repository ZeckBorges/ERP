// src/init.ts
import { init as initUsers } from './routes/usersRoute';
import { init as initProducts } from './routes/productRoute';

export const init = (expressInstance: any, basePath: string) => {
  initUsers(expressInstance, basePath);
  initProducts(expressInstance, basePath)
};