import { GradeRepository } from '../db/repository/gradeRepository';
import Student, { IStudent, IGrade } from '../db/models/Grade';
import { groupGradesByCode, calculateAverages } from '../util/gradeUtil';

export class GradeService {
  private repository: GradeRepository;

  constructor() {
    this.repository = new GradeRepository();
  }

  async createGrade(gradeData: IStudent): Promise<IStudent> {
    const { grades, ...rest } = gradeData;

    const groupedGrades = groupGradesByCode(grades);
    const averagedGrades = calculateAverages(groupedGrades);

    const student = new Student({
      ...rest,
      grades: averagedGrades,
    });
    return this.repository.create(student);
  }

  async updateGrade(
    stdNumber: string,
    gradeData: Partial<IStudent>
  ): Promise<IStudent | null> {
    const student = await this.repository.findByStudentNumber(stdNumber);

    if (!student) {
      return null;
    }

    // Update basic fields if provided
    if (gradeData.name) student.name = gradeData.name;
    if (gradeData.surname) student.surname = gradeData.surname;

    const { grades, ...rest } = gradeData || {};

    if (gradeData.grades && gradeData.grades.length > 0) {
      const newGrades = gradeData.grades;

      const existingGradesGrouped = groupGradesByCode(student.grades);

      // Update existing grades with provided new values
      newGrades.forEach((newGrade) => {
        const { code, value } = newGrade;
        if (existingGradesGrouped[code]) {
          existingGradesGrouped[code].push({ code, value });
        } else {
          existingGradesGrouped[code] = [{ code, value }];
        }
      });

      const averagedGrades = calculateAverages(existingGradesGrouped);

      // Update it with averaged grades
      student.grades = averagedGrades;
    }
    return this.repository.update(student);
  }
}
