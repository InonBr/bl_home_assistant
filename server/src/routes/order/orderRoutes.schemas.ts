import * as yup from "yup";

export const orderBodySchema = yup
  .object({
    employId: yup.string().required().trim(),
    item: yup.string().required().trim(),
    companyId: yup.string().required().trim(),
  })
  .required();

export type OrderBodySchemaType = yup.InferType<typeof orderBodySchema>;
