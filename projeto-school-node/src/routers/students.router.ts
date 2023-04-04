import { Request, Response, Router } from "express";
import StudentsService from '../services/students.services';
import { Student } from "../models/student.model";
import { error } from "console";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const students: Student[] = StudentsService.getAll();
  res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = StudentsService.getByDocument(req.params.document);

    res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({ message: "Não autorizado!" });
  }
  StudentsService.create(req.body);
  res.status(201).send({ message: "Criado com sucesso!" });
});

router.delete("/delete/:document", (req: Request, res: Response) => {
  try {
    StudentsService.remove(req.params.document)
  } catch(err: any) {
    res.status(400).send({message: err.message})
  }

});

router.put("/:document", (req: Request, res: Response) => {
    try {
      StudentsService.update(req.params.document, req.body);
      res.status(200).send({message: 'Estudante atualizado com sucesso!'})
    } catch(err) {
      res.status(400).send(err)
    }
  });

export default router;
