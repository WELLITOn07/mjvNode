import { Request, Response, Router } from "express";
import StudentsService from '../services/students.services';

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const students = await StudentsService.getAll();
  res.send(students);
});

router.get('/:document', async (req: Request, res: Response) => {
    const student = await StudentsService.getByDocument(req.params.document);

    res.status(200).send(student);
});

router.post("/", async (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({ message: "Não autorizado!" });
  }
  await StudentsService.create(req.body);
  res.status(201).send({ message: "Criado com sucesso!" });
});

router.delete("/delete/:document", async (req: Request, res: Response) => {
  try {
    await StudentsService.remove(req.params.document)
  } catch(err: any) {
    res.status(400).send({message: err.message})
  }

});

router.put("/:document", async (req: Request, res: Response) => {
    try {
      await StudentsService.update(req.params.document, req.body);
      res.status(200).send({message: 'Estudante atualizado com sucesso!'})
    } catch(err) {
      res.status(400).send(err)
    }
  });

export default router;
