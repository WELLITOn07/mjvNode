import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";
import routes from './routers'; //olhando em especifico para o index.ts
import connection from './config/database';

const app = express();

app.use(cors()); //utilize ocors para config de cabeçalhos
app.use(express.json()); //utilize json requests 
app.use(routes);//utilize o index.ts para as rotas

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const helloWorld = {message: 'Hello World!'}
    res.send(helloWorld);
})

app.use(router);

const port: number = 3000; //porta 

connection.then(() => {
    console.log('Banco de dados conectado!');
    app.listen(port, () => {
        console.log('Aplicação online na porta: ', port);
    }) // express `ouve` nessa porta    
}).catch(err => {
    console.log(err);
})


