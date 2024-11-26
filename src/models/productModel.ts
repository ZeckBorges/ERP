import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/database';

export class Produto extends Model {}

Produto.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Categoria: {
        type: DataTypes.STRING,
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
    sequelize,
    modelName: 'Produto',
    tableName: 'Produtos',
    timestamps: false,
  }
);
