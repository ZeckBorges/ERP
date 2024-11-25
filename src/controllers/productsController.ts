import { Request, Response } from "express"

export const listProducts = async (req: Request, res: Response) => {
    return res.json({message: 'Listagem de Produtos!'})
}