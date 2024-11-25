import { Request, Response, NextFunction } from 'express';

export const authorize = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.nivelAcesso !== role) {
      return res.status(403).json({ message: 'Acesso negado' });
    }
    next();
  };
};
