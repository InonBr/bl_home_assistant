import { Request, Response, Router } from "express";
import {
  CompanyBodySchemaType,
  CompanyQuerySchemaType,
  companyBodySchema,
  companyQuerySchema,
} from "./companyRoutes.schemas";
import { validateSchema } from "../../systems/utils";
import {
  createNewCompany,
  findCompanies,
} from "../../repositories/company/company.repository";

const companyRoutes = Router();

companyRoutes.post(
  "/company",
  validateSchema(companyBodySchema, "b"),
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

companyRoutes.get(
  "/company",
  validateSchema(companyQuerySchema, "q"),
  async (req: Request<{}, {}, {}, CompanyQuerySchemaType>, res: Response) => {
    try {
      const {
        companyNameSearchType,
        address,
        companyName,
        addressSearchType,
        phone,
      } = req.query;

      const companies = await findCompanies({
        companyNameSearchType,
        address,
        companyName,
        addressSearchType,
        phone,
      });

      res.send(companies);
    } catch (err: any) {
      console.error(err);

      if (err instanceof Error) {
        return res.status(500).json({ msg: err.message });
      }
    }
  }
);

export default companyRoutes;
