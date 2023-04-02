import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();

app.use(cors()); //utilize ocors para config de cabeçalhos
app.use(express.json()); //utilize json requests 

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const helloWorld = {message: 'Hello World!'}
    res.send(helloWorld);
})

app.use(router);

const port: number = 3000; //porta 

app.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
}) // express `ouve` nessa porta

