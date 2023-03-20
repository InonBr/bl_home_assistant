import { Request, Response, Router } from "express";
import { companyBodySchema } from "./companyRoutes.schemas";
import { ValidationError } from "yup";

const companyRoutes = Router();

companyRoutes.post("/company", async (req: Request, res: Response) => {
  try {
    const companyBody = companyBodySchema.validateSync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    res.send({ ...companyBody });
  } catch (err: any) {
    console.error(err);

    if (!(err instanceof ValidationError)) {
      return res.status(500).json({ msg: err.message });
    }

    const error = err as ValidationError;
    return res.status(422).json({ errors: error.errors });
  }
});

export default companyRoutes;
