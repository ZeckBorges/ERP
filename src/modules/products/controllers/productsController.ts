import { Request, Response } from "express"
import { listarProdutos, getProduct } from "../services/productService"

export const listProducts = async (req: Request, res: Response) => {
    try {
        const produtos = await listarProdutos();
        res.json({produtos})
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar dados!!', error });
        console.log(error)
    }
        
}

export const Product = async (req: Request, res: Response) => {
    const id = req.params.id;
    const produto = await getProduct(id)
    res.json(produto)
}