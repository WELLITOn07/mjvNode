import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const helloWorld = {message: 'Hello World!'}
    res.send(helloWorld);
});

router.get('/check', (req: Request, res: Response) => {
    const helloWorld = {message: 'Aplicação está funcionando normalmente!'}
    res.send(helloWorld);
});

export default router;


