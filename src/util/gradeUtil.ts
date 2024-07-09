import { IGrade } from '../db/models/Grade';

export function groupGradesByCode(grades: IGrade[]): Record<string, IGrade[]> {
  return grades.reduce((grouped: Record<string, IGrade[]>, grade) => {
    const { code, value } = grade;
    if (!grouped[code]) {
      grouped[code] = [];
    }
    grouped[code].push(grade);
    return grouped;
  }, {});
}

export function calculateAverages(
  groupedGrades: Record<string, IGrade[]>
): IGrade[] {
  return Object.keys(groupedGrades).map((code) => {
    const grades = groupedGrades[code];
    const total = grades.reduce((sum, grade) => sum + grade.value, 0);
    const average = total / grades.length;
    return { code, value: average };
  });
}
