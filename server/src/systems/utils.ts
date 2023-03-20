import { Request, Response, NextFunction } from "express";
import { ValidationError, ObjectSchema } from "yup";

export const validateSchema = (
  schema: ObjectSchema<any>,
  validate: "q" | "b"
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(validate === "b" ? req.body : req.query, {
        abortEarly: false,
        stripUnknown: true,
      });

      next();
    } catch (err: any) {
      console.error(err);

      if (err instanceof ValidationError) {
        res.status(400).json({ errors: err.errors });
      }
    }
  };
};
