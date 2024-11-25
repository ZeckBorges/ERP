// src/routes/users.ts

import { getUsers, createUser } from '../controllers/users';


export const init = (expressInstance: any, basePath: string) => {
  expressInstance.get(`${basePath}/users`, getUsers);

  expressInstance.post(`${basePath}/users`, createUser);
};
