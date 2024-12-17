import { Request, Response } from 'express';
import { loginUser, listarUsuarios } from '../services/usersService';  // Função de login do service

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

export const createUser = async (req: Request, res: Response) => {
  return res.json({message: 'Usuário criado!!'})
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await listarUsuarios();
    console.log(users)
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários!!', error });
        console.log(error)
  }
};