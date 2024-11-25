// src/init.ts
import { init as initUsers } from './routes/usersRoute';

export const init = (expressInstance: any, basePath: string) => {
  initUsers(expressInstance, basePath);
};