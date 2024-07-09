import { NextFunction, Response, Request } from 'express';
import { GradeService } from '../services/gradeService';

const gradeService = new GradeService();

export const createGrade = async (req: Request, res: Response) => {
  try {
    const student = await gradeService.createGrade(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const updateGrade = async (req: Request, res: Response) => {
  try {
    const { stdNumber } = req.params;
    const student = await gradeService.updateGrade(stdNumber, req.body);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
