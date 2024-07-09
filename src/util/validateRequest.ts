import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const formatJoiError = (error: any) => {
  return error.details
    .map((detail: any) => {
      const field = detail.path.join('.');
      const message = detail.message.replace(/["\\]/g, '');
      return `Validation error on field "${field}": ${message}`;
    })
    .join(', ');
};

export const validateRequest = (schema: Schema, paramSchema?: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error: bodyError } = schema.validate(req.body);
    const { error: paramError } = paramSchema?.validate(req.params) || {
      error: null,
    };

    if (bodyError || paramError) {
      const formattedError = formatJoiError(bodyError || paramError);
      return res.status(400).json({ error: formattedError });
    }

    next();
  };
};
