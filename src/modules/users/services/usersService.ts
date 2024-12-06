// src/services/usuarioService.ts
import Usuario from '../models/usersModel';


export const loginUser = async (username: string, senha: string) => {
  try {
    const usuario = await Usuario.findOne({ where: { Nome: username } });
    if (usuario && usuario.Senha === senha) {
      return usuario;
    }
    throw new Error('Credenciais inválidas');
  } catch (error) {
    throw new Error('Erro ao autenticar usuário');
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const usuario = await Usuario.findOne({
      where: {
        Nome: username, // Supondo que o campo no banco de dados seja "Nome"
      },
    });

    return usuario;
  } catch (error) {
    console.error('Erro ao buscar usuário pelo username:', error);
    throw error;
  }
};