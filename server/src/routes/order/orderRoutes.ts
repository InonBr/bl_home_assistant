import { Request, Response, Router } from "express";
import { validateSchema } from "../../systems/utils";
import { OrderBodySchemaType, orderBodySchema } from "./orderRoutes.schemas";
import { findCompanyById } from "../../repositories/company/company.repository";
import { createNewOrder } from "../../repositories/order/order.repository";

const orderRoutes = Router();

orderRoutes.post(
  "/order",
  validateSchema(orderBodySchema),
  async (req: Request<{}, {}, OrderBodySchemaType>, res: Response) => {
    try {
      const { companyId, employId, item } = req.body;

      const company = await findCompanyById(companyId);

      if (!company) {
        return res.status(404).json({ msg: "company not found" });
      }

      const { orderId, orderDate } = await createNewOrder({
        company,
        employId,
        item,
      });

      res.send({ companyId, employId, item, orderId, orderDate });
    } catch (err: any) {
      console.error(err);

      if (err instanceof Error) {
        return res.status(500).json({ msg: err.message });
      }
    }
  }
);

export default orderRoutes;
