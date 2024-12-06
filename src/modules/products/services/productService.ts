import { Produto } from '../models/productModel';

export const listarProdutos = async () => {
  return await Produto.findAll();
};

export const criarProduto = async (dadosProduto: any) => {
  return await Produto.create(dadosProduto);
};

export const atualizarProduto = async (id: number, dadosAtualizados: any) => {
  return await Produto.update(dadosAtualizados, { where: { ID: id } });
};

export const deletarProduto = async (id: number) => {
  return await Produto.destroy({ where: { ID: id } });
};
