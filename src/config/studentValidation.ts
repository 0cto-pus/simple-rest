import Joi from 'joi';

export const gradeSchema = Joi.object({
  code: Joi.string().alphanum().required(),
  value: Joi.number()
    .integer()
    .min(0)
    .max(100)
    .options({ convert: false })
    .required(),
});

export const studentSchema = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .required(),
  surname: Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .required(),
  stdNumber: Joi.string().alphanum().required(),
  grades: Joi.array().items(gradeSchema).required(),
});

export const studentUpdateSchema = Joi.object({
  grades: Joi.array().items(gradeSchema).required(),
});

export const stdNumberSchema = Joi.object({
  stdNumber: Joi.string().alphanum().required(),
});
