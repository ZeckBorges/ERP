import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getUserByUsername } from '../services/usersService'; // Função para buscar usuário no banco
import bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const { username, senha } = req.body; // 'username' em vez de 'email'

  try {
    // Buscar o usuário no banco de dados pelo nome de usuário
    const usuario = await getUserByUsername(username);
    if (!usuario) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verificar a senha
    const isMatch = await bcrypt.compare(senha, usuario.Senha);
    if (!isMatch) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { id: usuario.ID, nome: usuario.Nome, nivelAcesso: usuario.NivelAcesso },
      'secreta', // Chave secreta do JWT (troque isso para algo seguro em produção)
      { expiresIn: '1h' } // Tempo de expiração do token
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};
