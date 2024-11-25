import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, 'secreta');  // Verifica o token
    req.user = decoded;  // Coloca os dados do usuário no req
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};
