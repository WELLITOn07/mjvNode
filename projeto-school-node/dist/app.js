"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(cors_1.default); //utilize ocors para config de cabeçalhos
app.use(express_1.default.json()); //utilize json requests 
const port = 3000; //porta 
app.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
}); // express `ouve` nessa porta
