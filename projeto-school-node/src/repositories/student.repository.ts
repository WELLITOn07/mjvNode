import { Student } from "../models/student.model";

class StudentRepository {
    getAll() {
        return Student.find();
        //recebe todo o array 
    }

    getByDocument(document: string) {
       return Student.findOne({document: document})
       //achar um objeto com o mesmo document passado
    }

    create(student: typeof Student) {
        return Student.create(student)
    }

    update(document: string, student: Partial<typeof Student>) {
        return Student.updateOne({document: document}, {$set: student})
        //procura através do document e o $set atualiza o objeto em si
    }

    remove(document: string) {
        return Student.deleteOne({document: document})
    }
};

export default new StudentRepository();
