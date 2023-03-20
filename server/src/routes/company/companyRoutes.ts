import { Request, Response, Router } from "express";
import {
  CompanyBodySchemaType,
  companyBodySchema,
} from "./companyRoutes.schemas";
import { validateSchema } from "../../systems/utils";
import { createNewCompany } from "../../repositories/company/company.repository";

const companyRoutes = Router();

companyRoutes.post(
  "/company",
  validateSchema(companyBodySchema),
  async (req: Request<{}, {}, CompanyBodySchemaType>, res: Response) => {
    try {
      const { name, phone, address } = req.body;

      const newCompanyData = await createNewCompany({ name, phone, address });

      const { companyId, creationDate, orders } = newCompanyData;

      res.send({ name, phone, address, companyId, creationDate, orders });
    } catch (err: any) {
      console.error(err);

      if (err instanceof Error) {
        return res.status(500).json({ msg: err.message });
      }
    }
  }
);

export default companyRoutes;
