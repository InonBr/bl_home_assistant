import * as yup from "yup";

export const companyBodySchema = yup
  .object({
    name: yup.string().required().trim(),
    phone: yup.string().required().trim(),
    address: yup.string().required().trim(),
  })
  .required();

export type CompanyBodySchemaType = yup.InferType<typeof companyBodySchema>;
