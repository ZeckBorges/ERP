import { Request, Response } from 'express';
import { loginUser } from '../services/usersService';  // Função de login do service

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await loginUser(username, password);
    if (!token) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};
