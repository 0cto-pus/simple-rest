import Student, { IStudent } from '../models/Grade';

export class GradeRepository {
  async create(student: IStudent): Promise<IStudent> {
    return student.save();
  }

  async findByStudentNumber(stdNumber: string): Promise<IStudent | null> {
    return Student.findOne({ stdNumber });
  }

  async update(student: IStudent): Promise<IStudent> {
    return student.save();
  }
}
