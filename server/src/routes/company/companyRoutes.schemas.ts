import * as yup from "yup";

export const companyBodySchema = yup
  .object({
    name: yup.string().required().trim(),
    phone: yup.string().required().trim(),
    address: yup.string().required().trim(),
  })
  .required();

export const companyQuerySchema = yup
  .object()
  .shape({
    companyName: yup.string().trim().min(1),
    address: yup.string().trim().min(1),
    phone: yup.string().trim().min(1),
    companyNameSearchType: yup
      .string()
      .oneOf(["eq", "sw", "ew", "mi"])
      .required(),
    addressSearchType: yup.string().oneOf(["eq", "sw", "ew", "mi"]).required(),
  })
  .required();

export type CompanyBodySchemaType = yup.InferType<typeof companyBodySchema>;
export type CompanyQuerySchemaType = yup.InferType<typeof companyQuerySchema>;
