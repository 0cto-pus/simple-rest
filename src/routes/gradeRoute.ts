import { Router } from 'express';
import { createGrade, updateGrade } from '../controller/gradeController';
import {
  studentSchema,
  studentUpdateSchema,
  stdNumberSchema,
} from '../config/studentValidation';
import { validateRequest } from '../util/validateRequest';

const router = Router();

router.post('/grade', validateRequest(studentSchema), createGrade);
router.put(
  '/grade/:stdNumber',
  validateRequest(studentUpdateSchema, stdNumberSchema),
  updateGrade
);

export default router;
