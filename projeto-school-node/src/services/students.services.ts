import { Student } from "../models/student.model";
import StudentRepository from "../repositories/student.repository";

export class StudentsService {

  getAll() {
    return StudentRepository.getAll()
  }

  getByDocument(document: string) {
    return StudentRepository.getByDocument(document)
  }

  create(student: typeof Student) {
    return StudentRepository.create(student)
  }

  remove(documet: string) {
    return StudentRepository.remove(documet)
  }

  update(document: string, student: typeof Student) {
    StudentRepository.update(document, student)
  }
}
export default new StudentsService();
