import { Request, Response, Router } from "express";

const router = Router();

const students: Array<{
  name: string;
  email: string;
  document: string;
  password: string;
  age: number;
}> = [
  {
    name: "Welliton",
    email: "Welliton@gmail.com",
    document: "012.010.100-20",
    password: "12345",
    age: 30,
  },
  {
    name: "Marcos",
    email: "Marcos@gmail.com",
    document: "012.010.100-30",
    password: "12345",
    age: 35,
  },
  {
    name: "Leonardo",
    email: "Leonardo@gmail.com",
    document: "22",
    password: "12345",
    age: 47,
  },
  {
    name: "Bruna",
    email: "Bruna@gmail.com",
    document: "012.010.100-40",
    password: "12345",
    age: 18,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = students.find((std: any) => std.document === req.params.document)

    res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({ message: "Não autorizado!" });
  }
  students.push(req.body);
  res.status(201).send({ message: "Criado com sucesso!" });
});

router.delete("/delete/:document", (req: Request, res: Response) => {
  const studentIndex: number = students.findIndex((student: any) => student.document === Number(req.params.document));

  if (studentIndex === -1) {
    return res.status(400).send({ message: "Não encontrado!" });
  }
  students.splice(studentIndex, 1);
  res.status(200).send({ message: "Removido com sucesso!" });
});

router.put("/:document", (req: Request, res: Response) => {
    const studentIndex: number = students.findIndex((student: any) => student.document === Number(req.params.document));
  
    if (studentIndex === -1) {
      return res.status(400).send({ message: "Não encontrado!" });
    }
    students[studentIndex] = req.body;
    res.status(200).send({message: 'Atualizado com sucesso!'})
  });

export default router;
