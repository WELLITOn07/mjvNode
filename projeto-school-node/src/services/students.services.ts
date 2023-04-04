import { Student } from "../models/student.model";

export class StudentsService {
  students: Array<Student> = [
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

  getAll() {
    return this.students;
  }

  getByDocument(document: string) {
    const student = this.students.find((std: any) => std.document === document);

    return student;
  }

  create(student: Student) {
    this.students.push(student);
  }

  remove(documet: string) {
    const studentIndex: number = this.students.findIndex(
      (student: any) => student.document === Number(documet)
    );

    if (studentIndex === -1) {
      throw new Error("Não encontrado!");
    }

    this.students.splice(studentIndex, 1)
  }

  update(document: string, student: Student) {
    const studentIndex: number = this.students.findIndex((student: any) => student.document === Number(document));
  
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!")
    }

    this.students[studentIndex] = student;
  }
}

export default new StudentsService();
