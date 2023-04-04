import { Request, Response, Router } from "express";
import storeServices from '../services/store.services';
import { Product } from "../models/product.model";
const router = Router();
 
router.get("/", (req: Request, res: Response) => {
    const products: Product[] = storeServices.getAll()
    if (!products) {
        return res.status(400).send({ message: 'Não encontrado!' })
    }

    res.status(200).send(products);
});

router.post("/", (req: Request, res: Response) => {
    storeServices.create(req.body)
    res.status(201).send({ message: 'Produto adicionado com sucesso!' })
});

router.put("/:id", (req: Request, res: Response) => {
    try {
        storeServices.update(req.params.id, req.body);
        res.status(200).send({message: 'Produto atualizado com sucesso!'})
      } catch(err) {
        res.status(400).send(err)
      }
});

router.delete("/delete/:id", (req: Request, res: Response) => {
   
});

export default router;

