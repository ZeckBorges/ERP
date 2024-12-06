// src/models/usersModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../db/database';

interface UsuarioAttributes {
  ID: number;
  Nome: string;
  Email: string;
  Senha: string;
  NivelAcesso: string;
  DataCriacao?: Date;
  DataAlteracao?: Date;
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'ID' | 'DataCriacao' | 'DataAlteracao'> {}

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes
{
  public ID!: number;
  public Nome!: string;
  public Email!: string;
  public Senha!: string;
  public NivelAcesso!: string;
  public DataCriacao!: Date;
  public DataAlteracao!: Date;
}

Usuario.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    Senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    NivelAcesso: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    DataCriacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // Conexão com o banco
    tableName: 'Usuarios',
    timestamps: false, // Desabilita os campos createdAt e updatedAt
  }
);

export default Usuario; // Agora está exportando o modelo de forma padrão
